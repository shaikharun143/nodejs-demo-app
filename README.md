Automating Code Deployment with a CI/CD Pipeline
GitHub Actions · Node.js · Docker · DockerHub — Step-by-Step Guide
Understanding the goal
You're building a pipeline that, every time you push code to main , automatically runs your tests, builds a Docker image of your app, and
pushes that image to DockerHub. GitHub Actions is the engine that watches your repository and runs these steps on a fresh virtual
machine in the cloud — so you never run docker build or docker push manually again.
Step 1 — Prepare the project locally
Unzip the sample project (or create the files yourself). Then generate the lock file and confirm the tests pass before touching GitHub:
cd nodejs-demo-app
npm install # creates package-lock.json
npm test # should show passing tests
npm start # open http://localhost:3000 to see it run
Important: the pipeline uses npm ci , which requires a committed package-lock.json . Running npm install once locally generates it. Skip
this and the pipeline fails at the install step.
Step 2 — Create the GitHub repository
On GitHub, click New repository, name it nodejs-demo-app , and leave it empty (no README, since the project already has one). Then
from your project folder:
git init
git add .
git commit -m "Initial commit: Node app + CI/CD pipeline"
git branch -M main
git remote add origin https://github.com/<your-username>/nodejs-demo-app.git
git push -u origin main
The moment this push lands, GitHub detects .github/workflows/main.yml and the pipeline starts running.
Step 3 — Set up DockerHub and an access token
Create a free account at hub.docker.com. Then go to Account Settings → Personal access tokens → Generate new token. Give it
Read/Write permissions and copy the token immediately (you cannot view it again). Use a token rather than your password because it is
safer and revocable.
Step 4 — Add secrets to GitHub
In your repo, go to Settings → Secrets and variables → Actions → New repository secret and add two secrets:
DOCKERHUB_USERNAME — your DockerHub username
DOCKERHUB_TOKEN — the access token from Step 3
The workflow references these as ${{ secrets.DOCKERHUB_USERNAME }} , so the names must match exactly. Secrets are encrypted and
never printed in logs.
Step 5 — Understand what the workflow does
The main.yml file defines two jobs. The first, build-and-test , checks out your code, installs Node 20, installs dependencies, and runs npm
test . The second, docker-build-push , has needs: build-and-test , so it only runs if the tests pass — the core safety guarantee of CI/CD.
It logs into DockerHub, builds the image from your Dockerfile , and pushes two tags: latest and one tagged with the exact commit SHA,
so you can always trace which code produced which image. The if: condition ensures images are pushed only on real pushes to main ,
not on pull requests.
Step 6 — Trigger and verify
Any push to main (including your Step 2 push) triggers the run. Open the Actions tab in your repo to watch it live — you'll see the two
jobs execute in sequence with green checkmarks. Then check DockerHub: a new nodejs-demo-app image should appear. To prove it works
end-to-end, pull and run the published image anywhere:
docker run -p 3000:3000 <your-username>/nodejs-demo-app:latest
Step 7 — Demonstrate the automation
To show the loop closing, make a small change (for example, edit the greeting text in server.js ), commit, and push. Watch the Actions
tab re-run automatically and a fresh image appear on DockerHub. That is the test → build → push automation working with no manual
steps — exactly what the task asks you to demonstrate.
What to submit as deliverables
Your GitHub repo link is the main deliverable. Strengthen it with: a screenshot of a green pipeline run from the Actions tab, a screenshot of
your image on DockerHub, and the README.md explaining the setup.
