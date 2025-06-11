# AI-Led-Support-Ticketing-System


A smart, full-stack customer support ticketing system powered by AI. This platform helps companies manage customer queries more efficiently by automating ticket categorization and prioritization using NLP models (such as OpenAI GPT). Built with **React.js**, **Node.js**, **Express**, and **MongoDB**, this project demonstrates strong backend and frontend integration, advanced API usage, and a modern UI framework.

---

## ✨ Key Features

### 📝 Ticket Submission Interface
- Clean and responsive form for customers to submit issues.
- Input fields: Name, Email, Category, Priority, Description.
- Optional file attachment support for bug reports/screenshots.

### 🧠 AI-Powered Categorization (Optional with GPT)
- Uses OpenAI API to analyze ticket text and predict category/urgency.
- Ensures consistent triage process across teams.

### 📂 Admin Dashboard
- View all submitted tickets.
- Filter tickets by category, status, or priority.
- Update ticket status: Open → In Progress → Resolved.
- Delete irrelevant or spam tickets.

### 🔁 Real-Time Updates
- Uses React state hooks to reflect changes without page reloads.
- Dynamic card/list views based on ticket attributes.

### 📊 Ticket Lifecycle
- Every ticket has lifecycle metadata: status, createdAt, updatedAt.
- Designed for auditability and history tracking.

### 🔐 (Planned) Authentication
- Separate views for admin and users.
- Role-based access control and secure login.

---

## 🛠️ Tech Stack Overview

| Layer      | Technologies                           |
|------------|----------------------------------------|
| Frontend   | React.js, Axios, Tailwind CSS          |
| Backend    | Node.js, Express, Mongoose             |
| Database   | MongoDB (local or Atlas)               |
| AI/NLP     | OpenAI API (for ticket classification) |
| Testing    | Jest, Supertest (for backend)          |

---

## 👨‍💻 Developer Contributions (What I Did)

As the project author and developer, I:

- 🧱 Designed the MongoDB data models for Tickets.
- 🚀 Built REST APIs in Express to handle CRUD operations for tickets.
- 📡 Connected backend to frontend using Axios.
- 🧠 Integrated OpenAI's API for NLP-based ticket classification.
- 🖥️ Developed a responsive admin dashboard in React.
- 🎨 Styled the application using Tailwind CSS with dark/light mode.
- 🔄 Enabled live UI updates using `useEffect` and `useState`.
- 🧪 Wrote backend unit tests for route validation.
- 📤 Prepared for deployment on Render/Vercel with MongoDB Atlas.

---

## 🗃️ Project Structure

```
ai-led-ticketing-system/
├── backend/
│   ├── models/
│   │   └── Ticket.js
│   ├── routes/
│   │   └── ticketRoutes.js
│   ├── controllers/
│   │   └── ticketController.js
│   ├── services/
│   │   └── aiService.js (optional)
│   ├── tests/
│   │   └── ticket.test.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TicketForm.js
│   │   │   ├── TicketList.js
│   │   │   └── TicketCard.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   └── Home.js
│   │   ├── App.js
│   │   └── index.js
├── .env.example
├── README.md
```

---

## 🚀 Setup Instructions

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### ⚙️ Backend Setup

```bash
cd backend
npm install
touch .env
```

Add to `.env`:
```
MONGO_URI=mongodb://localhost:27017/support_tickets
OPENAI_API_KEY=your_openai_api_key_here
```

Start the server:
```bash
npm start
```

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```


---

```markdown
![Submit Ticket Form](screenshots/form.png)
![Admin Dashboard](screenshots/dashboard.png)
```

---

## 🔍 API Endpoints Overview

### `POST /api/tickets`
Creates a new ticket.

### `GET /api/tickets`
Fetches all tickets.

### `PUT /api/tickets/:id`
Updates a ticket status.

### `DELETE /api/tickets/:id`
Deletes a ticket.

---

## 🔮 Future Improvements

- 🧑‍💼 Authentication for users and admins (JWT + bcrypt)
- 📊 Analytics dashboard (tickets/day, response time)
- 🔔 Real-time notifications (WebSocket or email)
- 📤 Export tickets as CSV or PDF
- 🗂️ Tagging system for multi-department support

---

## 🤝 Contribution Guide

Want to contribute?
1. Fork this repo
2. Create a new branch
3. Add your changes
4. Submit a PR and describe your update
