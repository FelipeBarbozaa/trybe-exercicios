import { Schema } from 'mongoose';

export interface ICup {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionStrikers?: string[];
  editionGoals?: number;
  bestPlayer?: string;
  bestGoalkeeper?: string;
  bestYoungPlayer?: string;
}

export const CupSchema = new Schema<ICup>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionStrikers: { type: [{type: String}], required: false },
  editionGoals: { type: Number, required: false },
  bestPlayer: { type: String, required: false },
  bestGoalkeeper: { type: String, required: false },
  bestYoungPlayer: { type: String, required: false }
}, {
  versionKey: false,
});

export interface ICupModel {
  getAll(): Promise<ICup[]>;
  getByYear(year: number): Promise<ICup[]>;
  create(data: ICup): Promise<void>;
}