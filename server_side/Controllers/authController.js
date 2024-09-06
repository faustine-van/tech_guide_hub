import db from "../Models/Models.js";

const User = db.user;
const Role = db.role;

import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import appConfig from '../Config/config.js';

const { SECRET_KEY } = appConfig;

const signUp = async (req, res) => {
    console.log('Request Body:', req.body);
    try {
        const newUser = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
        await newUser.save();

        let roles;
        if (req.body.roles) {
            roles = await Role.find({ id: { $in: req.body.roles } });
            console.log(roles)
        } else {
            roles = await Role.findOne({ name: 'user' });
            roles = [roles];
            console.log(roles)
        }

        newUser.roles = roles.map(role => role.id);
        await newUser.save();

        res.send({ msg: "User was registered successfully!" });

    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }).populate(
            {
                path: 'roles',
                select: '-__v',
                model: 'Role',
                match: {id: {$exists: true}}
            }
           ).exec();
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log(user)

        const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({
                access_token: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id }, SECRET_KEY, {
            algorithm: 'HS256',
            expiresIn: 86400, // 24 hours
        });

        const userPermissions = user.roles.map(role => 'ROLE_' + role.name.toUpperCase());

        res.status(200).send({
            access_token: token,
            id: user.id,
            email: user.email,
            roles: userPermissions
        });

    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

export { signUp, signIn };
