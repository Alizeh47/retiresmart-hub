# Project Requirements Document (PRD)

## 1. Project Overview

Retiresmart Hub is a dedicated landing page for a retirement planning platform aimed at individuals approaching retirement, current retirees, and those looking to optimize their long-term financial planning. The page introduces the platform’s core value—“A Guided Journey to Retirement”—by highlighting its expert financial insights, personalized strategies, and trust-building visuals. The design merges modern sophistication with vintage charm, employing hand-drawn illustrations, muted pastel colors, and a balanced typography mix to evoke a sense of calm reliability and professional credibility.

This landing page is being built to capture visitor interest and convert traffic into scheduled consultations and engagements. Key objectives include seamless integration with calendar services (like Calendly or Google Calendar) for booking meetings, an engaging testimonial carousel offering both automatic and manual controls, and interactive features such as a fun claw machine mini-game to increase user engagement. Ultimately, the success of the project will be measured by user engagement metrics, conversion rates on consultation bookings, and the overall ease of content management for timely updates.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   Develop a visually appealing landing page using a modern yet vintage aesthetic.
*   Integration of a calendar tool (e.g., Calendly or Google Calendar) triggered by the “Schedule a Meeting” button.
*   Creation of core sections including a hero area, services overview, testimonial carousel with both auto and manual controls, financial news highlights, virtual office features, and an interactive question form.
*   Implementation of interactive elements like the Claw Machine Game (a mini-game for engagement).
*   Integration with a CMS for updating financial news, testimonials, and other dynamic content without developer intervention.
*   Use of Supabase for secure form data storage and email notification integration upon form submission.
*   Ensuring responsive design and accessibility guidelines (ARIA labels, high-contrast text, alt texts, etc.).

**Out-of-Scope:**

*   Development of a full backend application beyond what is needed for form handling and basic data capture.
*   Complex user account systems or extended dashboard functionalities.
*   Advanced personalization beyond the landing page experience (i.e., extensive user-specific financial analysis or portfolio management).
*   Building a comprehensive mobile application; focus remains on a responsive landing page.
*   In-depth third-party integrations beyond calendar services, CMS, and basic analytics tools (Google Analytics, Hotjar).

## 3. User Flow

When a visitor lands on Retiresmart Hub, they are greeted by a clean, elegantly designed homepage that immediately communicates the platform’s value—a guided journey toward retirement planning. The top section features the logo, a navigation menu, and a prominent “Schedule a Meeting” button, inviting visitors to take immediate action to book a consultation. As the visitor scrolls down, they experience a hero section with a scenic hand-drawn illustration, a brief value proposition, trust signals (such as a “People Are Talking” section with partnered logos), and introductory testimonials displayed in a carousel.

Once the visitor interacts with the page, clicking the “Schedule a Meeting” button triggers a smooth, integrated calendar service allowing them to select a consultation slot. Throughout the journey, the user can explore detailed sections about services (retirement income, tax, and investment planning) linked by a dotted pathway and interactive elements like financial news highlights, a virtual office, and an inquiry form. The tactile experience is rounded off at the footer, where additional navigation options, educational content, and even a fun element—the Claw Machine Game—further engage and direct the visitor toward conversion.

## 4. Core Features

*   **Landing Page Design:**

    *   Clean, elegant, and sophisticated design with hand-drawn illustrations.
    *   Muted pastel color palette (beige, cream, light pink) with greenish-blue accents.
    *   Use of modern serif typography complemented by script and sans-serif fonts where needed.

*   **Header & Navigation:**

    *   Logo display (top left).
    *   Navigation menu with clearly labeled sections.
    *   “Schedule a Meeting” button clearly visible with calendar integration trigger.

*   **Hero Section:**

    *   Scenic hand-drawn illustration (e.g., hot air balloon imagery).
    *   Strong call-to-action (CTA) encouraging further site exploration.

*   **Interactive Calendar Integration:**

    *   Button click launches embedded calendar (Calendly or Google Calendar) for selecting consultation dates.

*   **Testimonial Carousel:**

    *   Automated transitions for testimonials alongside manual controls (arrows, swipe).
    *   Bordered cards with a script-like font for user reviews.

*   **Service & Resource Section:**

    *   Detailed sections outlining retirement income, tax, and investment planning.
    *   Visual dotted pathway linking different services.
    *   Grid layout for financial insights and market data.

*   **Inquiry Form (“Question Jar”):**

    *   Form with required validations (name, email, message).
    *   Clean, minimalistic input fields with basic styling.

*   **Claw Machine Mini-Game:**

    *   An interactive mini-game offering virtual rewards like discounts or premium content access.

*   **Footer:**

    *   Four sections including Branding & Navigation, Services & Products, Education & Virtual Office, and About & Contact.
    *   Inclusion of trust signals like BBB A+ badge and social media links.
    *   Live chat widget for immediate user assistance.

*   **CMS Integration:**

    *   Dynamic content updates for financial news and testimonials via a CMS.

*   **Analytics & Monitoring:**

    *   Integration with Google Analytics and Hotjar for user tracking and heatmaps.

## 5. Tech Stack & Tools

*   **Frontend:**

    *   Next.js 14 for server-side rendering and a modern React-based framework.
    *   TypeScript for strongly typed JavaScript.
    *   Tailwind CSS for rapid, responsive styling.
    *   shadcn/UI for component libraries and consistent UI elements.
    *   Radix UI for building accessible components.
    *   Lucide Icons for scalable vector icons.

*   **Backend & Storage:**

    *   Supabase for handling form submissions, user input storage, and authentication if needed.

*   **Additional Integrations:**

    *   Calendar integration with tools like Calendly or Google Calendar.
    *   CMS integration (e.g., Contentful, Strapi) for dynamic content updates.
    *   Email notifications integrated with form handling.

*   **Optional AI Integration:**

    *   GPT-4o or Claude 3.5 Sonnet to auto-generate marketing copy or headlines dynamically.

*   **IDE/Plugins:**

    *   Cursor for advanced IDE assistance with real-time, AI-powered coding suggestions.
    *   ChatGPT (OpenAI's GPT-4 O1 model) for advanced code generation and troubleshooting.

## 6. Non-Functional Requirements

*   **Performance:**

    *   Fast load times across all devices, with critical content visible within 1-2 seconds.
    *   Optimized images and hand-drawn illustrations to balance quality with performance.

*   **Security:**

    *   Safe handling of user data through Supabase with secure connection protocols.
    *   Form submissions must include validation and sanitization to prevent malicious inputs.
    *   GDPR and general data privacy measures should be implemented.

*   **Usability & Accessibility:**

    *   Fully responsive design that adapts from desktop to mobile.
    *   Navigation elements to include ARIA roles, high contrast, and accessible fonts.
    *   Clear focus states and alt texts provided for all images.

*   **Scalability:**

    *   Design to accommodate future updates such as additional sections or enhanced interactive elements without major rework.
    *   CMS structure in place for easy content modifications.

## 7. Constraints & Assumptions

*   The calendar integration is assumed to be powered by a third-party service (Calendly or Google Calendar), so its API availability and interface design are external.
*   It is assumed that design assets (hand-drawn illustrations, vintage-style visual elements) will be sourced from a pre-identified provider or a dedicated graphic designer.
*   Content for financial news, testimonials, and other dynamic sections will be managed through an integrated CMS, assuming non-technical users will update the content.
*   All interactive elements (e.g., testimonial carousel, inquiry form) should adhere to minimal yet effective validation and accessibility standards.
*   The use of Supabase as the backend solution assumes that it meets all required data storage, security, and notification needs.
*   The choice of tools like Next.js 14, Tailwind CSS, and TypeScript is based on current best practices for responsive, modern web design.

## 8. Known Issues & Potential Pitfalls

*   **API Rate Limits & Third-Party Integrations:**\
    Calendar and CMS integrations can have rate limit restrictions. Clear documentation and fallback mechanisms should be included to handle API downtime or rate limiting issues.
*   **Design Consistency:**\
    Merging a modern layout with vintage, hand-drawn elements might lead to visual inconsistency. Establish and follow clear design guidelines and style guides to mitigate this risk.
*   **Browser and Device Compatibility:**\
    With a focus on responsiveness, testing across various browsers and devices is crucial. Performance optimizations, CSS fallbacks, and responsive design breakpoints must be thoroughly validated.
*   **Performance Load:**\
    The landing page includes multiple interactive elements, videos, and animations that may affect load times. Optimize assets and consider lazy loading where appropriate.
*   **Form Validation & Security:**\
    Basic client and server-side validations must be implemented for all user inputs to prevent misuse. Ensure that email notifications and data storage routines are secure.
*   **User Engagement Features:**\
    The Claw Machine Game and testimonial carousel should provide seamless, non-disruptive interactions. Keep the control mechanisms intuitive and avoid overwhelming the user with too many simultaneous animations or transitions.

This PRD serves as the definitive reference for building the Retiresmart Hub landing page. All developers, designers, and future technical documents should follow these guidelines to ensure a consistent, engaging, and robust user experience.
