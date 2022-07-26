import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICupModel } from '../schemas/CupSchema';

export default class CupController {
  constructor(private _cupService: ICupModel) {}

  async getAll(_req: Request, res: Response) {
    const cups = await this._cupService.getAll();
    return res.status(StatusCodes.OK).json(cups);
  }

  async getByYear(req: Request, res: Response) {
    const { year } = req.params;
    const cup = await this._cupService.getByYear(parseInt(year));
    return res.status(StatusCodes.OK).json(cup);
  }
}