import ErrorHandler from "../utils/ErrorHandler";
import { ICupModel, ICup } from "../schemas/CupSchema";

export default class CupService implements ICupModel {
  constructor(private _cupModel: ICupModel) {}

  async getAll(): Promise<ICup[]> {
    const cups = await this._cupModel.getAll();
    return cups;
  }

  async getByYear(year: number): Promise<ICup[]> {
    const cup = await this._cupModel.getByYear(year)
    if (cup.length === 0) throw new ErrorHandler(404, 'Não teve copa nesse ano');
    return cup;
  }
}
