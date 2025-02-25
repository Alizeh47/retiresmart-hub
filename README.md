# RetireSmart Hub

A modern, elegant retirement planning platform built with Next.js and TypeScript.

## Features

- Clean, sophisticated design targeted at retirement planning
- Hand-drawn illustrations combined with modern typography
- Responsive layout with mobile-first design
- Interactive components like video player and testimonial carousel
- Comprehensive navigation with mobile menu support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: 
  - Playfair Display (Headings)
  - Inter (Body text)
- **Icons**: Custom SVG illustrations

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/retiresmart-hub.git
cd retiresmart-hub
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
retiresmart-hub/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage component
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Hero section with main CTA
│   ├── GetDirectionsSection.tsx  # Video section
│   ├── TestimonialsSection.tsx   # Testimonials carousel
│   └── Footer.tsx        # Footer with navigation
├── public/               # Static assets
│   └── images/          # Images and SVGs
└── styles/              # Global styles
```

## Design System

### Colors

- Primary: Deep blue (#1A365D)
- Secondary: Accent blue (#4A90E2)
- Beige: Background color (#F5F1E8)
- Teal: CTA buttons (#4DB6AC)

### Typography

- Display Large: 3.5rem (56px)
- Display Medium: 2.5rem (40px)
- Display Small: 2rem (32px)
- Body: 1rem (16px)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
