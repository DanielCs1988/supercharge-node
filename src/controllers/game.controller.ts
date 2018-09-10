import { Response } from 'express';
import {controller, httpGet, interfaces, requestParam, response} from "inversify-express-utils";
import {inject} from "inversify";
import {GameService} from "../services/game.service";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private startNewGame(@requestParam('size') size: number, @response() res: Response) {
        try {
            return this.gameService.getNewGame(size);
        } catch (error) {
            res.status(400);
            return 'Invalid input';
        }
    }
}