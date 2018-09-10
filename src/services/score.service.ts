import {inject, injectable} from "inversify";
import { Score } from "../models/score.model";
import {ScoreRequestModel} from "../models/score-request.model";
import {GameService} from "./game.service";

@injectable()
export class ScoreService {

    constructor(@inject('GameService') private gameService: GameService) { }

    getHighScores = () => {
        return Score.find({});
    };

    saveScore = async (score: ScoreRequestModel) => {
        const currentGame = this.gameService.getCurrentGames().find(game => game.token === score.token);
        if (
            ! currentGame ||
            !this.gameService.isNumber(score.steps) ||
            !this.gameService.isNumber(score.seconds) ||
            currentGame.pictures.length > score.steps
        ) {
            throw new Error('Invalid score!');
        }
        const newScore = new Score(score);
        const { _id } = await newScore.save();
        return {
            position: _id
        };
    };
}