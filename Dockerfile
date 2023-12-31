# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose a port (usually 80 for web applications)
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]
