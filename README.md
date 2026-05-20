<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://capsule-render.vercel.app/api?type=waving&color=8BA69B&height=200&section=header&text=ZUUUSH&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=A+safe+space+for+your+mind&descAlignY=60&descSize=18&animation=fadeIn">
  <img alt="Zuuush Header" src="https://capsule-render.vercel.app/api?type=waving&color=8BA69B&height=200&section=header&text=ZUUUSH&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=A+safe+space+for+your+mind&descAlignY=60&descSize=18&animation=fadeIn">
</picture>

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo-zuuush.vercel.app-8BA69B?style=for-the-badge&logo=vercel&logoColor=white)](https://zuuush.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-BB4B96?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

<br/>

> *No fancy promises here. Just a space where your thoughts don't have to make perfect sense.*
> *Show up exactly as you are.*

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&size=22&duration=3000&pause=1000&color=8BA69B&center=true&vCenter=true&multiline=false&width=500&lines=Breathe+in.+Breathe+out.;Track+your+emotional+landscape.;Connect+with+safe+community+rooms.;Gentle+challenges+for+a+healthier+mind." alt="Typing SVG" />

</div>

---

## What is Zuuush?

Zuuush is a mental wellness web application designed around one principle: simplicity in the presence of emotional complexity. It is a calm, ambient space where users can log their thoughts, track their mood over time, join supportive community rooms, and work through gentle wellness challenges — all without the noise or pressure of conventional productivity tools.

The design language intentionally blurs into the background. Soft glass surfaces, breathing ambient gradients, and quiet micro-interactions make the interface feel less like software and more like a room you can sit in.

---

## Features

```
mood tracking      daily reflection journal    community support rooms
wellness challenges    streak-based check-ins    guided AI chat space
onboarding flow    privacy settings    ambient animated UI
```

**Mood Check-in** — A 1–10 scale that updates the weekly emotional landscape chart in real time, with personalized responses based on your selection.

**Daily Reflection** — A persistent private journal backed by localStorage. Write freely, save entries, and revisit past thoughts arranged by date and time.

**Community Rooms** — Browse and join themed support spaces like "Morning Intentions", "Late Night Thoughts", and "Anxiety Support". Create your own public or private room in two steps.

**Wellness Challenges** — A curated set of gentle daily practices (gratitude, digital detox, mindful breathing) with progress tracking and visual completion bars.

**Guided Chat** — A calming one-on-one chat interface with a simulated empathetic guide. Designed to feel like a safe conversation, not a chatbot.

**Achievements** — A space to track milestones on your journey (in progress).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS v3 with custom design tokens |
| Animation | Framer Motion |
| Charts | Chart.js (via chart.js/auto) |
| Routing | React Router v6 |
| Icons | Lucide React |
| Fonts | Playfair Display, Poppins, Inter (Google Fonts) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/zuuush.git
cd zuuush

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

---

## Project Structure

```
zuuush/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AmbientBackground.tsx   # Animated gradient blobs
│   │   │   ├── Button.tsx              # Motion-enhanced button
│   │   │   ├── Card.tsx                # Glass / solid card surface
│   │   │   └── Input.tsx               # Styled input with error state
│   │   ├── Home.tsx                    # Landing page
│   │   ├── Onboarding.tsx              # 3-step personalization flow
│   │   ├── Dashboard.tsx               # Mood log + journal + chart
│   │   ├── ChatRoom.tsx                # Guided chat interface
│   │   ├── SearchRoom.tsx              # Browse community rooms
│   │   ├── CreateRoom.tsx              # 2-step room creation
│   │   ├── Challenges.tsx              # Wellness challenge tracker
│   │   ├── Achievements.tsx            # Achievement history
│   │   ├── Profile.tsx                 # Settings and privacy
│   │   ├── Navigation.tsx              # Adaptive sidebar / bottom nav
│   │   ├── AnimatedCursor.tsx          # Custom spring cursor (desktop)
│   │   └── PageTransition.tsx          # Blur + fade route transitions
│   ├── utils/
│   │   └── animations.ts               # Scroll reveal utility
│   ├── App.tsx                         # Route definitions
│   ├── index.tsx                       # React root
│   └── index.css                       # Tailwind base + custom tokens
```

---

## Design System

Zuuush uses a custom Tailwind theme built around a muted sage-green palette with warm terracotta accents — deliberately chosen to feel organic and non-clinical.

```
primary     Sage green      #8BA69B   navigation, buttons, key UI
accent      Terracotta      #E6A481   mood highlights, progress bars
secondary   Lavender mist               community and connection moments
surface     Translucent white           glass cards and panels
background  Warm off-white              ambient base
```

Key UI patterns used throughout:

- **Glassmorphism cards** — `backdrop-blur`, semi-transparent backgrounds, soft borders
- **Ambient breathing blobs** — three CSS-animated radial gradients layered behind all content
- **Spring physics cursor** — desktop-only animated ring that tracks mouse position with damping
- **Page transitions** — blur + vertical drift on every route change via Framer Motion

---

## Roadmap

- [ ] Authentication and user accounts
- [ ] Backend persistence (replace localStorage)
- [ ] Real-time community rooms (WebSocket)
- [ ] AI-powered chat integration
- [ ] Native mobile app (React Native)
- [ ] Achievements system completion
- [ ] Push notification support

---

## Contributing

Contributions are welcome. If you have ideas for improving the experience or expanding the feature set, feel free to open an issue or pull request.

```bash
# Create a feature branch
git checkout -b feature/your-idea

# Make your changes, then open a pull request
```

Please keep the design philosophy in mind: calm, intentional, and never overwhelming.

---

## License

MIT License. See `LICENSE` for details.

---

<div align="center">

<picture>
  <img alt="Zuuush Footer" src="https://capsule-render.vercel.app/api?type=waving&color=8BA69B&height=120&section=footer&animation=fadeIn">
</picture>

*Built with care, for anyone who needs a quiet corner.*

[![Visit Zuuush](https://img.shields.io/badge/Visit-zuuush.vercel.app-8BA69B?style=flat-square&logo=vercel)](https://zuuush.vercel.app)

</div>
