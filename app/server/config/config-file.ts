const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/dev';
const SESSION_SECRET = process.env.SESSION_SECRET || 'this_should_be_secret';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || `localhost:${PORT}`;

export {
  PORT,
  MONGO_URI,
  SESSION_SECRET,
  CLIENT_ORIGIN
};