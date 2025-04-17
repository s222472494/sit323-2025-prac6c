# SIT323-2025-Prac6C

## Overview
This repository contains the deliverables for the SIT323 Cloud Application Development Practical Task 6.2C. The task involves deploying a containerized application to a Kubernetes cluster.

## Files
- `Dockerfile`: Contains instructions to build the application image.
- `deployment.yaml`: Kubernetes deployment configuration for the application.
- `service.yaml`: Kubernetes service configuration to expose the application.
- `README.md`: Documentation for the task, including setup instructions.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/username/sit323-2025-prac6c.git
   cd sit323-2025-prac6c
   ```

2. **Build the Docker image:**

   Navigate to the directory containing your `Dockerfile` and build the image:

   ```bash
   docker build -t your-image-name .
   ```

3. **Push the Docker image to Docker Hub (optional):**

   If required, push the image to a container registry (e.g., Docker Hub):

   ```bash
   docker tag your-image-name username/repository-name:tag
   docker push username/repository-name:tag
   ```

4. **Deploy to Kubernetes:**

   Make sure your Kubernetes cluster is running. Apply the deployment and service configurations:

   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

5. **Access the Application:**

   Use port-forwarding to access the application locally:

   ```bash
   kubectl port-forward svc/your-service-name 8080:80
   ```

   Then, navigate to `http://localhost:8080` to access your application.

## Troubleshooting

- Ensure your Kubernetes cluster is running and configured properly.
- Make sure you have the correct permissions to deploy and expose services in the cluster.

## Conclusion

This task demonstrates the use of Docker and Kubernetes for deploying a cloud-based application. All deliverables and configurations are provided in this repository.
