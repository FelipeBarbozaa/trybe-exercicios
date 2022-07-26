import * as express from 'express';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import 'express-async-errors';
import createConnection from './models/connection';
import cupRouter from './routes/CupRouter';

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

    this.app.use('/', cupRouter);
    this.app.use(ErrorMiddleware)
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };