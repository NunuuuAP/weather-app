cd weather-web-vue
docker build -t weather-napp-vue .
docker run -p 8080:8080 -d weather-napp-vue
open http://localhost:8080
