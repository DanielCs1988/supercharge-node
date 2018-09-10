import { injectable } from "inversify";
import {ScoreModel} from "../models/score.model";
import {ScoreRequestModel} from "../models/score-request.model";
import {ScoreResponseModel} from "../models/score-response.model";

@injectable()
export class ScoreService {

    getHighScores = (): ScoreModel[] => {
        return [
            {
                "steps": 0,
                "seconds": 0,
                "name": "string"
            }
        ];
    };

    saveScore = (score: ScoreRequestModel): ScoreResponseModel => {
        return {
            "position": 0
        };
    };
}