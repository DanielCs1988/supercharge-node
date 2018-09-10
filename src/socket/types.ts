import {Socket} from "socket.io";

export type HandlerMapping = { [event: string]: (socket: Socket, ...args: any[]) => void };

export interface Controller {
    handlers(): HandlerMapping;
}
