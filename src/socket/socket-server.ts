import * as http from 'http';
import * as socketIO from 'socket.io';
import {Socket} from "socket.io";
import {Controller} from "./types";
import {Application} from "express";

export class SocketServer {

    private io: socketIO.Server;

    constructor(private readonly app: Application, private readonly controllers: Controller[]) { }

    readonly init = () => {
        const server = http.createServer(this.app);
        this.io = socketIO(server);
        this.io.on('connection', this.registerHandlers);
    };

    private registerHandlers = (socket: Socket) => {
        for (const controller of this.controllers) {
            const mapping = controller.handlers();
            for (const route in mapping) {
                socket.on(route, (...args: any[]) => {
                    mapping[route](socket, ...args);
                });
            }
        }
    };
}