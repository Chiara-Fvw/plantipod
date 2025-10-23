-- Drop existing tables in correct order to avoid foreign key conflicts
DROP TABLE IF EXISTS blog_images;
DROP TABLE IF EXISTS blog_posts;
DROP TABLE IF EXISTS course_modules;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS podcasts;

-- Recreate tables
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_images (
  id SERIAL PRIMARY KEY,
  blog_id INTEGER NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  position INTEGER CHECK (position IN (1, 2)),
  alt_text VARCHAR (255)
);

CREATE TABLE podcasts (
  id SERIAL PRIMARY KEY,
  episode_num INTEGER NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  release_date DATE NOT NULL,
  duration INTERVAL NOT NULL
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  img TEXT NOT NULL,
  total_duration INTERVAL
);

CREATE TABLE course_modules (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  module_number INTEGER NOT NULL,
  module_title TEXT NOT NULL,
  module_description TEXT,
  duration INTERVAL NOT NULL,
  UNIQUE(course_id, module_number)
);