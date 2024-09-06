import express from 'express';
import AppController from "../../Controllers/AppController.js";
import { checkIfEmailExist, checkIfRolesExist } from '../../Middleware/verify.js';
import { signUp, signIn } from "../../Controllers/authController.js";
import { adminBoard, allAccess, moderatorBoard, userBoard } from '../../Controllers/userController.js';
import { isAdmin, isModerator, verifyToken } from '../../Middleware/authJwt.js';

// Function to configure version 1 routes
const routeConfigurerV1 = (app) => {
    const routesV1 = express.Router();

    // Apply custom headers middleware
    routesV1.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Sign up user route
    routesV1.post('/auth/signup',
        [checkIfEmailExist, checkIfRolesExist],
        signUp
    );

    // Sign in user route
    routesV1.post('/auth/signin', signIn);

    // Check status route
    routesV1.get('/', AppController);

    // Test routes
    routesV1.get("/test/all", allAccess);
    routesV1.get("/test/user", [verifyToken], userBoard);
    routesV1.get("/test/mod", [verifyToken, isModerator], moderatorBoard);
    routesV1.get("/test/admin", [verifyToken, isAdmin], adminBoard);

    // Attach the router to the application with /api/v1 prefix
    app.use('/api/v1', routesV1);
}

export default routeConfigurerV1;
