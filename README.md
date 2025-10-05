# 🟢 ZerodhaClone

![Banner](/Assets/banner.png)

## 🎥 Project Demo

https://github.com/user-attachments/assets/14b94020-4c3d-47bb-856d-0840d152f3d8



## 📖 Overview  
A full-stack **Zerodha-like stock trading dashboard** built using **MEN + React**.  

This project provides live stock prices, watchlist management, interactive charts, and secure user authentication.  

🔗 **Live Demo:** [ZerodhaClone on Render](https://zerodhaclone-3zmc.onrender.com)

## 🔹 Features

- **User Authentication:** Signup and login functionality using **JWT tokens**  
- **Dashboard:** Displays stock prices and portfolio overview  
- **Interactive Charts:**  
  - **Pie chart:** Shows current prices of stocks in your watchlist  
  - **Bar chart:** Displays stock prices in bar format for comparison  
- **Watchlist Management:** Select/unselect stocks in pie chart  
- **Responsive UI:** Works seamlessly on desktop and mobile  
- **User Authentication:** Signup and login functionality using **JWT tokens**

## 🖼️ Screenshots  

### 🏠 Home Page
![Create Listing](/Assets/home.png)


### 💼 Watchlist And Holdings 
![Home Page](/Assets/watchlist.png)


### 📊 Graph 
![Map](/Assets/graph.png)


## 🔹 Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Charts:** Chart.js  
- **Authentication:** JWT (JSON Web Tokens) 

## 🧩 Project Structure  

```bash
Zerodha/
├── backend/
│   ├── controllers/       # Business logic
│   ├── models/            # Database models (Mongoose)
│   ├── schemas/           # Validation or database schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Auth & other middleware
│   ├── dashboard_build/   # Compiled dashboard for production
│   ├── index.js           # Main backend entry point
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Pages (Login, Signup, etc.)
│   │   ├── App.js         # Main frontend entry point
│   │   └── index.js       # ReactDOM render
│   └── package.json       # Frontend dependencies
└── README.md
```
## ⚡ Deployment  

Deployed with [Render](https://render.com) 🚀  

1. Render auto-builds the app from GitHub  
2. Runs `npm install` & deploys the app  
3. Assigns a unique `.onrender.com` subdomain  

---

## 📌 How to Run Locally  

```bash
# Clone repo
git clone https://github.com/yourusername/zerodhaclone.git

# Go inside
cd zerodhaclone

# Install dependencies for backend and frontend
cd backend
npm install

cd ../frontend
npm install

# Setup environment variables (.env) in backend
MONGO_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

# Start backend
cd ../backend
node index.js

# Start frontend
cd ../frontend
npm start

👨‍💻 Author
Ronik Bajakke

💼 Aspiring MERN Stack Developer
