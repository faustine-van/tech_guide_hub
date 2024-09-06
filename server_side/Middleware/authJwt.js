import jwt from 'jsonwebtoken';
import appConfig from '../Config/config.js';
import db from '../Models/Models.js';

const User = db.user;
const Role = db.role;

const { SECRET_KEY } = appConfig;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ msg: 'No token provided!' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ msg: 'Unauthorized!' });
        }

        req.userId = decoded.id;
        next();
    });
};

const hasRole = (roleName) => async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).exec();
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const roles = await Role.find({ _id: { $in: user.roles } }).exec();
        if (roles.some(role => role.name === roleName)) {
            return next();
        }

        return res.status(403).send({ message: `Require ${roleName.charAt(0).toUpperCase() + roleName.slice(1)} Role!` });
    } catch (err) {
        return res.status(500).send({ message: err.message || "Error occurred while verifying roles." });
    }
};

const isAdmin = hasRole("admin");
const isAuthor = hasRole("author");
const isModerator = hasRole("moderator");

export { verifyToken, isAdmin, isAuthor, isModerator };
