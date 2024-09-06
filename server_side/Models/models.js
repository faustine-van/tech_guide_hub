import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import User from './user.js';
import Role from './role.js';

const db = {};

// Adds the Mongoose instance to the db object.
db.mongoose = mongoose;
db.user = User;
db.role = Role;

db.ROLES = ["user", "admin", "moderator", "author"];

export default db;