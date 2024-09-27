# Use the official Node.js image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Production image
FROM node:18 AS production

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app ./

# Expose the port for the NestJS app
EXPOSE 3001

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
