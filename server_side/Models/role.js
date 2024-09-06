import mongoose from 'mongoose';
import { generateUUID } from '../Utils/helpers.js';


const roleSchema = new mongoose.Schema({
    id: {
        type: String,
        default: generateUUID,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true
});

const Role = mongoose.model('Role', roleSchema);

export default Role;