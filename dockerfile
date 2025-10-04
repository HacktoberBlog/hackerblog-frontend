# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server with host binding
CMD ["npm", "run", "dev:docker"]
