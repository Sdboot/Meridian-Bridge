# MERIDIAN BRIDGE - Immigration Consulting Website

## Project Overview
Premium Next.js 15 website for MERIDIAN BRIDGE, a world-class immigration consulting company.

## Tech Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod Validation
- Lucide Icons
- Next SEO

## Brand Colors (Extracted from Logo)
- Deep Navy Blue: #0F2B4F (Primary Background)
- Teal Blue: #1B7E8C (Secondary Accent)
- Metallic Gold: #D4AF37 (Primary Accent)
- Bronze Gold: #B8860B (Secondary Accent)
- Soft White/Ivory: #F8F7F2 (Text & Background Balance)

## Project Status

- [x] Project structure created
- [x] Dependencies configured
- [x] Tailwind CSS setup with brand colors
- [x] Core layout components
- [x] Pages structure
- [x] TypeScript configuration
- [ ] Development server ready
- [ ] Content population
- [ ] Testing & optimization

## Key Features
- Multi-page website with 6 main pages
- Premium, corporate design
- Dark luxury + white premium sections
- Gold highlights throughout
- Smooth animations with Framer Motion
- Form validation with React Hook Form + Zod
- SEO optimization with next-seo
- WCAG accessibility compliance
- Responsive design
- Performance optimized (Lighthouse 95+)

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # TypeScript check
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── about/
│   ├── services/
│   ├── destinations/
│   ├── resources/
│   └── contact/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MegaMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServiceOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Destinations.tsx
│   │   ├── Statistics.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Blog.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Form.tsx
│       └── others
├── types/
│   └── index.ts
├── hooks/
│   └── useAnimation.ts
├── styles/
│   └── globals.css
└── constants/
    └── index.ts
```

## Navigation
- Home
- About
- Services (Study Abroad, Visas, Permanent Residency, etc.)
- Destinations (Canada, UK, Australia, USA, Germany, Ireland, NZ)
- Resources (Guides, Blog, FAQs)
- Contact (Forms, WhatsApp, Email)

## Next Steps
1. Start development server
2. Populate content and pages
3. Add images and icons
4. Test responsiveness
5. Optimize performance
6. Deploy to production
