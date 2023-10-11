cd weather-web-vue
npm install
npm install -g http-server
npm run build
nohup http-server dist -p 8081 &
open http://127.0.0.1:8081
