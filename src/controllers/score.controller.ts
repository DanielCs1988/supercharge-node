import {Request, Response } from 'express';
import {controller, httpGet, interfaces} from "inversify-express-utils";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpGet('/')
    private get(req: Request, res: Response) {

    }
}