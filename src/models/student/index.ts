import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  name: { type: String , required: false },
  lastname: { type: String, required: false },
  email: { type: String , required: false },
  dni: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  status: { type: Boolean, required: false }
}, {
  timestamps: true
});

const Student = model('Student', studentSchema);

export default Student;