-- ===============================
-- Seed Data for PlantiPod Database
-- ===============================

-- Clear all data and reset IDs
TRUNCATE blog_images, blog_posts, podcasts, course_modules, courses RESTART IDENTITY CASCADE;

-- Insert courses
INSERT INTO courses (title, description, img, total_duration) VALUES
('Make Your Own Kokedama', 'Learn the art of creating beautiful kokedama plant arrangements from scratch.', '/images/courses/kokedama.png', INTERVAL '3 hours'),
('Take Care of Your Crass Plants', 'Essential care tips and tricks to keep your crass plants healthy and thriving.','/images/courses/crassPlants.png', INTERVAL '2 hours 30 minutes');

-- Insert podcasts
INSERT INTO podcasts (episode_num, title, description, release_date, duration) VALUES
(1, 'Get to Know PlantiPod', 'Introduction to PlantiPod and what we offer.', '2025-06-01', INTERVAL '00:15:00'),
(2, 'Why Are Plants So Important?', 'Exploring the benefits of plants for our health and environment.', '2025-06-08', INTERVAL '00:20:00'),
(3, 'Plants for Stress Relief', 'How plants can help reduce stress and improve well-being.', '2025-06-15', INTERVAL '00:18:00'),
(4, 'How to Make Your Plants Survive', 'Survival tips for your beloved plants.', '2025-06-22', INTERVAL '00:22:00'),
(5, 'Seasonal Plant Care', 'Adjusting plant care routines throughout the seasons.', '2025-06-29', INTERVAL '00:19:00');

-- Insert blog posts
INSERT INTO blog_posts (title, content) VALUES
('Indoor Plants: A Beginner''s Guide', 'Bringing a bit of green into your home doesn’t just make your space look beautiful—it also helps create a calm, inviting environment. But if you’re just getting started with indoor plants, it’s easy to feel overwhelmed by the variety of choices and care requirements. Don’t worry—this beginner''s guide will walk you through the essentials to help you grow with confidence. Start with Easy-to-Care-For Plants If you’re new to plant care, begin with species known for their resilience. Snake plants, pothos, ZZ plants, and peace lilies are all great options. They adapt well to indoor conditions and are forgiving if you occasionally forget to water them. Light Matters Different plants need different light levels. Before choosing a plant, observe the light in your home. Is it bright and direct? Soft and filtered? Many popular houseplants thrive in indirect sunlight, so placing them near a window with sheer curtains usually does the trick. If your home doesn’t get much natural light, consider low-light plants like the ZZ plant or cast iron plant. Water Wisely Overwatering is the number one cause of houseplant problems. A good rule of thumb: only water when the top inch of soil feels dry. Make sure your pots have drainage holes to avoid root rot. Remember, it’s better to underwater than overdo it. Indoor plants bring life to any space—and learning how to care for them is a rewarding, grounding experience. Start simple, stay curious, and let your plant journey grow naturally.'),
('Soil Guide for Healthy Plants', 'Healthy plants start from the ground up—literally. Good soil is the foundation of plant health, and understanding what makes it “good” can help your plants thrive indoors or outdoors. What Is Healthy Soil? Healthy soil is loose, drains well, and is rich in organic matter. It supports root growth while holding enough moisture and nutrients for the plant. Poor soil, on the other hand, compacts easily, drains poorly, and lacks nutrients. Key Elements of Good Soil - Drainage: Avoid waterlogged soil. Use pots with drainage holes and mix in perlite or sand if needed. - Nutrients: A balanced potting mix usually has the essential nutrients, but you can boost it with compost or slow-release fertilizers. - pH Level: Most houseplants prefer a slightly acidic to neutral pH (6.0–7.0). Some plants have specific needs, so check before planting. - Texture: A mix of peat moss, compost, perlite, and coco coir often works well for potted plants. Choosing the Right Soil Mix Different plants prefer different types of soil: - Cacti and succulents: Fast-draining mix with lots of sand or perlite. - Tropical houseplants: Rich, moisture-retentive mix with peat or compost. - Orchids: Special chunky orchid bark mix. Your plants depend on their soil to get water, air, and nutrients. By understanding the basics, you’ll give your green friends the best possible home—underground and above.'),
('Watering Your Plants the Right Way', 'Watering your plants properly is one of the most important steps to keeping them healthy and thriving. Overwatering is a common mistake that can lead to root rot and fungal diseases, while underwatering can cause your plants to wilt, dry out, and eventually die. To get it right, start by checking the moisture level of the soil before watering. Insert your finger about an inch deep—if the soil feels dry, it''s time to water; if it''s still moist, wait a few days and check again. Water slowly and evenly to allow the roots to absorb moisture without flooding the soil. Always make sure your pots have drainage holes to prevent water from pooling at the bottom, which can suffocate roots. Different plants have different water needs: succulents and cacti require less frequent watering, while tropical plants often need more regular moisture. Seasonal changes also affect watering schedules—plants typically need less water during cooler months and more during active growing seasons. Learning to read your plants'' signals, such as drooping leaves or yellowing, will help you adjust watering to their needs and become a confident plant parent.');

-- Insert blog images (2 images per post: real + placeholder)
INSERT INTO blog_images (blog_id, url, position, alt_text) VALUES
(1, '/images/blog/indoor-plants.png', 1, 'Indoor plants in a cozy living room'),
(1, 'https://placehold.co/600x400', 2, 'Placeholder image for indoor plants'),
(1, 'https://placehold.co/600x400', 3, 'Placeholder image for indoor plants'),

(2, '/images/blog/soil-guide.png', 1, 'Different types of soil in pots'),
(2, 'https://placehold.co/600x400', 2, 'Placeholder image for soil guide'),

(3, '/images/blog/watering-plants.png', 1, 'Watering a green houseplant'),
(3, 'https://placehold.co/600x400', 2, 'Placeholder image for watering plants');
