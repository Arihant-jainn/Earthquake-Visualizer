# 🌍 Earthquake Visualizer

An **interactive earthquake visualization platform** built with **React + TypeScript + Tailwind CSS**.  
This project fetches **real-time earthquake data** from the **USGS API** and visualizes it on an **interactive world map** using **Leaflet**.  
It also provides **earthquake statistics**, search filters, and a modern **dark/light mode**.

---

## 🚀 Live Demo  
🔗 **[View Live Project](https://your-live-link-here.com)** *(Replace this with your deployed link)*

---

## 📸 Screenshots  

### 🌐 Home Page  
*(Add a screenshot here)*  

### 🗺️ Interactive Map  
*(Add a screenshot here)*  

### 📊 Earthquake Stats  
*(Add a screenshot here)*  

---

## 🛠️ Tech Stack
- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Map Library:** [React-Leaflet](https://react-leaflet.js.org/) + [OpenStreetMap](https://www.openstreetmap.org/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)
- **State Management:** React Hooks (`useState`, `useEffect`)

---

## ✨ Features

### 🌍 Core Features
✅ **Live Earthquake Data** – Fetches real-time earthquake data  
✅ **Interactive Map** – Displays earthquake locations with Leaflet  
✅ **Magnitude-Based Color Coding**  
   - Green → Small  
   - Orange → Moderate  
   - Red → Large  
✅ **Click-to-View Details** – Magnitude, location, time, depth, tsunami alerts  
✅ **Earthquake Statistics Dashboard** – Magnitude distribution chart  

### 🛠️ User-Friendly Enhancements
- 🔍 **Search & Filters** *(to be added later)*  
- 🌗 **Dark & Light Theme** *(ready to integrate)*  
- 📊 **Charts for Data Visualization**  
- 📱 **Fully Responsive** for mobile & tablets  
- 🚀 **Fast & Lightweight** – Uses Vite + React + Tailwind  

---

## 📂 Project Structure

earthquake-visualizer/             # Root directory
│
├── public/                        # Public assets accessible by the browser
│   ├── favicon.ico               # Website favicon
│   ├── index.html                # HTML entry point
│   └── manifest.json             # (Optional) PWA configuration
│
├── src/                           # Source code
│   ├── assets/                   # Images, icons, and static assets
│   │   ├── logo.svg
│   │   └── placeholder.png
│   │
│   ├── components/               # Reusable components
│   │   ├── Header.tsx           # Top navigation bar
│   │   ├── Footer.tsx           # Website footer
│   │   ├── MapView.tsx          # Interactive Leaflet map
│   │   ├── StatsChart.tsx       # Recharts statistics visualization
│   │   ├── EarthquakeCard.tsx   # Earthquake info cards
│   │   ├── Filters.tsx          # (Optional) Search & filter UI
│   │   └── Loader.tsx           # Loading spinner component
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── useEarthquakes.ts    # Fetching & managing earthquake data
│   │
│   ├── pages/                    # Application pages
│   │   └── Home.tsx             # Main home page
│   │
│   ├── styles/                   # Styling files
│   │   └── globals.css          # Global Tailwind styles
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── earthquake.ts        # Earthquake data types
│   │
│   ├── utils/                    # Utility functions
│   │   ├── formatDate.ts        # Formats date & time
│   │   └── magnitudeColor.ts    # Returns color based on magnitude
│   │
│   ├── App.tsx                   # Root application component
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Tailwind base styles
│   └── vite-env.d.ts             # Vite environment types
│
├── .gitignore                    # Git ignored files & folders
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Dependency lock file
├── postcss.config.js           # Tailwind & PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.node.json          # Node-specific TypeScript settings
├── vite.config.ts              # Vite configuration file
└── README.md                   # Project documentation


---

## ⚡ Getting Started

Follow these instructions to set up the project locally.

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/earthquake-visualizer.git
cd earthquake-visualizer
npm install
npm run dev

