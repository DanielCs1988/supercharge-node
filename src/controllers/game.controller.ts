import {Request, Response } from 'express';
import {controller, httpGet, interfaces} from "inversify-express-utils";
import {inject} from "inversify";
import {GameService} from "../services/game.service";

@controller('/game')
export class GameController implements interfaces.Controller {

    constructor(@inject('GameService') private gameService: GameService) { }

    @httpGet('/:size')
    private get(req: Request, res: Response) {
        
    }
}