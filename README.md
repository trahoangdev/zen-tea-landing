# Zen Tea Landing Page

A beautiful, modern landing page for Vietnamese tea culture with Zen-inspired design. Built with React, TypeScript, and Tailwind CSS.

## 🍃 About

Zen Tea is a landing page showcasing Vietnamese tea culture through a modern, minimalist lens. The design combines traditional tea ceremony aesthetics with contemporary web design principles, creating a serene and elegant user experience.

**Live Demo**: [https://zen-tea-landing.netlify.app](https://zen-tea-landing.netlify.app)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/trahoangdev/zen-tea-landing.git
cd zen-tea-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Radix UI** - Accessible components
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Products.tsx    # Products showcase
│   ├── Philosophy.tsx  # Philosophy section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Footer.tsx      # Footer
│   └── ui/            # shadcn/ui components
├── pages/              # Page components
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Entry point
```

## 🎯 Features

- **🌙 Dark/Light Mode** - Toggle between themes with smooth transitions
- **📱 Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **✨ Smooth Animations** - Fade-in effects, hover animations, and transitions
- **🎨 Modern UI/UX** - Clean, minimalist Zen-inspired design
- **♿ Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- **🔒 Type Safety** - Full TypeScript support with strict type checking
- **⚡ Performance** - Optimized with Vite, lazy loading, and code splitting
- **🎯 SEO Optimized** - Meta tags, structured data, and semantic HTML
- **🔗 Smooth Navigation** - One-page navigation with smooth scrolling
- **🎭 Interactive Elements** - Hover effects, click animations, and micro-interactions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Deploy to Netlify

1. **Connect GitHub Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select `zen-tea-landing` repository

2. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

3. **Deploy**: Click "Deploy site"

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure redirects for SPA routing

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
zen-tea-landing/
├── public/                 # Static assets
│   ├── zentea-logo.png    # Logo
│   └── _redirects         # SPA redirects
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Products.tsx  # Products showcase
│   │   ├── Philosophy.tsx # Philosophy section
│   │   ├── Testimonials.tsx # Testimonials
│   │   ├── Footer.tsx    # Footer
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── BackToTop.tsx # Back to top button
│   │   ├── ThemeToggle.tsx # Dark/Light mode toggle
│   │   └── ui/           # shadcn/ui components
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── types/            # TypeScript types
│   │   └── theme.ts      # Theme types
│   ├── pages/            # Page components
│   ├── assets/           # Images and static files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── main.tsx          # Entry point
├── netlify.toml          # Netlify configuration
├── .eslintrc.json        # ESLint configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Matcha Green (`hsl(140 35% 45%)`)
- **Background**: Warm Milk White (`hsl(42 25% 94%)`)
- **Accent**: Soft Sage (`hsl(130 20% 85%)`)
- **Text**: Natural Stone (`hsl(30 15% 25%)`)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- **Fade In**: Smooth entrance animations
- **Hover Effects**: Interactive feedback
- **Smooth Scroll**: Navigation transitions

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Design from ♥️ by [trahoangdev](https://github.com/trahoangdev)**

---

⭐ **Star this repository if you found it helpful!**
