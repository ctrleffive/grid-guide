# GridGuide - EV Charging Calculator

## Project Overview

GridGuide is a Progressive Web Application (PWA) designed to provide Electric Vehicle (EV) owners with a rapid, accurate, and estimated cost for charging their vehicle based on user-defined parameters. By simplifying the calculation of energy required versus station pricing, the app helps drivers budget for travel and optimize their charging habits. The core value proposition is delivering precise cost and range estimates with minimal input friction.

## Goals & Objectives

The primary objectives for this project are:

- **P1: Accurate Cost Estimation** - Implement the core calculation logic to accurately determine the energy required (kWh) and the associated charging station cost.
- **P2: Seamless User Experience (UX)** - Deliver a clean, modern, mobile-first interface using sliders and clear input fields for quick data entry.
- **P3: PWA Compatibility** - Build the application using React to ensure high performance, offline capability, and easy installation across all mobile and desktop platforms.

## Key Features

- Input Parameters: Current Battery %, Target Battery %, Total Battery Capacity (kWh), Station Cost per kWh.
- Core Calculation Engine: Energy Needed (kWh) = (Target % - Current %) × Total Capacity, then multiplied by Station Cost for Estimated Cost
- Interactive User Interface: Sliders for quick adjustments to percentage inputs, complemented by number inputs for fine-tuned precision
- Responsive Design: Mobile-first, dark-mode design philosophy for excellent visibility across all devices

## Technical Constraints
- Framework: React with functional components and hooks
- Styling: Tailwind CSS for responsive styling
- Deployment: Optimized for Progressive Web Application (PWA)
- State Management: Local React state management using useState hook
