drop table if exists albums CASCADE;
drop table if exists users CASCADE;

CREATE TABLE albums (
  id SERIAL primary key,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id serial primary key,
  name text not null,
  email text not null,
  password text not null
);
