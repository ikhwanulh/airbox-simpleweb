# Overview

Air Box Teknologi is a modern web application showcasing digital solutions for businesses. It's built as a full-stack application with a React frontend and Express.js backend. The application serves as a corporate website featuring product showcases, client testimonials, an AI chatbot for consultation, and contact forms. The company specializes in providing digital transformation solutions including interactive dashboards, logistics tracking (Kurir Pintar), HR management (Kru Pintar), and accounting systems (Jurnal Pintar).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Animations**: Framer Motion for smooth interactions and page transitions
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with placeholder implementations
- **Database Integration**: Drizzle ORM configured for PostgreSQL
- **Development**: Hot module replacement and error handling middleware

## Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Migrations**: Managed through drizzle-kit
- **Storage**: In-memory storage implementation for development with interface for database abstraction

## Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theming**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: ARIA-compliant components from Radix UI

## Development Experience
- **Hot Reload**: Vite HMR for instant feedback during development
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Path Aliases**: Simplified imports with @ and @shared aliases
- **Error Handling**: Runtime error overlay for development debugging

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection Pooling**: Built-in connection management for serverless environments

## UI and Animation Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Framer Motion**: Production-ready motion library for React animations
- **Lucide React**: Icon library with consistent design system

## Development Tools
- **Replit Integration**: Custom vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation integrated with Drizzle ORM

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **nanoid**: URL-safe unique string ID generator

## Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used)

## Email Configuration
- **Contact Form Email**: The contact form sends emails to ikhwanul.h@gmail.com
- **SMTP Setup Required**: To enable actual email sending, the following environment variables need to be set:
  - `SMTP_HOST`: SMTP server hostname (defaults to smtp.gmail.com)
  - `SMTP_PORT`: SMTP port (defaults to 587)
  - `SMTP_USER`: SMTP username/email
  - `SMTP_PASS`: SMTP password or app-specific password
  - `CONTACT_EMAIL`: Optional override for recipient email (defaults to ikhwanul.h@gmail.com)
- **Email Subject Format**: `{company}-{fullName}`
- **Note**: User dismissed Resend integration. If email sending is needed, SMTP credentials must be configured as secrets.