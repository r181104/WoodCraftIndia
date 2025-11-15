# 🌲 Artisan Woods - Premium Handcrafted Wooden Furniture

A modern, responsive e-commerce website showcasing premium handcrafted wooden furniture from traditional Indian artisans. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Premium Design**: Beautiful dark wood theme with golden accents
- **Responsive Layout**: Perfect on all devices and screen sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Product Showcase**: Filterable product gallery with detailed cards
- **Custom Calculator**: Interactive quote calculator for custom projects
- **Contact System**: Integrated contact forms with email handling
- **SEO Optimized**: Full meta tags and social media optimization

## 🚀 Live Demo

Visit the live website: [https://r181104.github.io/WoodCraftIndia/](https://r181104.github.io/WoodCraftIndia/)

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Components
- **UI Components**: Radix UI primitives
- **Routing**: Wouter (lightweight routing)
- **Build Tool**: Vite
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter + Playfair Display (Google Fonts)

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── data/          # Static product data
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Route components
│   │   ├── types/         # TypeScript definitions
│   │   └── App.tsx        # Main application
│   └── index.html         # HTML entry point
├── components.json        # UI component configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 🎨 Design Features

### Color Scheme

- **Primary**: Dark wood tones (#1a1611, #2d1f17)
- **Secondary**: Cream and warm whites (#f5f1eb, #faf7f2)
- **Accent**: Golden amber (#fbbf24, #f59e0b)
- **Text**: Cream variations (#f5deb3, #deb887)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Weights**: 300, 400, 500, 600, 700

### Sections

1. **Hero Section** - Dark theme with animated elements
2. **About Section** - Light cream background with company story
3. **Products Section** - Dark theme with filterable gallery
4. **Custom Calculator** - Light background with interactive form
5. **Contact Section** - Dark theme with form and information

## 🚀 Deployment to GitHub Pages

### Option 1: Manual Deployment

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   - Copy the contents of `dist/` to your repository
   - Enable GitHub Pages in repository settings
   - Set source to "Deploy from a branch" and select `main`

### Option 2: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`:**

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: "18"
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy Artisan Woods website"
   git push origin main
   ```

## 📧 Contact Form Configuration

The contact form uses **Formspree** for handling submissions. To set up your own:

1. Visit [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint
3. Update the endpoint in `client/src/components/contact-section.tsx`:
   ```typescript
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
   ```

## 🔧 Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/r181104/WoodCraftIndia.git
   cd WoodCraftIndia
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:5173`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

- **Optimized Images**: WebP format with fallbacks
- **Lazy Loading**: Images load as they enter viewport
- **Code Splitting**: Dynamic imports for better performance
- **Minification**: CSS and JS minified for production
- **Caching**: Static assets cached for faster loading

## 📄 License

MIT License - feel free to use this project for your own woodworking business!

## 🤝 Contributing

This is a showcase project, but improvements are welcome:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions about this project, please open an issue on GitHub or contact through the website's contact form.

---

**Built with ❤️ for traditional Indian woodworking artisans**

