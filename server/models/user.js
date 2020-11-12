import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import User from '../db/queries/user.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const { TOKEN_SECRET } = process.env;

const validatePassword = (userData) => {
  const { password, passwordConfirmation } = userData;
  return password === passwordConfirmation;
}

const md5 = (string) => crypto.createHash('md5').update(string).digest('hex');

const authenticate = ({ password, passHash, passSalt }) => {
  return md5(`${passSalt}${password}`) === passHash;
}

export const registringAnUser = async (userData) => {

  const { password, email} = userData;
  const arePasswordsValid = validatePassword(userData);

  if (arePasswordsValid) {
    const passSalt = uuidv4();
    const passHash = md5(`${passSalt}${password}`)
    try{
      await User.insertUser({ email, passHash, passSalt });
    } catch (error) {
      throw new Error('Error inserting user in database');
    }  
  } else {
    throw new Error('Password is not the same');
  }
};

export const logingInAnUser = async (userData) => {
  const { email, password } = userData;
  try {
    const user = await User.getByEmail({ email });
    const { pass_salt, pass_hash, user_id } = user;    
    const isAuthenticated = authenticate({
      password,
      passHash: pass_hash,
      passSalt: pass_salt,
    });
    
    if (isAuthenticated) {
      const token = await jwt.sign(
        {
          user_id,
        },
        TOKEN_SECRET,
        { expiresIn: 60 * 60 * 24 },
      );
      return {
        email,
        token,
      };
    }

    throw new Error('User wrong password.');

  } catch (error) {
    throw new Error('Error looking for an user in the database.');
  }

};