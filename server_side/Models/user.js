import mongoose from 'mongoose';
import { generateUUID } from '../Utils/helpers.js';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    default: generateUUID,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    ref: 'Role',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
