DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  pass_salt TEXT NOT NULL,
  pass_hash TEXT NOT NULL
);


