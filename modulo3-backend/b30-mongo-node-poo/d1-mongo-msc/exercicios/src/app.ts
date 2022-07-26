import * as express from 'express';
import CupModel from './repository/CupRepository'
import createConnection from './models/connection';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    createConnection();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.get('/', async (req, res) => {
      const model = new CupModel();
      const result = await model.getAll();
      console.log(result);
      return res.status(200).json(result);
    });
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };