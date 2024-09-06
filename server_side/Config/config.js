// config.js
// Loads and exports configuration settings from environment variables.
import 'dotenv/config'

const appConfig = {
    serverPort: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    SECRET_KEY: process.env.SECRET_KEY,
    // JWT_SECRET: process.env.JWT_SECRET 
}

export default appConfig;