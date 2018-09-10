import { injectable } from "inversify";
import { Score } from "../models/score.model";
import {ScoreRequestModel} from "../models/score-request.model";

@injectable()
export class ScoreService {

    getHighScores = () => {
        return Score.find({});
    };

    saveScore = async (score: ScoreRequestModel) => {
        const newScore = new Score(score);
        console.log(newScore);
        const { _id } = await newScore.save();
        return {
            position: _id
        };
    };
}