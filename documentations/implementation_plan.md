**Retiresmart Hub Implementation Plan**

Below is the step-by-step implementation plan for building the Retiresmart Hub landing page based on the project requirements.

---

## Phase 1: Environment Setup

1. **Install Core Tools:**
   - Verify that Node.js v20.2.1 is installed. If not, install Node.js v20.2.1.
   - **Reference:** PRD Section 2; Tech Stack Document.

2. **Initialize Next.js Project:**
   - Create a new Next.js 14 project with TypeScript using the command:
     `npx create-next-app@14 --ts retiresmart-hub`
   - **Reference:** Tech Stack Document (Next.js 14 requirement).

3. **Install Frontend Dependencies:**
   - Install Tailwind CSS, shadcn/UI, Radix UI, and Lucide Icons by running:
     `npm install tailwindcss shadcn-ui @radix-ui/react-* lucide-react`
   - **Reference:** Tech Stack Document.

4. **Configure Tailwind CSS:**
   - Initialize Tailwind CSS configuration and add necessary paths in `tailwind.config.js`.
   - **Reference:** Frontend Guidelines Document.

5. **Setup Repository and Branches:**
   - Initialize Git repository with `main` and `dev` branches. Enable branch protection rules.
   - **Reference:** PRD Section 1.4.

6. **Validation Step:**
   - Run `npm run dev` to ensure the development server starts correctly.

---

## Phase 2: Frontend Development

7. **Header Component:**
   - Create `/src/components/Header.tsx` to implement the header containing:
     - Logo at top left
     - Navigation menu
     - 'Schedule a Meeting' button
   - **Reference:** PRD Section 1 (Homepage Overview).

8. **Implement Calendar Trigger in Header:**
   - Add an onClick handler to the 'Schedule a Meeting' button that will open a modal with the calendar integration (Calendly or Google Calendar embed).
   - **Reference:** Q&A (Calendar Integration).

9. **Hero Section Component:**
   - Create `/src/components/Hero.tsx` that contains:
     - A scenic hand-drawn illustration placeholder (e.g., hot air balloon imagery)
     - Serif typography and a CTA button linking to the calendar modal
   - **Reference:** PRD Section 1 (Hero Section).

10. **Testimonial Carousel Component:**
    - Create `/src/components/TestimonialCarousel.tsx` implementing a carousel that supports automatic transitions and manual controls (arrows or swipe gestures).
    - **Reference:** Q&A (Testimonial Carousel requirements).

11. **Services Overview Component:**
    - Create `/src/components/Services.tsx` to display retirement income, tax, and investment planning options in a two-column or grid layout with a dotted pathway.
    - **Reference:** PRD Section 2 (Services Page) & Thematic Breakdown.

12. **Financial News and Virtual Office Component:**
    - Create `/src/components/FinancialNews.tsx` that includes:
      - A featured article with a cautionary image
      - Sidebar articles on estate planning scams and unexpected expenses
    - **Reference:** PRD Part 5 (Financial News & Virtual Office).

13. **Inquiry Form Component:**
    - Create `/src/components/InquiryForm.tsx` implementing the ‘Question Jar’ form with minimalistic sans-serif input fields for name, email, and message. Include client-side validation (email format, required fields).
    - **Reference:** Q&A (Inquiry Form Requirements).

14. **Claw Machine Game Component:**
    - Create `/src/components/ClawMachineGame.tsx` to launch a mini-game modal when triggered (this game simulates a claw machine offering virtual rewards).
    - **Reference:** Q&A (Claw Machine Game functionality).

15. **Footer Component:**
    - Create `/src/components/Footer.tsx` that organizes four sections:
      - Branding & Navigation (logo, tagline, interactive buttons such as My Guide, Log in, Upload Files Securely, Claw Machine Game)
      - Services & Products
      - Education & Virtual Office
      - About & Contact (with social media icons and a live chat widget)
    - **Reference:** PRD Section 1 (Footer Breakdown).

16. **Integrate Analytics Scripts:**
    - Modify `/pages/_document.tsx` to include Google Analytics and Hotjar scripts for tracking user engagement.
    - **Reference:** Q&A (Analytics & User Tracking).

17. **Validation Step:**
    - Run the development server and manually test the responsiveness, accessibility (ARIA labels, alt texts), and click actions on interactive components.

---

## Phase 3: Backend Development

18. **Supabase Setup:**
    - Create a `.env.local` file at the root with Supabase credentials (URL and anon key).
    - **Reference:** PRD Section 4 (Form Handling & Data Storage); Tech Stack Document.

19. **Configure Supabase Client:**
    - Create `/lib/supabaseClient.ts` to initialize and export the Supabase client.
    - **Reference:** Tech Stack Document.

20. **Create Inquiry API Endpoint:**
    - Create `/pages/api/inquiry.ts` to handle POST requests from the inquiry form. Validate incoming data (name, email, message) and store it in Supabase.
    - **Reference:** PRD Section 4 (Form Handling).

21. **Implement Email Notification (Optional):**
    - Integrate email notification logic within the API endpoint to alert the team upon a new form submission.
    - **Reference:** Q&A (Form Submissions & Notifications).

22. **Validation Step:**
    - Test the API endpoint using Postman or curl with valid data and check the Supabase dashboard for entry creation.

---

## Phase 4: Integration

23. **Calendar Integration Workflow:**
    - Connect the 'Schedule a Meeting' button (in Header and Hero components) to trigger a modal that embeds Calendly or Google Calendar for booking.
    - **Reference:** Q&A (Calendar Integration Details).

24. **Connect Inquiry Form Submission:**
    - Ensure that the Inquiry Form component calls the `/api/inquiry` endpoint on submit and displays success/error messages based on response.
    - **Reference:** PRD Section 4 (Form Handling) & Q&A (Form Validation).

25. **Integrate CMS for Dynamic Content (Optional):**
    - (If required) Set up a CMS integration (e.g., Contentful or Strapi) to retrieve and update testimonials and financial news content dynamically.
    - **Reference:** Q&A (CMS Integration) & PRD Section 4.

26. **Validation Step:**
    - Test the overall user flow by clicking the 'Schedule a Meeting' button, submitting the inquiry form, and navigating through interactive components (carousel, mini-game) to ensure proper integration.

---

## Phase 5: Deployment

27. **Configure Hosting for Next.js App:**
    - Prepare the project for deployment on a platform such as Vercel. Create a `vercel.json` configuration file at the project root if necessary.
    - **Reference:** Tech Stack Document (Next.js Advices).

28. **Set Environment Variables on Cloud:**
    - Configure environment variables (Supabase URL, keys, and any analytics IDs) in the Vercel dashboard.
    - **Reference:** PRD Section 7 (Constraints & Assumptions).

29. **Establish CI/CD Pipeline:**
    - Connect the repository to Vercel/GitHub for automatic builds and deployments.
    - **Reference:** PRD Section 8 (Deployment Requirements).

30. **Validation Step:**
    - Deploy the app to the staging environment, run end-to-end tests (using Cypress or a similar tool), and verify that all interactive elements, data storage, and third-party integrations function as expected.

---

**Note:**
- Next.js 14 is used exactly as specified in the Tech Stack because it is best-suited for the current AI coding tools and LLM models.
- Ensure that all UI components adhere to the specified design guidelines: muted pastels (beige, cream, light pink) with greenish-blue accents, modern yet vintage typography, and hand-drawn illustration placeholders.
- Regularly validate with manual testing to confirm responsiveness, accessibility, and functionality across all devices.

This plan provides clear, actionable steps to develop the Retiresmart Hub landing page with complete frontend and backend integration, ensuring a robust and engaging user experience.