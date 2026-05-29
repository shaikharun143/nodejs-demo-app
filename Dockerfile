# Use a small, current LTS Node image
FROM node:20-alpine

# App working directory inside the container
WORKDIR /app

# Copy manifests first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the rest of the source
COPY . .

# Document the port the app listens on
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
