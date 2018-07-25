
export const notFound = (message) => {
  return error(404, message || 'Not Found');
}

export const badRequest = (message) => {
  return error(400, message || 'Bad Request');
}

export const error = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
}
