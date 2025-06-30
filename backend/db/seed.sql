-- ===============================
-- Seed Data for PlantiPod Database
-- ===============================

-- Clear all data and reset IDs
TRUNCATE blog_images, blog_posts, podcasts, course_modules, courses RESTART IDENTITY CASCADE;

-- Insert courses
INSERT INTO courses (title, description, total_duration) VALUES
('Make Your Own Kokedama', 'Learn the art of creating beautiful kokedama plant arrangements from scratch.', INTERVAL '3 hours'),
('Take Care of Your Crass Plants', 'Essential care tips and tricks to keep your crass plants healthy and thriving.', INTERVAL '2 hours 30 minutes');

-- Insert podcasts
INSERT INTO podcasts (episode_num, title, description, release_date, duration) VALUES
(1, 'Get to Know PlantiPod', 'Introduction to PlantiPod and what we offer.', '2025-06-01', INTERVAL '00:15:00'),
(2, 'Why Are Plants So Important?', 'Exploring the benefits of plants for our health and environment.', '2025-06-08', INTERVAL '00:20:00'),
(3, 'Plants for Stress Relief', 'How plants can help reduce stress and improve well-being.', '2025-06-15', INTERVAL '00:18:00'),
(4, 'How to Make Your Plants Survive', 'Survival tips for your beloved plants.', '2025-06-22', INTERVAL '00:22:00'),
(5, 'Seasonal Plant Care', 'Adjusting plant care routines throughout the seasons.', '2025-06-29', INTERVAL '00:19:00');

-- Insert blog posts
INSERT INTO blog_posts (title, content) VALUES
('Indoor Plants: A Beginner''s Guide', 'This post covers everything you need to know about starting with indoor plants.'),
('Soil Guide for Healthy Plants', 'Learn about different types of soil and how to choose the best one for your plants.'),
('Watering Your Plants the Right Way', 'Tips on how to water your plants properly to keep them happy and healthy.');

-- Insert blog images (2 images per post: real + placeholder)
INSERT INTO blog_images (blog_id, url, position, alt_text) VALUES
(1, '/images/blog/indoor-plants.png', 1, 'Indoor plants in a cozy living room'),
(1, 'https://via.placeholder.com/600x400?text=Plant+Image+Placeholder', 2, 'Placeholder image for indoor plants'),

(2, '/images/blog/soil-guide.png', 1, 'Different types of soil in pots'),
(2, 'https://via.placeholder.com/600x400?text=Plant+Image+Placeholder', 2, 'Placeholder image for soil guide'),

(3, '/images/blog/watering-plants.png', 1, 'Watering a green houseplant'),
(3, 'https://via.placeholder.com/600x400?text=Plant+Image+Placeholder', 2, 'Placeholder image for watering plants');
