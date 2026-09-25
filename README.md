# Fire Watch India

Build a polished, presentation-ready web demo for our Smart India Hackathon 2026 software solution.

Problem Statement 26162: "AI-Based Detection and Classification of Industrial Fires and Persistent Thermal Sources Using NASA FIRMS, OSM & Satellite Data". Theme: Disaster Management. Team: Team Solvix.

Use this workflow faithfully:
1. Thermal Hotspot Detection — simulated FIRMS/VIIRS detections with latitude, longitude, brightness temperature, FRP and timestamp.
2. AI-Based Source Classification — classify Industrial, Natural, or Other using simulated XGBoost prediction and contextual features.
3. Risk Intelligence Engine — transparent demo risk score from intensity, persistence, proximity to industrial assets, criticality and model confidence.
4. Prioritized Alerts — prioritize high-risk events.
5. GIS Decision Support — interactive map, filters, event details and reports.

The PPT's technical approach is FIRMS API -> Python/GeoPandas -> PostgreSQL/PostGIS -> XGBoost -> Risk Engine -> React + Leaflet + API. For this demo use realistic mock data in the frontend and explicitly label it as Demo/Simulated Data; do not claim live NASA/API or production AI results.

Build these views:
- Dashboard: KPI cards (Active Hotspots, High Risk, Industrial, Natural), prominent interactive India/Maharashtra map with simulated markers, risk legend, recent prioritized alerts, selected event side panel.
- Live Monitoring / Map: full-screen Leaflet map centered on India with multiple simulated markers; marker colors by risk; filters for risk, classification, active/persistent; click marker for event details.
- Event Analysis: thermal features (Brightness Temp, FRP, persistence/duration), spatial features (industrial proximity, land-cover context), model classification probabilities, confidence, risk score breakdown, and "Why prioritized".
- Alerts: prioritized events with severity, classification, confidence, location, persistence, status; allow opening details and marking demo status as Acknowledged.
- Reports: polished event summary/analytics with a client-side Download Report button using browser print/download; no backend required.
- Architecture / About: pipeline and data sources: NASA FIRMS, OSM, ESA WorldCover, satellite imagery; include a concise demo limitations note.

Interactions:
- "Run Risk Analysis" on event details: animate/reveal calculation and deterministically update/display the risk score.
- "Simulate New Hotspot": add a new realistic simulated event around an industrial area in India and automatically classify/score it.
- Search, filters and navigation must work.
- Time range: Last 24h / 7d / 30d changes mock summary values.
- "Demo Mode" badge.
- "Demo Scenario" button that selects a high-risk industrial event and shows Detection -> Classification -> Risk -> Alert -> GIS Decision Support in a visible stepper.
- Clearly state that all incidents are simulated and not live/current.

Visual design:
- Serious disaster-management command center, not generic admin.
- Dark navy/slate base with restrained red/orange/yellow/green risk accents.
- High contrast, premium cards, subtle glass/gradient effects, responsive desktop-first.
- Prominent India map; use Leaflet/OpenStreetMap tiles if available, otherwise provide a polished fallback.
- Small SIH 2026 / Team Solvix branding.
- Purposeful, restrained animation.
- No login.

Do not build payment/auth/unrelated features. Make it complete and polished enough for a live SIH judge demo.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://firewatch-ai-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2e132f0a-f758-417e-b361-00d7bcab425c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
