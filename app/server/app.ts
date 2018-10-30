import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as session from 'express-session';
import * as connectMongo from 'connect-mongo';
import * as morgan from 'morgan';
import * as cors from 'cors';

import { ServerError } from './typedef';

import {
  MONGO_URI,
  SESSION_SECRET,
  PORT,
  CLIENT_ORIGIN
} from './config/config-file';
import { connectDb, disconnectDb } from './config/db-config';
import { Server } from 'http';

const MongoStore = connectMongo(session);

// create express instance
const app = express();

const store = new MongoStore({
  url: MONGO_URI,
  stringify: false
});

app.use(express.json());

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// Catch-all 404
app.use(function (req, res, next) {
  let err: ServerError = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err: ServerError, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: err.status,
    error: app.get('env') === 'development' ? err : {}
  });
});

if (require.main === module) {
  connectDb(MONGO_URI);
}