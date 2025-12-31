# SkillSwap – A Local Skill Exchange Platform

SkillSwap is an interactive platform for individuals to offer, learn, and trade skills within their local area. Whether it’s guitar lessons, language exchange, coding help, or yoga training, users can browse listings, rate experiences, and connect with local skill providers.

---

## 🌐 Live Website
[View Live Site](https://skill-swap-firebase.web.app)

---

## 🛠️ Technologies Used
- **Frontend:** React, React Router, Tailwind CSS / DaisyUI, Swiper.js, react-hot-toast  
- **Backend / Database:** Firebase Authentication & Firestore  
- **Deployment:**  Firebase Hosting  

---

## 🔑 Key Features
- **Authentication System**
  - Email & Password login
  - Google Sign-In
  - Protected routes for logged-in users
- **Skill Listings**
  - Browse local skills with details: name, rating, price, provider info, available slots
  - View “Skill Details” page with full information
- **Booking System**
  - Book a session via form with name & email
  - Success toast notification on submission
- **User Profile**
  - View & update profile (Name, Photo)
  - Persistent login with Firebase
- **Homepage Features**
  - Hero slider for featured skills
  - Popular skills section with cards
  - “Top Rated Providers” section
  - “How It Works” section
  - Extra section relevant to SkillSwap
- **UI Enhancements**
  - Responsive design for mobile, tablet, and desktop
  - Subtle animations using Swiper.js, and react-hot-toast
  - Password visibility toggle in login/signup forms

---

## 📌 Project Structure
- **/src/components** – Reusable UI components  
- **/src/pages** – Route-based pages: Home, Skill Details, My Profile, Login, Signup  
- **/src/context** – Authentication & global state management  
- **/src/firebase.js** – Firebase configuration (using environment variables)  

---
