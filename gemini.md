# HireBoost - AI-Powered Career Assistant

## Project Overview
**HireBoost** is a modern, AI-powered career platform designed to help job seekers optimize their hiring process. The platform provides tools for CV analysis, job matching, document generation (CV/Cover Letter), and interview preparation.

### Tech Stack
- **Framework:** React 18 (Vite-powered)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI (Radix UI primitives)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (v6)
- **State Management:** TanStack Query (React Query)
- **Forms & Validation:** React Hook Form + Zod
- **Charts:** Recharts
- **Testing:** Vitest + React Testing Library

## Architecture Map
- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Root component with routing and global providers (QueryClient, Toaster, Tooltip).
- `src/pages/`: High-level route components.
    - `Index.tsx`: Landing page.
    - `DashboardLayout.tsx`: Shared layout for all dashboard-related features.
    - `CVAnalyzer.tsx`, `JobMatcher.tsx`, `Generator.tsx`, `InterviewSimulator.tsx`: Feature-specific dashboard pages.
- `src/components/`:
    - `ui/`: Low-level, reusable UI components (Shadcn UI).
    - `landing/`: Landing page specific sections.
    - `dashboard/`: Dashboard-specific UI elements (Sidebar, etc.).
- `src/hooks/`: Custom React hooks for shared logic.
- `src/lib/`: Utility functions and shared configuration.
- `src/test/`: Testing setup and configuration.

## Coding Standards
- **Component Pattern:** Functional components with React Hooks.
- **Styling:** Utility-first CSS using Tailwind. Avoid custom CSS files unless necessary (prefer `tailwind.config.ts`).
- **UI Components:** Use Shadcn UI primitives located in `src/components/ui/`.
- **Premium Design System:**
    - **Palette:** "Obsidian Dark Mode" (`hsl(240 10% 4%)`) with "Champagne Gold" accents (`hsl(43 96% 64%)`).
    - **Effects:** Heavy use of `premium-glass` utilities, sub-pixel borders, and subtle gold glows.
    - **Typography:** `Geist` for headings (sophisticated tracking), `Inter` for body text.
    - **Motion:** Micro-interactions (hover transforms, shimmer effects) should be subtle but consistent across all buttons and cards.
- **Type Safety:** Strict TypeScript usage for all components, hooks, and utilities.
- **Validation:** Use Zod schemas for form validation and API data structures.
- **Routing:** Declarative routing using `react-router-dom` in `App.tsx`.
- **Data Fetching:** Use TanStack Query for all asynchronous operations and server state.

## Active Context
- **Landing Page:** Fully implemented with Hero, Features, How It Works, Testimonials, and Pricing sections.
- **Dashboard:** Core layout implemented with a sidebar navigation.
- **Core Features:** Implementation in progress for CV Analyzer, Job Matcher, Application Generator, and Interview Simulator.
- **Testing:** Vitest environment configured with sample tests.

## Maintenance Rule
For every major modification to the project architecture or logic, you must automatically propose an update to this `gemini.md` file to keep the context synchronized.
