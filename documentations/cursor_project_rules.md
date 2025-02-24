## Project Overview

*   **Type:** cursor_project_rules
*   **Description:** A landing page for the Retiresmart Hub retirement planning platform that introduces expert financial insights, personalized strategies, and trust-building visuals through a modern yet vintage design. The design features hand-drawn illustrations, muted pastel colors, and sophisticated typography to evoke calm reliability and professional credibility.
*   **Primary Goal:** Capture visitor interest and convert traffic into scheduled consultations and engagements by integrating a calendar tool for booking meetings, engaging interactive elements (such as a testimonial carousel with auto/manual controls and a Claw Machine mini-game), and providing easy content updates via a CMS.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   **Next.js 14 (App Router):** Enforce the use of the `app/` directory with nested route folders. For example, follow the `app/[route]/page.tsx` conventions to structure sections such as the hero area, services pages, and interactive elements.
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions
    *   Example 2: "Next.js (Pages Router)" → Not applicable in this project
    *   Example 3: "React Router 6" → Not applicable in this project

### Core Directories

*   **Versioned Structure:**

    *   **app/api:** Next.js 14 API routes for handling form submissions (integrated with Supabase for storing user inquiries and scheduling data).
    *   **app/components:** Houses reusable UI components built with shadcn/UI, Radix UI, and Lucide Icons.
    *   **app/(sections):** Contains feature-specific folders (e.g., hero, services, testimonials, calendar integration) using a versioned and modular architecture.

### Key Files

*   **Stack-Versioned Patterns:**

    *   **app/layout.tsx:** Implements the root layout for global styling and shared components.
    *   **app/schedule/page.tsx:** Implements the calendar integration triggered by the 'Schedule a Meeting' button, ensuring that users can select a consultation date and time.
    *   **app/testimonials/carousel.tsx:** Contains the testimonial carousel logic with both automated and manual control features.
    *   **app/footer/page.tsx:** Structures the footer sections including Branding & Navigation, Services & Products, Education & Virtual Office, and About & Contact.

## Tech Stack Rules

*   **Version Enforcement:**

    *   **next@14:** Must use the App Router; use nested folders under `app/` with no mixing of the `pages/` routing pattern.
    *   **TypeScript:** Enforce strong typing across all components and API routes.
    *   **Tailwind CSS:** Use utility-first styling with Tailwind CSS for responsive and rapid UI development.
    *   **shadcn/UI & Radix UI:** Build accessible and consistent UI components.
    *   **Lucide Icons:** Use scalable vector icons that integrate seamlessly with the design language.
    *   **Supabase:** Must be used for secure form data handling and storage.

## PRD Compliance

*   **Non-Negotiable:**

    *   "Retiresmart Hub is a dedicated landing page that introduces a guided journey to retirement. The page must integrate a calendar service for booking consultations, feature interactive elements such as a testimonial carousel with both automatic and manual controls, and include engaging features like a Claw Machine mini-game. All interactive elements must adhere to performance, accessibility, and responsiveness guidelines."

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: Clicking the 'Schedule a Meeting' button triggers a calendar integration (via Calendly or Google Calendar) at `app/schedule/page.tsx`, ensuring a seamless transition for booking consultations.

## Best Practices

*   **Next.js 14**

    *   Use the App Router exclusively with the `app/` directory for cleaner routing and improved performance.
    *   Leverage server-side rendering where needed to optimize load times.
    *   Maintain separation of concerns by splitting UI components and API logic into distinct folders.

*   **TypeScript**

    *   Enforce strict types to reduce runtime errors and improve code maintainability.
    *   Use interfaces and types for component props and API responses.
    *   Enable linting and formatting strictly to follow coding standards.

*   **Tailwind CSS**

    *   Utilize responsive utility classes to ensure the design adapts to a range of devices and screen sizes.
    *   Keep custom styles minimal by relying on Tailwind’s utility classes.
    *   Optimize the production build with purge settings to remove unused CSS classes.

*   **shadcn/UI & Radix UI**

    *   Prefer these libraries for shared UI components to ensure consistency and accessibility across the project.
    *   Follow accessibility best practices by using ARIA attributes as recommended by the libraries.
    *   Utilize component composition to keep code modular and maintainable.

*   **Lucide Icons**

    *   Use icons that are scalable and maintain a consistent line thickness and style.
    *   Import only necessary icons to optimize bundle size.
    *   Follow accessibility guidelines by including appropriate alt texts and ARIA labels when icons serve as interactive elements.

*   **Supabase**

    *   Ensure secure handling of form submissions with client-side and server-side validation.
    *   Use Supabase’s real-time capabilities for prompt email notifications and data updates.
    *   Maintain clear and secure integration by handling API keys and credentials through environment variables.

## Rules

*   Derive folder/file patterns directly from the tech stack document and enforced version rules.
*   If Next.js 14 App Router: Enforce the use of the `app/` directory with nested route folders; do not mix with the `pages/` structure.
*   Maintain a clear separation between API routes (`app/api`) and UI components (`app/components` or feature-specific folders).
*   Adhere strictly to version-specific patterns outlined for Next.js 14, TypeScript, Tailwind CSS, shadcn/UI, Radix UI, Lucide Icons, and Supabase.
*   Follow all responsive, accessibility, and performance guidelines as detailed in the PRD and design specifications.
