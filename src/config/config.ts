import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const  MONGO = {
  url: MONGO_URL
};

const config = {
  mongo: MONGO
};

export default config;