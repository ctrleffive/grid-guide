# GridGuide - Architecture

## System Architecture
GridGuide is a React-based Progressive Web Application built with a component-based architecture. The application follows a simple state management approach using React hooks for local state management.

## Source Code Paths
- `src/App.tsx` - Main application component that initializes analytics and wraps the entire app with theme provider
- `src/pages/ChargingCalculator.tsx` - Main page component containing the core calculator logic and UI
- `src/components/Results.tsx` - Component for displaying calculation results
- `src/components/ThemeProvider.tsx` - Theme management component for dark/light mode
- `src/components/RandomBG.tsx` - Background generation component
- `src/components/PWABadge.tsx` - PWA installation badge component
- `src/components/ui/` - Reusable UI components (button, card, input) using shadcn/ui
- `src/constants.ts` - Application constants including analytics IDs

## Key Technical Decisions
- Single-page application architecture focused on the charging calculator functionality
- Client-side state management using React useState hooks
- PWA implementation for offline capability and installability
- Mobile-first responsive design approach
- Dark mode as default theme with localStorage persistence
- Charging efficiency factor (89.45%) included in calculations to account for real-world energy losses

## Design Patterns in Use
- Component-based architecture with clear separation of concerns
- Presentational vs container components pattern
- React hooks for state management and side effects
- PWA patterns for offline functionality and native app-like experience

## Component Relationships
- App.tsx serves as the root component that provides theme context and wraps all other components
- ChargingCalculator.tsx is the main functional component containing the business logic
- Results.tsx is a child component that receives calculated data as props
- UI components from src/components/ui are reused across the application
- ThemeProvider provides theme context to all child components

## Critical Implementation Paths
- Calculation logic: `ChargingCalculator.tsx` -> `handleCalculate()` -> results state update
- Input validation: Input changes -> validation functions -> state updates
- PWA functionality: `vite.config.ts` -> VitePWA plugin -> manifest and service worker generation
- Theme management: `ThemeProvider.tsx` -> localStorage -> CSS variables