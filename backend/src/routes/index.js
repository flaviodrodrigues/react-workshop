import { Router } from 'express';
import todosController from './controllers/todos';

const router = Router();

router.use('/todos', todosController);

export default router;