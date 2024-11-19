from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for React development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(name: str = Form(...), age: int = Form(...), file: UploadFile = File(...)):
    return {"message": f"Received: {name}, {age}, {file.filename}"}
