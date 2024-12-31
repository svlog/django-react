
FROM python:3.11-slim

WORKDIR /app/backend

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

COPY docker/requirements.txt /app/backend

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/backend

EXPOSE 8000
