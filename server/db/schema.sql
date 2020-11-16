DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS videos CASCADE;
DROP TABLE IF EXISTS ratingphotos CASCADE;
DROP TABLE IF EXISTS ratingvideos CASCADE;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  pass_salt TEXT NOT NULL,
  pass_hash TEXT NOT NULL
);

CREATE TABLE photos(
  photos_id INT PRIMARY KEY,
  author_id INT NOT NULL,
  name_author VARCHAR(255) NOT NULL,
  src_original TEXT NOT NULL,
  src_tiny TEXT NOT NULL,
  height INT,
  width INT
);

CREATE TABLE videos(
  videos_id INT PRIMARY KEY,
  author_id INT NOT NULL,
  name_author VARCHAR(255) NOT NULL,
  link TEXT NOT NULL,
  filetype TEXT NOT NULL,
  height INT,
  width INT
);

CREATE TABLE ratingphotos(
  ratingphotos_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  photos_id INT NOT NULL,
  rating_value INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (photos_id) REFERENCES photos(photos_id) 
);

CREATE TABLE ratingvideos(
  ratingvideos_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  videos_id INT NOT NULL,
  rating_value INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (videos_id) REFERENCES videos(videos_id)   
);

--  FOREIGN KEY(artist) REFERENCES artists(id)





