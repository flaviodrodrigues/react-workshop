import { notFound as notFoundError } from '../helpers/errors';

export const notFound = (req, res, next) => {
  next(notFoundError());
}

export const defaultError = (err, req, res, next) => {
  const {
    message = 'Server Error',
    status = 500,
  } = err;

  res.status(status);
  res.json({ error: { message, status } });
}
