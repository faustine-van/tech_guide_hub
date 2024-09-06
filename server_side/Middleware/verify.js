import db from "../Models/Models.js";

const ROLES = db.ROLES;
const User = db.user;
const Role = db.role;



const checkIfEmailExist = async (req, res, next) => {
    try {
        // Check for duplicate email
        const userByEmail = await User.findOne({email: req.body.email}).exec();
        if (userByEmail){
            return res.status(400).send({ msg: 'Email is already in use!' });
        }
        // If no duplicates, proceed to the next middleware
        next();
    } catch (error) {
        res.status(500).send({ message: err.message || "Error occurred while checking for duplicates." });

    }
}
const checkIfRolesExist = async (req, res, next) => {
    if (req.body.roles) {
        // Fetch roles ids from the database
        const roles = await Role.find({ id: { $in: req.body.roles } });
        
        // Create a set of valid role IDs from the database
        const validRoleIds = new Set(roles.map(role => role.id));
        
        // Check if all provided roles exist
        for (const id of req.body.roles) {
            if (!validRoleIds.has(id)) {
                return res.status(400).send({ msg: `Role ${id} does not exist!` });
            }
        }
    }
    // If no errors, proceed to the next middleware
    next();
}

export { checkIfEmailExist, checkIfRolesExist };
