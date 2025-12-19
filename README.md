# Technical Interview Exercise - Ionic React Application

## Overview
You have **1 hour** to complete this technical exercise. The goal is to demonstrate your global skills.

## Current Setup
This is an Ionic React application with:
- TypeScript support
- Electron desktop and capacitor mobile app capability
- Cypress for E2E testing
- Vitest for unit testing
- SASS/CSS support
- Platform detection utilities already available

### Prerequisites
- Git available
- Node.js installed
- ruby
- java (android)

There is a `mise.toml` file to help install the correct tools and versions using [mise](https://mise.jdx.dev/).

## Tasks

### 1. Create a New Page (15 minutes)
Create a new page called that is navigatable from the home page.

**Requirements:**
- Create a new page component
- Add navigation from Home page
- Use at least 3 different Ionic components
- Apply minimal custom styling using SASS/CSS
- The page should display user profile information (mock data is fine)

### 2. Create a Platform-Aware Component (25 minutes)
Create an inner component that displays different content based on the platform/OS.

**Requirements:**
- Create a component called `PlatformInfo` at `src/components/PlatformInfo.tsx`
- Use the existing platform detection utilities in `src/utils/platform.ts`
- Display different content for:
  - Mobile platforms (iOS/Android)
  - Desktop/Electron
  - Web browsers
- Include the component in your new page
- Show relevant platform-specific features or information (iOS/Android/Windows/Mac) (e.g. OS Version, etc)

**Example Content Ideas:**
- Mobile: "Tap to interact", show touch-friendly UI
- Desktop/Electron: "Click to interact", show keyboard shortcuts
- Different icons or styling based on platform

### 3. Unit Testing (10 minutes)
Create a unit test for your PlatformInfo component.

**Requirements:**
- Create test file at `src/components/PlatformInfo.test.tsx`
- Test that the component renders correctly
- Mock the platform detection and test different platform scenarios
- Use Vitest and React Testing Library (already configured)

### 4. BONUS: Component/E2E Testing (10 minutes)
If time permits, create a Cypress test.

**Requirements:**
- Create a test file in the `cypress` directory
- Test navigation from Home to Profile page
- Test that the PlatformInfo component renders

## Getting Started

Take your time to explore the repository and the scripts provided. Don't hesitate to ask questions if anything is unclear.

## Evaluation Criteria

1. **Code Quality:** Clean, readable, well-structured code
3. **TypeScript:** Correct typing and interfaces
5. **Testing:** Working unit tests with good coverage
6. **Problem Solving:** How you approach and solve the requirements

## Tips

- Use existing patterns from the codebase (structured code and components are valued)
- Don't overthink the styling - focus on functionality
- Platform detection utilities are already available - use them!
- Ask questions if anything is unclear

## During the Interview (45-60 minutes)

1. Demo the working application
2. Explain your code and design decisions
3. Run the tests to show they pass
4. Discuss any challenges you encountered

Good coding! 🚀
