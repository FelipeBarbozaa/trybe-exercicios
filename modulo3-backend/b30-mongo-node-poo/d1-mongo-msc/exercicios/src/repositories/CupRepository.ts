import { model as createModel } from 'mongoose';
import { CupSchema, ICup, ICupModel } from '../schemas/CupSchema';

export default class CupRepository implements ICupModel {
  constructor(private _cupModel = createModel<ICup>('tournaments', CupSchema)) {}

  async getAll(): Promise<ICup[]> {
    const cups = await this._cupModel.find();
    return cups;
  }

  async getByYear(year: number): Promise<ICup[]> {
    const cup = await this._cupModel.find({ year });
    return cup;
  }

  async create(data: ICup): Promise<void> {
    await this._cupModel.create(data);
  }
}