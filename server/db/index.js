import pg from 'pg';
import logger from '../lib/logger.js';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL } = process.env;

const databaseUrl =
  DATABASE_URL || 'postgresql://mario:msp1020@localhost:5432/dbstore';

const { Pool } = pg;

const pool = new Pool({
  connectionString: databaseUrl,
});

export const query = async ({ tag = '', queryString, params }) => {
  try {
    const start = Date.now();
    const { rows } = await pool.query(queryString, params);
    const duration = Date.now() - start;
    logger.info({ database: { tag, duration, rows: rows.length } });
    return rows;
  } catch (error) {
    const { message } = error;
    logger.error({ database: { error: { Message } } });
    throw new Error(error);
  }
};

export const findOne = async ({ tag = '', queryString, params }) => {
  const [one] = await query({ tag, queryString, params });
  return one;
};
