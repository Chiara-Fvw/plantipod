# 🌿 PlantiPod

**PlantiPod** is a full-stack web application built as a portfolio project for a fictional plant care content creator. The app centralizes content creation — including blogs, online courses, and podcasts — while also fostering a sense of community through Discord integration.

This project demonstrates full CRUD operations, RESTful API design, and modern web development practices using a professional project structure and real deployment.

---

## 🚀 Live Demo

🌐 App: [https://plantipod.vercel.app](https://plantipod.vercel.app)  
💻 Code: [https://github.com/your-username/plantipod](https://github.com/your-username/plantipod)

---

## ✨ Project Overview

PlantiPod is designed to:
- Provide a unified space for plant-based content creators to share blog posts, offer courses, and host podcasts.
- Foster a plant-loving community using a Discord server.
- Allow integration with external APIs (e.g., Spotify, Hotmart) — currently mocked.
- Demonstrate full-stack development skills with clear frontend/backend separation.

---

## 🧩 Features

- **📝 Blog**: Full CRUD for plant care articles.
- **🎓 Courses**: Three mocked courses simulating Hotmart-style content.
- **🎧 Podcast**: Spotify-like layout with placeholder episodes.
- **💬 Community**: Discord server integration for plant lovers to chat and share tips.

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
- **Discord** (real server)
- **Spotify API (mocked)** for podcast episodes
- **Hotmart API (mocked)** for courses

---

## 📁 Project Structure

```
plantipod/
├── backend/          # Node.js + Express + PostgreSQL API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/         # React app (main user interface)
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── admin/            # (Optional) CMS panel – under consideration
│
├── doc/              # Documentation
│   ├── journal.md
│   └── roadmap.md
│
├── public/           # Shared static assets
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
git clone https://github.com/your-username/plantipod.git
cd plantipod
```

### 2. Backend Setup

```bash
cd backend
npm install
# Create a `.env` file with DB credentials (see .env.example)
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)  
- Backend API: [http://localhost:3001](http://localhost:3001)

---

## 🌱 Future Plans

- Real API integration with Spotify and Hotmart
- CMS panel for content creators
- User authentication and roles
- Mobile responsiveness
- Community bot for Discord
- Course analytics dashboard

---

## 📚 Documentation

- [🛤 Project Roadmap](./doc/roadmap.md)
- [📔 Developer Journal](./doc/journal.md)

---

## 📄 License

MIT License — open source, free to use and learn from.

---

## 👩‍💻 Author

Developed with 🌿 by **Chiara Fiorentini**  
🔗 [chiarafiorentini.com](https://chiarafiorentini.com)