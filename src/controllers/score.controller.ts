import {controller, httpGet, httpPost, interfaces, requestBody} from "inversify-express-utils";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";
import {ScoreRequestModel} from "../models/score-request.model";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpGet('/')
    private getHighScores() {
        return this.scoreService.getHighScores();
    }

    @httpPost('/')
    private submitScore(@requestBody() score: ScoreRequestModel) {
        return this.scoreService.saveScore(score);
    }
}