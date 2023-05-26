import mongoose from 'mongoose';
import config from '../config/config';

async function connectDB() {
  await mongoose.connect(config.mongo.url ?? '');
};

export default connectDB;