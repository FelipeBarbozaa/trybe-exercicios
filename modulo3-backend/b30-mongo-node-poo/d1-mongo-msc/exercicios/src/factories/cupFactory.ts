import CupController from "../controllers/CupController";
import CupService from "../services/CupService";
import CupRepository from "../repositories/CupRepository";

export default () => {
  const model = new CupRepository();
  const service = new CupService(model);
  const controller = new CupController(service);

  return controller;
};