import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
import dotenv from 'dotenv';
dotenv.config();

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    console.log("New connection");
    const data = await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to the server");
    socket.send(data.id.toString());
})
