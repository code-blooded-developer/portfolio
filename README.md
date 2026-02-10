# Portfolio

A modern, responsive portfolio website showcasing projects, skills, and experience. Built with Next.js 15, TypeScript, and Tailwind CSS for a fast, accessible, and beautiful online presence.

## 🚀 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop screens
- **Modern UI Components** - Built with Radix UI and Tailwind CSS
- **Fast Performance** - Leveraging Next.js 15 with Turbopack for lightning-fast builds
- **Type Safe** - Fully typed with TypeScript
- **Dark Mode Ready** - Easy to extend with theme support
- **Accessibility** - Built with semantic HTML and ARIA labels
- **SEO Optimized** - Meta tags and structured data ready

## 📋 Sections

- **Hero** - Eye-catching introduction section
- **About** - Brief overview of background and expertise
- **Projects** - Showcase of featured projects and work samples
- **Skills** - Display of technical skills and technologies
- **Experience** - Professional background and timeline
- **Contact** - Get in touch form and contact information
- **Navigation** - Sticky navbar for easy navigation

## 🛠️ Tech Stack

- **Framework** - [Next.js 15](https://nextjs.org) with App Router
- **Language** - [TypeScript](https://www.typescriptlang.org)
- **Styling** - [Tailwind CSS](https://tailwindcss.com)
- **UI Components** - [Radix UI](https://www.radix-ui.com)
- **Icons** - [Lucide React](https://lucide.dev)

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout wrapper
│   └── globals.css       # Global styles
├── components/
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ... (other components)
│   └── Navbar.tsx       # Navigation component
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/
    ├── data.ts         # Content and data
    └── utils.ts        # Utility functions
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check with TypeScript
