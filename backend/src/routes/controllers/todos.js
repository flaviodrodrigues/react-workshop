import { Router } from 'express';
import { todos } from '../../db';
import { notFound, badRequest } from '../../helpers/errors';

const router = Router();

router.get('/', (req, res) => {
  res.json(todos().getAll());
});

router.post('/', (req, res, next) => {
  const todo = todos().add(req.body);

  if (todo) {
    res.json(todo);
  } else {
    next(badRequest());
  }
});

router.get('/:id', (req, res, next) => {
  const todo = todos().get(req.params.id);

  if (todo) {
    res.json(todo);
  } else {
    next(notFound('Todo not found'));
  }
});

router.put('/:id', (req, res, next) => {
  const todo = todos().update(req.params.id, req.body);

  if (todo) {
    res.json(todo);
  } else {
    next(badRequest());
  }
});

router.delete('/:id', (req, res, next) => {
  const deleted = todos().del(req.params.id);

  if (deleted) {
    res.json();
  } else {
    next(notFound());
  }
});

export default router;