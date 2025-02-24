# File Structure Overview for Modern Landing Page

This document outlines the file structure for the "Retiresmart Hub" project where the `src` folder is omitted, and all main directories like `app`, `components`, and `layout` are directly in the root project directory. This setup is particularly designed to simplify access and organization of files for the development team.

## Project Root Structure

At the highest level, the project is structured to hold all necessary folders and files for easy navigation and development workflow.

`Unpacked project root directory: |-- .git |-- node_modules |-- public |-- .gitignore |-- next.config.js |-- package.json |-- README.md |-- tsconfig.json |-- app |-- components |-- hooks |-- layouts |-- pages |-- styles |-- utils`

### Directory Breakdown

1.  **Root Directories and Files:**

    *   **.git:**

        *   Contains the version control history and related files.

    *   **node_modules:**

        *   Houses all npm packages installed for the project.

    *   **public:**

        *   Stores static assets like images and robots.txt accessible in the project without a need to import them into components or modules.

    *   **root configuration and package files (.gitignore, next.config.js, package.json, etc.):**

        *   Control project-wide configurations, package dependencies, TypeScript settings, etc.

2.  **Application Structure:**

    *   **app:**

        *   Next.js file-based routing is defined here, including special files like `layout.tsx` for setting default layout behavior for pages.

    *   **components:**

        *   Reusable UI components such as buttons, forms, modals, etc., that are shared across multiple pages go in this directory.

    *   **hooks:**

        *   Custom React hooks that encapsulate reusable bits of logic revolving around state or side effects.

    *   **layouts:**

        *   Layout-related scripts, including wrappers that might encompass headers, footers, or sidebar-related components.

    *   **pages:**

        *   Although traditionally used by Next.js when the `pages` directory is omitted, components or pseudo-pages according to the new App directory structure can reside here.

    *   **styles:**

        *   All global and page-specific styles, primarily in CSS or Tailwind CSS, are defined here for maintaining consistent theming across the application.

    *   **utils:**

        *   Utility functions, constants, and helpers for tasks like date formatting, API calls, etc., are structured in this folder.

### Tools and Tech Stack Integration

*   **Tailwind CSS:**

    *   Used for styling, leverages utility-first CSS to quickly design direct from the utility classes available.

*   **TypeScript:**

    *   Enforces strict type-checking to avoid runtime errors and improve code reliability.

*   **Supabase:**

    *   Backend as a service for storing form submissions, securing user data, managing authentication, etc.

*   **[Optional] CMS Integration:**

    *   Any integrated CMS will ensure an easy update mechanism for the page through folders such as `pages` or `components`.

*   **Hotjar & Google Analytics:**

    *   For tracking user engagement and behavior analytics.

This structure ensures scalability, a clean directory for better project maintenance, and simplified navigation for multi-contributor projects.
