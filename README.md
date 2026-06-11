# AI Car Recommendation App

## Overview

AI Car Recommendation App is a full-stack web application that helps users discover suitable cars based on their preferences such as budget, fuel type, transmission, and seating capacity.

The application analyzes user inputs and recommends the most relevant vehicles from a predefined dataset while providing an intelligent recommendation summary.

---

## Features

* Car recommendation based on:

  * Budget
  * Fuel Type
  * Transmission
  * Seating Capacity

* Intelligent scoring system

* Top Match recommendation section

* AI-generated recommendation summary

* Multiple recommendations ranked by score

* Responsive and modern user interface

---

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js

### Other Tools

* Git
* GitHub

---

## Project Structure

```text
car-recommendation-app
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── routes
│   ├── data
│   ├── services
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd car-recommendation-app
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## How It Works

1. User selects:

   * Budget
   * Fuel Type
   * Transmission
   * Seating Capacity

2. Frontend sends request to backend.

3. Backend calculates recommendation scores.

4. Top matching vehicles are returned.

5. Results are displayed with:

   * Match Score
   * Recommendation Reason
   * AI Recommendation Summary

---

## Sample Filters

* Budget: ₹15 Lakh
* Fuel Type: Petrol
* Transmission: Automatic
* Seating: 5 Seats

---

## Future Improvements

* Real-time vehicle database
* Advanced AI recommendation engine
* Vehicle comparison feature
* Car images and specifications
* User accounts and saved searches

---

## Author

Alvin Samuel A
