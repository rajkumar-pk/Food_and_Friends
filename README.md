# 🍽️ Food & Friends — Full-Stack Restaurant Web Application

A modern, full-stack restaurant web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It features a responsive UI, dish menus, team presentations, and a fully functional dynamic **Table Reservation System** backed by database persistence.

---

## 🚀 Features

- **Interactive UI/UX:** Built with React, Vite, and modern styling for a seamless user experience.
- **Table Reservation System:** Allows customers to book tables online with form validation.
- **Backend API Integration:** Node.js & Express server handling reservation logic and validation.
- **Database Storage:** Secure data storage using MongoDB and Mongoose.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

### **Frontend:**
- React.js (with Vite)
- React Router
- CSS / Modern Styling Components

### **Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose

---

## 📂 Project Structure

```text
Food_and_Friends/
│
├── backend/            # Express server, routes, controllers, and models
│   ├── config/         # Configuration files (e.g., config.env)
│   ├── controller/     # Business logic handlers
│   ├── database/       # MongoDB connection setup
│   ├── models/         # Mongoose schemas (Reservation)
│   ├── routes/         # API endpoint routes
│   └── server.js       # Entry point for the backend server
│
├── frontend/           # React single-page application
│   ├── public/         # Static assets and images
│   ├── src/            # React components, pages, and entry points
│   └── vite.config.js  # Vite bundler configuration
│
└── README.md
