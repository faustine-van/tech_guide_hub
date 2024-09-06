// utils/helpers.js
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

/**
 * Generates a random secret string Key.
 * 
 * Note: The function currently logs the secret but does not return it or use it
 * in any other way. If you need to use the generated secret elsewhere, consider
 * returning it from the function.
 */
const generateSecretKey = () => {
    const secret = crypto.randomBytes(32).toString('base64');
    return secret;
}

/**
 * Generates a uuid string.
 */
const generateUUID = () => uuidv4();


export { generateUUID, generateSecretKey };


