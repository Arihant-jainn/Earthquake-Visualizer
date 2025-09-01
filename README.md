# 🌍 Earthquake Visualizer

An **interactive web application** built with **React**, **TypeScript**, **Tailwind CSS**, and **Leaflet.js** that visualizes **real-time global earthquake data** using an **open public API**.  
The app provides an **intuitive map interface**, **magnitude-based color indicators**, **statistics visualization**, and **user-friendly filtering options**.

---

## 🚀 Live Demo  
🔗 **[View Live Website]([https://your-live-link-here.com](https://earthquake-visualizer-aj.vercel.app/))**  

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
earthquake-visualizer/
├── node_modules/                     # Installed dependencies
├── src/                              # Application source code
│   ├── components/                   # Reusable components
│   │   ├── EarthquakeMap.tsx         # Interactive Leaflet map
│   │   ├── ErrorDisplay.tsx          # Error handling component
│   │   ├── Header.tsx               # App header and title
│   │   ├── LoadingSpinner.tsx       # Loading spinner for API calls
│   │   ├── MagnitudeFilter.tsx      # Magnitude range filter
│   │   └── StatisticsPanel.tsx      # Earthquake stats & charts
│   ├── hooks/                        # Custom React hooks
│   ├── types/                        # TypeScript type definitions
│   ├── utils/                        # Helper functions
│   ├── App.tsx                       # Main app component
│   ├── index.css                     # Global styles
│   ├── main.tsx                      # Application entry point
│   └── vite-env.d.ts                 # Vite TypeScript types
├── .gitignore                        # Ignored files for Git
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── package-lock.json                # Dependency lock file
├── postcss.config.js               # PostCSS config for Tailwind
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # TS app-level config
├── tsconfig.node.json             # TS Node-level config
└── vite.config.ts                 # Vite configuration


git clone https://github.com/your-username/earthquake-visualizer.git
cd earthquake-visualizer
npm install
npm run dev

