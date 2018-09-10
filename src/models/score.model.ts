import {Document, model, Schema} from 'mongoose';

export interface ScoreModel extends Document {
    steps: number;
    seconds: number;
    name: string;
}

const ScoreSchema = new Schema({
    steps: {
        type: Number,
        required: true
    },
    seconds: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

export const Score = model<ScoreModel>('Score', ScoreSchema);