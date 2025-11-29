from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
import re
import os
from pathlib import Path

# Try to load environment variables from a .env file located next to this script
env_path = Path(__file__).with_name('.env')
try:
    from dotenv import load_dotenv
    load_dotenv(dotenv_path=env_path)
except Exception:
    # If python-dotenv isn't installed, rely on existing environment variables
    pass

with open('agency_context.txt', encoding='utf-8') as f:
    AGENCY_CONTEXT = f.read()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def trim_response(text, num_sentences=3):
    sentences = re.split(r'(?<=[.!?]) +', text)
    return ' '.join(sentences[:num_sentences])

def mask_sensitive_info(text):
    """Mask API keys and other sensitive information from error messages."""
    # Mask API keys (typical format: AIza... for Google)
    text = re.sub(r'key=[A-Za-z0-9_-]+', 'key=***MASKED***', text)
    # Mask full API keys in URLs or errors
    text = re.sub(r'AIza[A-Za-z0-9_-]{35}', '***API_KEY_MASKED***', text)
    return text

def query_gemini(message):
    # Read API key and model from environment (loaded from .env if available)
    API_KEY = os.getenv('API_KEY')
    MODEL = os.getenv('MODEL_NAME') or os.getenv('MODEL')

    if not API_KEY:
        raise RuntimeError("API_KEY is not set. Please set API_KEY in Backend/.env or environment variables.")
    if not MODEL:
        raise RuntimeError("MODEL_NAME is not set. Please set MODEL_NAME in Backend/.env or environment variables.")

    url = f"https://generativelanguage.googleapis.com/v1/{MODEL}:generateContent?key={API_KEY}"
    big_prompt = f"""Agency info:
{AGENCY_CONTEXT}
---
Please provide a short and concise answer (2-3 sentences max).
User question: {message}
"""
    payload = {
        "contents": [
            {"role": "user", "parts": [{"text": big_prompt}]}
        ]
    }
    response = requests.post(url, json=payload, headers={"Content-Type": "application/json"})
    try:
        response.raise_for_status()
        data = response.json()
        print("GOOGLE RESPONSE:", data)
        # Defensive extraction in case response structure changes
        candidates = data.get("candidates")
        if not candidates:
            return "AI did not return a response."
        content = candidates[0].get("content")
        if not content or not content.get("parts"):
            return "AI replied without text."
        reply_text = content["parts"][0].get("text", "")
        # Optionally trim response to 2-3 sentences
        reply_text = trim_response(reply_text, num_sentences=3)
        return reply_text
    except Exception as e:
        # Log full error server-side for debugging
        print("GOOGLE API ERROR:", response.status_code, response.text)
        # Return a safe, user-friendly error message without exposing sensitive data
        if response.status_code == 403:
            return "Access denied. Please check your API key and permissions."
        elif response.status_code == 400:
            return "Invalid request. Please try again with a different message."
        elif response.status_code == 429:
            return "Service temporarily unavailable. Please try again later."
        else:
            return f"AI service error (HTTP {response.status_code}). Please try again."

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message", "")
    try:
        reply = query_gemini(user_message)
        return {"reply": reply}
    except Exception as e:
        print("BACKEND ERROR:", str(e))
        # Return a generic error to the user without exposing internal details
        return {"reply": "An unexpected error occurred. Please try again later."}
