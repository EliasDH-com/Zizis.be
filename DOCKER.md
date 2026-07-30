![logo](https://eliasdh.com/assets/media/images/logo-github.png)
# 💙🤍DOCKER🤍💙

## 📘Table of Contents

1. [📘Table of Contents](#📘table-of-contents)
2. [🚀Docker](#🚀docker)
    - [🚀Frontend](#🚀frontend)

## 🚀Docker

### 🚀Frontend
- Pull the latest image and run the container
```bash
sudo docker pull ghcr.io/eliasdhcom/zizisbe-frontend:latest
sudo docker run --name zizisbe-frontend-container -p 8080:8080 -d ghcr.io/eliasdhcom/zizisbe-frontend:latest
```

- Check the logs
```bash
sudo docker logs zizisbe-frontend-container
```

- Stop and remove the existing container and image
```bash
sudo docker stop zizisbe-frontend-container
sudo docker rm zizisbe-frontend-container
sudo docker rmi ghcr.io/eliasdhcom/zizisbe-frontend:latest
```