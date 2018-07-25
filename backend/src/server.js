import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import { notFound, defaultError } from './middlewares';
import routes from './routes';

export const start = ({ port = 3000 } = {}) => {
  const app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', routes);
  app.use(notFound);
  app.use(defaultError);

  app.listen(port, () => console.log(`Server listening on port ${port}\n`));

  return app;
}
