const IP = "192.168.0.183"
const PORT = "7512";

const {
    Kuzzle,
    WebSocket,
} = require('kuzzle-sdk');

        
const kuzzle = new Kuzzle(
    new WebSocket(IP, {port: 7512}),
);

kuzzle.connect().then((res) => console.log("then", res)).catch((err) => console.log("catch", err)).finally(() => {
    kuzzle.disconnect();
})