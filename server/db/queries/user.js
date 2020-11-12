import { query, findOne } from '../index.js';

const insertUser = async ({ email, passHash, passSalt }) =>
  await query({
    tag: 'user.insert',
    queryString: `INSERT INTO users (email, pass_salt, pass_hash) 
    VALUES('${email}', '${passSalt}', '${passHash}')`,
  });

const getByEmail = async ({ email }) =>
  await findOne({
    tag: 'user.getByEmail',
    queryString: `SELECT * FROM users WHERE email = '${email}'`,
  });

export default { insertUser, getByEmail };
