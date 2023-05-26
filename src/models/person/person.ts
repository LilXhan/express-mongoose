import { Schema, model } from 'mongoose';

const personSchema = new Schema({
  name: { type: String, required: false}
});