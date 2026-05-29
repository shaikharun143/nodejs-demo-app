# 🚀 CI/CD Pipeline: Automated Node.js Deployment with GitHub Actions & Docker

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge)
![Build Status](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)

---

## 📌 Overview

This project demonstrates a **production-style CI/CD pipeline** using:

- **GitHub Actions** for automation
- **Node.js** for application runtime
- **Docker** for containerization
- **DockerHub** for image registry

### 🎯 Objective

Automate the complete software delivery pipeline so that:

> Every push to the `main` branch automatically triggers testing, builds a Docker image, and publishes it to DockerHub.

No manual deployment steps required.

---

## 🏗️ Architecture


Developer → GitHub Push → GitHub Actions CI/CD Pipeline
↓
Run Tests (Node.js)
↓
Build Docker Image
↓
Push Image to DockerHub
↓
Deployable Artifact Ready


---

## 🛠️ Tech Stack

| Layer        | Technology |
|--------------|------------|
| Backend      | Node.js    |
| CI/CD        | GitHub Actions |
| Container    | Docker     |
| Registry     | DockerHub  |

---

## 📂 Project Structure

```

nodejs-demo-app/
├── .github/workflows/
│   └── main.yml
├── src/
├── tests/
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md

⚙️ CI/CD Pipeline Workflow

The pipeline is divided into two automated stages:

🧪 1. Build & Test Stage
Checkout repository code
Setup Node.js environment (v20)
Install dependencies using npm ci
Execute unit tests using npm test

✔ Ensures only validated code proceeds to deployment

🐳 2. Docker Build & Push Stage

Triggered only if tests pass:

Authenticate with DockerHub
Build Docker image from Dockerfile
Push image with two tags:
latest
<commit-SHA> (version traceability)

🔐 Ensures reproducible and version-controlled deployments

🔐 Security Implementation
DockerHub authentication handled using GitHub Secrets
No credentials stored in codebase
Secrets used:
Secret Name	Description
DOCKERHUB_USERNAME	DockerHub username
DOCKERHUB_TOKEN	Access token (Read/Write)
🚀 Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/<your-username>/nodejs-demo-app.git
cd nodejs-demo-app
2️⃣ Install Dependencies
npm install
npm test
3️⃣ Run Locally
npm start

App runs at:


<img width="1372" height="690" alt="cf9e4a67-102f-4109-a4f5-cb50d51a67de" src="https://github.com/user-attachments/assets/0ceb512d-7955-4c4b-aca4-69fbc1f69dfa" />

http://localhost:3000
🔄 CI/CD Execution Flow
Trigger Event

Any push to:

main branch
Execution Steps
1. GitHub detects push
2. Workflow starts
3. Tests executed
4. Docker image built
5. Image pushed to DockerHub
🐳 Run Docker Image
docker run -p 3000:3000 <your-username>/nodejs-demo-app:latest
📸 Proof of Execution (Screenshots)

Include the following in your submission:

✅ GitHub Actions successful pipeline (green check)
🐳 DockerHub repository with pushed image
📦 Running container output in browser
🔁 CI/CD Demonstration

To demonstrate automation:

# Make a code change
git add .
git commit -m "Update application response"
git push origin main
Result:
GitHub Actions re-triggers automatically
Tests re-run
New Docker image is built and pushed
📈 Key DevOps Learnings
CI/CD pipeline design
GitHub Actions workflow automation
Docker image lifecycle management
Secure secrets handling
Versioned deployments using commit SHA
Production-style deployment workflow
🎯 Outcome

<img width="1367" height="611" alt="9a982ee3-e90c-4f1f-a0de-772b49957bcb" src="https://github.com/user-attachments/assets/406315cc-c2ad-4902-ab6b-3966884a8b68" />


This project demonstrates a real-world DevOps workflow where:

✔ Code is tested automatically
✔ Builds are containerized
✔ Images are versioned and stored
✔ Deployment is fully automated

👨‍💻 Author

Harun Yahya Shaik
DevOps & Cloud Enthusiast
Skills: Node.js | Docker | GitHub Actions | AWS | CI/CDME.md explaining the setup.
