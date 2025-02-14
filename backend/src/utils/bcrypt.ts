import bcrypt from "bcrypt";

/**
 * Hash a plaintext password
 *
 * @param {string} value - The plaintext password
 * @param {number} [saltRounds=10] - The number of rounds to use for hashing the password
 * @returns {Promise<string>} - A promise that resolves to the hashed password
 */
export const hashPassword = async(value: string, saltRounds: number = 10): Promise<string> => 
    await bcrypt.hash(value, saltRounds);

/**
 * Compare a plaintext password to a hashed password
 *
 * @param {string} value - The plaintext password
 * @param {string} hashValue - The hashed password
 * @returns {Promise<boolean>} - A promise that resolves to true if the passwords match, false otherwise
 */
export const comparePassword = async(value: string, hashValue: string): Promise<boolean> => 
    await bcrypt.compare(value, hashValue);