// server.js
/*Entry point for the application. Sets up the Express server,
connects to the database, and configures middleware and routes. */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import appConfig from './Config/config.js';
import routeConfigurerV1 from './Routes/v1/index.js';
import db from './Config/dbConfig.js';
import { generateSecretKey } from './Utils/helpers.js';

const { serverPort } = appConfig;

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
};
app.use(cors(corsOptions));



// // Connect to MongoDB
// await db.role.find().then(roles => console.log('Roles:', roles))
// .catch(err => console.error('Error fetching roles:', err));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Incoming Request:', req.method, req.url, req.body);
    next();
});

routeConfigurerV1(app);

app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));

export default app
