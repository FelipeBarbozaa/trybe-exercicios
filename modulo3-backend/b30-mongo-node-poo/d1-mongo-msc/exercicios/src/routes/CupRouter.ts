import { Router } from 'express';
import cupFactory from '../factories/cupFactory';

const router = Router();

router.get('/', (req, res) => cupFactory().getAll(req, res));
router.get('/:year', (req, res) => cupFactory().getByYear(req, res));

export default router;