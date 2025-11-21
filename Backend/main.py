from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests
import re

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

API_KEY = "AIzaSyDF61qgFSBEMGRtIfyDo597ulVC9DH2LVs"
MODEL = "models/gemini-2.5-flash"

def trim_response(text, num_sentences=3):
    sentences = re.split(r'(?<=[.!?]) +', text)
    return ' '.join(sentences[:num_sentences])

def query_gemini(message):
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
        print("GOOGLE API ERROR:", response.status_code, response.text)
        raise

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message", "")
    try:
        reply = query_gemini(user_message)
        return {"reply": reply}
    except Exception as e:
        print("BACKEND ERROR:", str(e))
        return {"reply": f"Backend error: {e}"}
