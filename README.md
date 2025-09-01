# 🌍 Earthquake Visualizer

An **interactive web application** built with **React**, **TypeScript**, **Tailwind CSS**, and **Leaflet.js** that visualizes **real-time global earthquake data** using an **open public API**.  
The app provides an **intuitive map interface**, **magnitude-based color indicators**, **statistics visualization**, and **user-friendly filtering options**.

---

## 🚀 Live Demo  
🔗 **[View Live Website](https://your-live-link-here.com)**  

---

## 📌 Features

- 🌐 **Real-Time Earthquake Data** → Fetches the latest global earthquake data from the **USGS API**
- 🗺️ **Interactive World Map** → Uses **Leaflet.js** to plot earthquake locations dynamically
- 🎨 **Magnitude-Based Coloring** → Color-coded markers based on earthquake severity
- 📊 **Statistics Visualization** → Displays earthquake magnitude trends using **Recharts**
- 🔍 **Search & Filters** → Filter by **magnitude**, **location**, and **date range**
- 📄 **Detailed Earthquake Info** → Shows depth, magnitude, location, and date
- 📱 **Fully Responsive UI** → Optimized for **desktop**, **tablet**, and **mobile**
- ⚡ **Fast & Lightweight** → Built using **Vite** for better performance

---

## 🛠️ Tech Stack

| **Category**         | **Technology**         |
|----------------------|------------------------|
| **Framework**        | React (with Vite)      |
| **Language**         | TypeScript            |
| **Styling**          | Tailwind CSS          |
| **Maps**             | Leaflet.js            |
| **Charts**           | Recharts             |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Data Source**      | [USGS Earthquake API](https://earthquake.usgs.gov/) *(No authentication required)* |

---

## 📂 Project Structure

```bash
earthquake-visualizer/            # 🌍 Root directory
│
├── public/                       # Public static assets
│   ├── favicon.ico              # Website favicon
│   ├── robots.txt               # Search engine config (optional)
│   ├── manifest.json            # PWA configuration (optional)
│   └── index.html               # Main HTML entry point
│
├── src/                          # Application source code
│   ├── assets/                  # Images, icons & static files
│   │   ├── logo.svg
│   │   └── placeholder.png
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Header.tsx           # Top navigation bar
│   │   ├── Footer.tsx           # Website footer
│   │   ├── MapView.tsx          # Interactive Leaflet map
│   │   ├── StatsChart.tsx       # Recharts-based statistics visualization
│   │   ├── EarthquakeCard.tsx   # Earthquake info cards
│   │   ├── Filters.tsx          # Earthquake search & filter options
│   │   └── Loader.tsx           # Loading spinner component
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useEarthquakes.ts    # Fetch & manage earthquake data
│   │
│   ├── pages/                   # Application pages
│   │   └── Home.tsx             # Homepage UI
│   │
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Tailwind CSS base styles
│   │
│   ├── types/                   # TypeScript interfaces & types
│   │   └── earthquake.ts        # Earthquake data types
│   │
│   ├── utils/                   # Utility functions
│   │   ├── formatDate.ts        # Formats date & time
│   │   └── magnitudeColor.ts    # Returns marker color based on magnitude
│   │
│   ├── App.tsx                  # Root application component
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Tailwind base styles
│   └── vite-env.d.ts            # Vite environment types
│
├── .gitignore                   # Git ignored files
├── package.json                # Dependencies & scripts
├── package-lock.json           # Dependency lock file
├── postcss.config.js          # Tailwind/PostCSS configuration
├── tailwind.config.js         # Tailwind setup file
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
