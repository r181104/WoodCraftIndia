# Overview

Artisan Woods is a full-stack e-commerce web application for a traditional Indian woodworking business. The application showcases handcrafted wooden furniture and home decor items, featuring a product catalog, custom quote calculator, contact forms, and shopping cart functionality. Built with modern web technologies, it combines a React frontend with an Express backend, emphasizing craftsmanship aesthetics and user-friendly design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and local storage hooks for client-side persistence
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system featuring wood-themed color palette and typography scales
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL as the primary database
- **Database Provider**: Neon Database serverless PostgreSQL for scalable cloud storage
- **Data Validation**: Zod schemas for runtime type validation and API request/response validation
- **Storage Layer**: Abstracted storage interface with in-memory fallback for development

## API Design
- **RESTful Endpoints**: 
  - `/api/products` - Product catalog with filtering and featured products
  - `/api/inquiries` - Contact form submissions
  - `/api/custom-quotes` - Custom project quote calculations
- **Error Handling**: Centralized error middleware with structured error responses
- **Request/Response**: JSON-based communication with comprehensive logging

## Database Schema
- **Products Table**: Catalog items with pricing, categories, images, and stock status
- **Inquiries Table**: Customer contact form submissions and communication tracking
- **Custom Quotes Table**: Project estimates with material costs, labor calculations, and customer details
- **Data Types**: Decimal precision for pricing, UUID primary keys, and timestamp tracking

## Development Features
- **Hot Module Replacement**: Vite development server with instant updates
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Code Organization**: Monorepo structure with shared schemas and utilities
- **Asset Handling**: Optimized image loading and static asset management

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production data persistence
- **Drizzle Kit**: Database migration and schema management tools

## Authentication & Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not actively used in current implementation)

## UI & Styling Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Modern icon library for consistent iconography
- **Google Fonts**: Inter and Playfair Display fonts for typography hierarchy

## Development Tools
- **Replit Integration**: Development environment optimizations and error overlays
- **ESBuild**: Fast bundling for production server builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

## Frontend State & Data Management
- **TanStack React Query**: Server state synchronization and caching
- **React Hook Form**: Form validation and submission handling
- **Wouter**: Lightweight routing solution

## Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx & class-variance-authority**: Conditional CSS class management
- **Embla Carousel**: Touch-friendly carousel component for product showcases