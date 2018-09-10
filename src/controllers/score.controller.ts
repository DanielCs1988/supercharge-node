import {controller, httpGet, httpPost, interfaces, requestBody} from "inversify-express-utils";
import {ScoreService} from "../services/score.service";
import {inject} from "inversify";
import {ScoreRequestModel} from "../models/score-request.model";
import {ScoreResponseModel} from "../models/score-response.model";

@controller('/score')
export class ScoreController implements interfaces.Controller {

    constructor(@inject('ScoreService') private scoreService: ScoreService) { }

    @httpGet('/')
    private getHighScores() {
        return this.scoreService.getHighScores();
    }

    @httpPost('/')
    private submitScore(@requestBody() score: ScoreRequestModel): ScoreResponseModel {
        return this.scoreService.saveScore(score);
    }
}