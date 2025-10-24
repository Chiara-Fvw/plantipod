# 🌿 PlantiPod

PlantiPod is a full-stack web application built as a portfolio project for a fictional plant care content creator.
It centralizes content — blog posts, online courses, and podcasts — and will later expand to include a community section via Discord.
This project demonstrates full CRUD operations, RESTful API design, and modern web development practices with a professional project structure, deployed on Render with Supabase PostgreSQL database.

---

## 🚀 Live Demo

🌐 **Live App:** [https://plantipod.onrender.com](https://plantipod.onrender.com)
🔌 **API Backend:** [https://plantipod-backend.onrender.com/api](https://plantipod-backend.onrender.com/api)
💻 **Code:** [https://github.com/Chiara-Fvw/plantipod](https://github.com/Chiara-Fvw/plantipod)

> **Note:** The app is hosted on Render's free tier. If inactive for 15 minutes, the service spins down and may take 30-60 seconds to wake up on the first request.

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
- **PostgreSQL** (hosted on **Supabase**)
- **REST API** with full CRUD operations
- **Environment variables**, **middleware**, and modular structure
- **Deployed on Render**

### Frontend
- **React.js** with **Vite**
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Deployed on Render**

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
│   ├── db/
│   ├── public/
│   ├── utils/
│   ├── .env                # (local only, ignored by git)
│   ├── .env.example
│   ├── app.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env                # (local only, ignored by git)
│   ├── .gitignore
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── LICENSE
└── README.md

```

---

## 🛠️ Local Setup (Optional)

> Developers and recruiters can run the app locally to explore the project structure and behavior.

### Prerequisites

- Node.js ≥ 18  
- PostgreSQL  
- npm or yarn  

### 1. Clone the Repository

```bash
git clone https://github.com/Chiara-Fvw/plantipod.git
cd plantipod
```

### 2. Backend & Database Setup

#### 2.1 Install Dependencies
```bash
cd backend
npm install
```

#### 2.2 Create Environment Variables
Inside /backend, create a `.env` file based on `.env.example`:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=plantipod
PORT=3001
```

#### 2.3 Initialize Database
Run the following commands to start PostgreSQL (macOS/Linux), create tables and seed the database:
```bash
npm run pgstart   # Start PostgreSQL service
npm run db:init   # Create tables
npm run db:seed   # Insert sample data
```
#### 2.4 Start the Backend server

```bash
npm run dev       # Start backend server
```

### 3. Frontend Setup
Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

Your app will now be running locally:

Frontend: http://localhost:5173
Backend API: http://localhost:3001

✅ Notes
- Make sure PostgreSQL is installed and running locally.
- Environment variables are not committed; use .env.example as a reference.
- The CMS for managing blog posts is currently in development.

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