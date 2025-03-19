from fastapi import FastAPI
from database import Base, engine
from routes import router

# Create tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)



@app.get("/")
def read_root():
    return {"message": "Welcome to Soundverse Backend"}

@app.get("/health")
def health_check():
    return {"status": "OK"}







