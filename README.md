# nodejs-demo-app — CI/CD with GitHub Actions + Docker

A minimal Node.js (Express) app wired up to a GitHub Actions pipeline that
**tests → builds → pushes a Docker image to DockerHub** on every push to `main`.

## Project structure
```
nodejs-demo-app/
├── .github/workflows/main.yml   # the CI/CD pipeline
├── test/app.test.js             # automated tests (Jest + supertest)
├── server.js                    # the Express app
├── package.json
├── Dockerfile                   # container build instructions
├── .dockerignore
└── .gitignore
```

## Pipeline flow
1. Push to `main` triggers the workflow.
2. **Job 1 (build-and-test):** checkout → setup Node → `npm ci` → `npm test`.
3. **Job 2 (docker-build-push):** runs only if Job 1 passes → logs in to
   DockerHub → builds the image → pushes `:latest` and a `:<commit-sha>` tag.

## Required GitHub secrets
Set these in the repo: **Settings → Secrets and variables → Actions → New repository secret**
- `DOCKERHUB_USERNAME` — your DockerHub username
- `DOCKERHUB_TOKEN` — a DockerHub **access token** (not your password)

## Run locally
```bash
npm install
npm test
npm start        # then open http://localhost:3000
```

## Run with Docker locally
```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```
