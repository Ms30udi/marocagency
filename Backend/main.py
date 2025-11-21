from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests

# --- Load your agency context from the external text file ---
with open('agency_context.txt', encoding='utf-8') as f:
    AGENCY_CONTEXT = f.read()

app = FastAPI()

# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "*"],  # '*' for dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "AIzaSyDLjaBchGiyrXbkWl8DvYu4SxeES7PIQaA"
MODEL = "gemini-2.5-flash"

def query_gemini(message):
    url = f"https://generativelanguage.googleapis.com/v1/models/{MODEL}:generateContent?key={API_KEY}"
    # Compose the prompt as context + user message, RAG-style
    big_prompt = f"""Agency info:
{AGENCY_CONTEXT}
---
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
        return data["candidates"][0]["content"]["parts"][0]["text"]
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
