## My Busking Page

See the deployed version on https://buskingkhai.netlify.app!

## Introduction
This is a audience-facing web application created to allow audience to find out more about myself when I am busking. The main goal is to enhance engagement with the audience, allowing them to:

1. Request Songs
2. Tip me through cashless methods (PayNow)
3. Find out more about me.

The web application is designed with mobile interfaces in mind as it will mostly be accessed through scanning a QR code displayed when I am busking.
An intuitive user interface is required to cater to the largely transient target audience who mostly do not have time to stop.

## Project Description

Frontend: NextJS with Typescript
Database: Google Firebase
CSS: Material-Tailwind

Deployed on Netlify

## Features

This web application is largely static with the most important feature being a song request system that writes onto the database. More complex functionalities are implemented on the admin page.

1. A real-time song request system that allows users to add requests with song titles, artists and additional requests/remarks onto the database. (Requests will be viewed by me on the admin webpage, which is hosted on a separate repository.)
2. A tip page that allows users to download my PayNow QR code, and leave a message for me.
3. Displays inks for my social media and a writeup about myself.

There are no future plans at the moment as I find the audience facing page satisfactorily functional for now. I have designed the application to be as extensible as possible to support any further functionalities that I may want to add in the future.

# Busking App

This is a refactored version of the busking app with improved modularity, maintainability, and extensibility.

## Architecture Overview

The app has been refactored with the following principles:
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Common patterns are extracted into reusable components
- **Type Safety**: Comprehensive TypeScript interfaces
- **Centralized Configuration**: Constants and configuration in dedicated files
- **Custom Hooks**: Business logic separated from UI components

## Folder Structure

```
src/
├── app/                    # Next.js app directory
│   ├── writeups/          # Content components for different sections
│   └── [pages]/           # Individual page components
├── components/            # Reusable UI components
│   ├── content/          # Content-related components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── ui/               # Basic UI components
├── constants/            # App configuration and constants
├── hooks/                # Custom React hooks
├── lib/                  # External library configurations
└── types/                # TypeScript type definitions
```

## Component Categories

### UI Components (`/components/ui/`)
- **CardContainer**: Flexible container with different variants
- **NavigationButton**: Reusable navigation button with icon support
- **PageHeader**: Consistent page headers
- **StatusMessage**: Status feedback for user actions

### Form Components (`/components/forms/`)
- **SongRequestForm**: Complete song request form with validation
- **MessageForm**: Message submission form

### Layout Components (`/components/layout/`)
- **PageLayout**: Consistent page layout with navigation

### Content Components (`/components/content/`)
- **ContentSection**: Flexible content display with optional images

## Notable Custom Hooks

1. `useSongRequest`

    - Manages song request state and submission

2. `useMessage`
    - Handles message submission

## 🔧 Configuration

### Constants 
- **SITE_CONFIG**: Site metadata and branding
- **NAVIGATION_ITEMS**: Navigation structure
- **UI_CONSTANTS**: Consistent styling values
- **FORM_VALIDATION**: Validation rules and messages

### Types
- **SongRequest**: Song request data structure
- **Message**: Message data structure
- **NavigationItem**: Navigation configuration
- **RequestState**: Form state management

## Firebase Integration

Centralized Firebase operations:
- `addSongRequest()` - Submit new song requests
- `addMessage()` - Submit messages
- `checkUniqueTitle()` - Validate song uniqueness
- `getIsBusking()` - Check busking status

## Styling System

The app uses a consistent styling system with:
- **Tailwind CSS** for utility-first styling
- **Material Tailwind** for component library
- **Centralized color scheme** in constants
- **Responsive design** principles


## Benefits of This Architecture

- **Maintainability**: Clear separation makes code easier to understand and modify
- **Reusability**: Components can be easily reused across different pages
- **Testability**: Isolated functions and hooks are easier to test
- **Scalability**: New features can be added without affecting existing code
- **Type Safety**: Comprehensive TypeScript prevents runtime errors
- **Consistency**: Centralized styling and configuration ensure uniform UX

## Development Tips

- Use the custom hooks for all Firebase operations
- Follow the established component patterns
- Add new constants to the centralized configuration
- Maintain consistent styling using the UI constants
- Always add proper TypeScript types for new data structures
