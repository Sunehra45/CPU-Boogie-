import express from "express";
import { WebSocketServer } from "ws";
import http from 'http' ;

const app = express();
app.get("/", (req, res) => {
    res.send("hey i m llistenig")
}
)
const port = 3000;
const server = http.createServer(app)

server.listen(port, ()=>{
    console.log('APP LISTENING')
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    ws.on("message" , (data)=>{
   console.log(data);
   ws.send("hey thanks...")
    })
 
});

//SOCKET.IO

