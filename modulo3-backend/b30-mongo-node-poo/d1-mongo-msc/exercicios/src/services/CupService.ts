import ErrorHandler from "../utils/ErrorHandler";
import { ICupModel, ICup } from "../schemas/CupSchema";
const Joi = require('joi');

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

  validateFields(data: ICup) {
    const schema = Joi.object({
      year: Joi.number().required().max(2022),
      hostCountry: Joi.string().min(4).max(30).required(),
      champions: Joi.string().min(4).max(30).required(),
      runnerUp: Joi.string().min(4).max(30).required(),
      editionStrikers: Joi.array().min(1).max(20),
      editionGoals: Joi.number(),
      bestPlayer: Joi.string().min(4).max(30),
      bestGoalkeeper: Joi.string().min(4).max(30),
      bestYoungPlayer: Joi.string().min(4).max(30),
    });

    return schema.validate(data);
  }

  async create(data: ICup): Promise<void> {
    const { error } = this.validateFields(data);
    if (error) throw new ErrorHandler(500, error.message)
    await this._cupModel.create(data);
  }
}
