# AI Development Rules for "Code Like My Ex"

This document outlines the technical stack and guidelines for developing the "Code Like My Ex" application. Adhering to these rules ensures consistency, maintainability, and efficient development.

## Tech Stack Overview

The application is built using a modern web development stack, primarily focused on a rich, interactive frontend experience.

*   **Frontend Framework**: React for building dynamic and responsive user interfaces.
*   **Language**: TypeScript for enhanced code quality, type safety, and better developer tooling.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid UI development and consistent design.
*   **Build Tool**: Vite for a fast development server and optimized production builds.
*   **Package Management**: npm is used for managing project dependencies.
*   **Code Editor**: The application features a basic in-browser code editor implemented using a standard HTML `textarea`.
*   **Lesson Content**: All lesson data, including explanations, instructions, and solutions, is statically defined within the application's codebase.
*   **Python (Conceptual)**: While the application teaches Python, Python itself is *not* part of the web application's runtime tech stack. The Python code is simulated and validated within the JavaScript environment.

## Library Usage Rules

To maintain a clean and efficient codebase, please follow these guidelines for using libraries and components:

*   **UI Components**:
    *   For new UI elements, create dedicated React components in the `src/components/` directory.
    *   Prioritize using existing shadcn/ui components where applicable. If a shadcn/ui component doesn't fit, create a custom component.
    *   Do not modify shadcn/ui component files directly; create new components that wrap or extend them if customization is needed.
*   **Styling**:
    *   **Always** use Tailwind CSS classes for all styling. Avoid inline styles or separate CSS files unless absolutely necessary for global styles (e.g., `index.css` for base styles).
    *   Ensure designs are responsive across different screen sizes.
*   **State Management**:
    *   Utilize React's built-in `useState` and `useEffect` hooks for managing component-level and application-wide state.
*   **Routing**:
    *   If the application requires multi-page navigation, use `react-router-dom` for defining and managing routes. Keep routes defined in `src/App.tsx`.
*   **Icons**:
    *   For any icons needed in the UI, use the `lucide-react` library.
*   **Notifications**:
    *   Use a toast notification system (e.g., `react-hot-toast`) to provide user feedback for important events.
*   **Code Editor**:
    *   The current code editor is a basic `textarea`. If advanced features like syntax highlighting, autocompletion, or linting are required, consider integrating a dedicated code editor library like Monaco Editor.
*   **Data Structures**:
    *   Define clear TypeScript interfaces for all data structures (e.g., `Lesson` in `src/types.ts`) to ensure type safety and improve code readability.
*   **Build Process**:
    *   Leverage Vite for all development and production build processes. Do not introduce other build tools.