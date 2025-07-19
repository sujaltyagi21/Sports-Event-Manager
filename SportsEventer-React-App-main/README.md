# Sujal's Sports Event Manager

## Overview

 Sports Event Manager is a dynamic web application built with React that facilitates the registration process for sports events. Designed and developed by Sujal to streamline event management and enhance user experience, this application allows users to easily register for various sports events scheduled for a sports day. The application is intuitive, user-friendly, and packed with features that make event registration hassle-free.

## Features

-   Users can see the list of all available sports events, where each event is displayed in an engaging card tile format.
-   Each card tile displays essential details about the event, including the Event Name, Category, and Timings.
-   Users can navigate to a separate list of all selected events, making it easy to manage their event selections.
-   For All Events as well as Selected Events list, there is a SELECT/UNSELECT button that allows users to add or remove events from their selection.
-   Clean, modern interface with responsive design for all devices.
-   Real-time event management with instant updates.

## Smart Constraints

-   **Maximum 3 Events**: The application enforces a constraint where users can select a maximum of 3 events. This ensures users don't overcommit and can manage their participation effectively.
-   **No Time Conflicts**: Users cannot select events that conflict with the timings of already selected events. This prevents scheduling conflicts and ensures a smooth experience on sports day.
-   **Instant Feedback**: Users get immediate feedback when trying to select conflicting events or exceeding the limit.

## Technologies Used

-   `React`: JavaScript library for building user interfaces.
-   `Vite`: Next-generation frontend tooling for fast builds and development.
-   `Context API`: For efficient state management across the application.
-   `Tailwind CSS`: For modern, responsive styling.
-   `JavaScript (ES6+)`: For building components and application logic.

## Available Scripts

```sh
npm run dev     # Start development server
npm run build   # Create production build  
npm run preview # Preview production build
npm test        # Run test suite
```

## How It Works

1. **View Events**: Browse all available sports events on the main page
2. **Select Events**: Click SELECT button to add events to your selection (max 3)
3. **Manage Selection**: Switch to "Selected Events" tab to view and manage your choices
4. **Remove Events**: Click UNSELECT to remove events from your selection
5. **Smart Validation**: App prevents time conflicts and selection limits automatically

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context for state management  
├── utils/             # Utility functions
├── App.jsx            # Main application component
└── main.jsx          # Application entry point
```


