import { MongoClient, Db } from 'mongodb';

let client: MongoClient;

export const connectDb = (url: string) => {
  client = new MongoClient(url);
  client.connect().then(() => console.log(`connected to mongo database at ${url}`))
    .catch(err => {
      console.log('MongoDB connection error. ' + err);
      console.log('Please make sure MongoDB is running...');
    });
};

export const disconnectDb = () => {
  client.close(true);
};

