# Recommendo Client

A modern React-based recommendation application built with Vite, featuring beautiful UI components and smooth animations.

## 🚀 Features

- **Modern React 19**: Built with the latest React version for optimal performance
- **Beautiful UI**: Styled with Tailwind CSS and DaisyUI components
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Firebase Integration**: Backend services powered by Firebase
- **Responsive Design**: Mobile-first responsive design approach
- **Interactive Elements**: Rich UI components including slideshows, marquees, and tooltips

## 📦 Tech Stack

### Core
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and dev server
- **React Router 7.6.2** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1.8** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Beautiful component library
- **Framer Motion 12.16.0** - Production-ready motion library

### Additional Libraries
- **Firebase 11.9.0** - Backend services
- **Axios 1.9.0** - HTTP client
- **React Icons 5.5.0** - Icon library
- **SweetAlert2 11.22.0** - Beautiful alerts
- **Typewriter Effect 2.22.0** - Typing animations
- **React Fast Marquee 1.6.5** - Scrolling text component
- **React Slideshow Image 4.3.2** - Image carousel
- **React Tooltip 5.29.0** - Interactive tooltips

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recommendo-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Firebase configuration and other required environment variables.

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable required services (Authentication, Firestore, etc.)
3. Copy your config object to your environment variables

### Environment Variables
Create a `.env.local` file with:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🎨 Styling

This project uses Tailwind CSS with DaisyUI for component styling. The design system includes:

- **Color Palette**: Customizable theme colors via DaisyUI
- **Typography**: Responsive typography scales
- **Components**: Pre-built UI components from DaisyUI
- **Animations**: Smooth transitions with Framer Motion

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🧪 Development Guidelines

### Code Style
- Follow ESLint configuration
- Implement responsive design patterns
- Write clean, maintainable code

### Component Structure
```jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto p-4"
    >
      {/* Component content */}
    </motion.div>
  );
};

export default ComponentName;
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source project.

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**Firebase Connection Issues**
- Verify environment variables are correctly set
- Check Firebase project configuration
- Ensure required Firebase services are enabled

**Styling Issues**
- Verify Tailwind CSS is properly configured
- Check DaisyUI theme settings
- Ensure CSS imports are correct

**Happy Coding! 🎉**