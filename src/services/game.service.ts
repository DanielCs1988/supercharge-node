import { injectable } from "inversify";
import { GameModel } from "../models/game.model";
import * as uuid from "uuid/v1";

const ALL_CARDS = ['angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'];
const CARD_NUMBER_LOWER_LIMIT = 2;
const CARD_NUMBER_UPPER_LIMIT = ALL_CARDS.length;

@injectable()
export class GameService {

    private currentGames: GameModel[] = [];

    readonly getNewGame = (size: number): GameModel => {
        if (!this.isNumber(size) || size < CARD_NUMBER_LOWER_LIMIT || size > CARD_NUMBER_UPPER_LIMIT) {
            throw new Error('Invalid stack size!');
        }
        const game = {
            token: uuid(),
            pictures: this.generateCards(size)
        };
        this.currentGames.push(game);
        return game;
    };

    readonly closeGame = (token: string) => {
        this.currentGames = this.currentGames.filter(game => game.token !== token);
    };

    readonly getCurrentGames = () => {
        return [...this.currentGames];
    };

    readonly isNumber = (num: any) => {
        return !isNaN(+num) && isFinite(num);
    };

    private readonly generateCards = (size: number): string[] => {
        const cards = this.shuffle(ALL_CARDS).slice(0, size);
        return this.shuffle([...cards, ...cards]);
    };

    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    private readonly shuffle = (pictures: string[]): string[] => {
        for (let i = pictures.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
        }
        return pictures;
    };
}