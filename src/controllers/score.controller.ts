import {controller, httpGet, httpPost, interfaces, requestBody, response} from "inversify-express-utils";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";
import {ScoreRequestModel} from "../models/score-request.model";
import {Response} from "express";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpGet('/')
    private getHighScores() {
        return this.scoreService.getHighScores();
    }

    @httpPost('/')
    private async submitScore(@requestBody() score: ScoreRequestModel, @response() res: Response) {
        try {
            return await this.scoreService.saveScore(score);
        } catch (error) {
            res.status(400);
            return error.message;
        }
    }
}