# RegTech Banking Website

A modern, secure banking website built with React, TypeScript, and Tailwind CSS, featuring RegTech-inspired design aesthetics.

## Features

- 🔒 **Secure Authentication** - Multi-factor authentication support
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Vite and code splitting
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎨 **Modern UI** - Glass-morphism effects and smooth animations
- 🏦 **Customer Portal** - Secure dashboard for account management

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: React Query + Context API
- **Build Tool**: Vite
- **Form Handling**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   └── ui/            # Reusable UI components
├── context/           # React Context providers
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Pages

- **Home** - Hero section with features and CTAs
- **About Us** - Mission, values, and timeline
- **Products & Services** - Banking products catalog
- **Compliance & Security** - Security features and certifications
- **Contact & Support** - Contact form and branch locations
- **Customer Portal** - Authenticated dashboard

## Design System

### Colors

- **Navy**: Primary brand color
- **Teal**: Accent color for CTAs
- **Silver/Grey**: Neutral tones
- **Gold**: Optional accent

### Typography

- **Headings**: Lato
- **Body**: Open Sans

## License

© 2025 RegTech Bank. All rights reserved.
