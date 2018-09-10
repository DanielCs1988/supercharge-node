import { injectable } from "inversify";
import { GameModel } from "../models/game.model";

const CARD_NUMBER_LOWER_LIMIT = 2;
const CARD_NUMBER_UPPER_LIMIT = 20;

@injectable()
export class GameService {

    readonly getNewGame = (size: number): GameModel => {
        if (!this.isNumber(size) || size < CARD_NUMBER_LOWER_LIMIT || size > CARD_NUMBER_UPPER_LIMIT) {
            throw new Error('Invalid stack size!');
        }
        return {
            token: 'asd',
            pictures: ['card1', 'card2']
        };
    };

    private readonly isNumber = (num: any) => {
        return !isNaN(+num) && isFinite(num);
    };
}