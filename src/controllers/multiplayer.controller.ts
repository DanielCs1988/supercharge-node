import {Controller, HandlerMapping} from "../socket/types";
import {Socket} from "socket.io";
import {SocketActions} from "../socket/action";
import {GameService} from "../services/game.service";

export class MultiplayerController implements Controller {

    private gameIdMapping = new Map<string, string>();

    constructor(private gameService: GameService) { }

    handlers(): HandlerMapping {
        return {
            [SocketActions.NEW_GAME]: this.onNewGame
        };
    }

    private onNewGame = (socket: Socket, size: number, ack: Function) => {
        try {
            const game = this.gameService.getNewGame(size);
            this.gameIdMapping.set(socket.id, game.token);
            ack(game);
        } catch (e) {
            ack(null, e);
        }
    };
}