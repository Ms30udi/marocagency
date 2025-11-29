#!/usr/bin/env python3
"""
Simple startup script to run the FastAPI backend with configurable port from .env
"""
import os
import sys
import subprocess
from pathlib import Path

# Load environment variables from .env
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).with_name('.env')
    load_dotenv(dotenv_path=env_path)
except Exception:
    pass

# Read port from environment, default to 8000
port = os.getenv('PORT', '8000')

# Validate port is a valid number
try:
    port_num = int(port)
    if not (0 < port_num < 65536):
        raise ValueError("Port must be between 1 and 65535")
except ValueError as e:
    print(f"Error: Invalid PORT value '{port}'. {e}")
    sys.exit(1)

# Run uvicorn with the configured port
print(f"Starting FastAPI server on port {port}...")
subprocess.run([
    sys.executable, '-m', 'uvicorn',
    'main:app',
    '--reload',
    '--host', '127.0.0.1',
    '--port', port
])
