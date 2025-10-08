# 🌿 PlantiPod

PlantiPod is a full-stack web application built as a portfolio project for a fictional plant care content creator.
It centralizes content — blog posts, online courses, and podcasts — and will later expand to include a community section via Discord.
This project demonstrates full CRUD operations, RESTful API design, and modern web development practices with a professional project structure and upcoming deployment on Render.

---

## 🚀 Live Demo

🌐 App:   (coming soon – deploying to Render)
💻 Code:  [https://github.com/Chiara-Fvw/plantipod]

---

## ✨ Project Overview

PlantiPod is designed to:
- Provide a unified space for sharing plant-based content: blog posts, courses, and podcasts.
- Foster a plant-loving community with Discord integration (planned).
- Show integrations with external APIs — real (Spotify) and mocked (Hotmart).
- Demonstrate frontend/backend separation in a portfolio-ready full-stack project.
- Introduce a CMS for blog post creation and management (currently under development).

---

## 🧩 Features
📝 Blog – Full CRUD for plant care articles (stored in PostgreSQL).
🎓 Courses – Mocked courses simulating Hotmart-style content.
🎧 Podcast – Displays a list of episodes fetched dynamically from Spotify’s API, showing episode number, title, and metadata.
💬 Community – Coming soon: Discord server integration for plant lovers.

---

## 🔧 Tech Stack

### Backend
- **Node.js**, **Express.js**
- **PostgreSQL** with **Sequelize**
- **REST API** with full CRUD operations
- **Environment variables**, **middleware**, and modular structure

### Frontend
- **React.js**
- **Axios** for HTTP requests
- **React Router** for client-side routing
- **Tailwind CSS** (or CSS Modules)

### External / Mocked Integrations

- Spotify API real integration for fetching podcast episodes
- Hotmart API (mocked) for courses
- Discord (*planned* real server integration)

---

## 📁 Project Structure

```
plantipod/
├── backend/          
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/         
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── admin/            # (Planned) CMS panel for blog posts
│
│
├── public/          
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🛠️ Local Setup (Optional)

> Developers and recruiters can run the app locally to explore the project structure and behavior.

### Prerequisites

- Node.js ≥ 18  
- PostgreSQL  
- npm or yarn  

### 1. Clone the Repo

```bash
git clone https://github.com/Chiara-Fvw/plantipod.git
cd plantipod
```

### 2. Backend & Database Setup

#### 2.1 Create Environment Variables
Inside /backend, create a `.env` file based on `.env.example`:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=plantipod
PORT=3001
```

#### 2.2 Run Setup Commands
```bash
npm run pgstart   # Start PostgreSQL service (macOS/Linux)
npm run db:init   # Create tables
npm run db:seed   # Insert sample data
npm run dev       # Start backend server
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend: http://localhost:5173
Backend API: http://localhost:3001

---

## 🌱 Future Plans

- Real Hotmart API integration
- CMS panel for content creators (blog & courses)
- User authentication and roles
- Mobile responsiveness improvements
- Discord bot integration
- Analytics dashboard for courses

📝 Note: Blog post content is stored as raw HTML. This allows future integration with a WYSIWYG editor for CMS functionality. It’s rendered safely via dangerouslySetInnerHTML with trusted input.

---

## 📄 License

MIT License — open source, free to use and learn from.

---

## 👩‍💻 Author

Developed with 🌿 by **Chiara Fiorentini**  
🔗 [chiarafiorentini.com](https://chiarafiorentini.com)