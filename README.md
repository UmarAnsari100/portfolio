# Modern Portfolio Website

A complete, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features stunning animations, 3D elements, and a responsive design.

## 🚀 Features

- **Preloader Animation**: Smooth loading experience with progress indicator
- **Anime-style Navigation**: Fixed navbar with smooth scrolling and active states
- **3D Hero Section**: Interactive Spline 3D scene with centered, responsive robot
- **Vapor Text Effect**: Animated text cycling with particle effects
- **Blur Text Animations**: Smooth reveal animations for content sections
- **Orbiting Skills**: Interactive skill icons orbiting around a central element
- **Evervault Cards**: Hover-activated encrypted text effect for projects
- **Magnetic Buttons**: Interactive buttons with magnetic hover effects
- **Glowing Effects**: Dynamic glow effects that follow mouse movement
- **Spotlight Effects**: Animated spotlight backgrounds
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Automatic theme detection and switching

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Spline
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/sections/Hero.tsx` - Hero section content
- `src/components/sections/About.tsx` - About section content
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Skills.tsx` - Your skills
- `src/app/layout.tsx` - Page metadata

### 3D Robot Scene
Replace the Spline scene URL in `src/components/sections/Hero.tsx`:
```tsx
<SplineScene 
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Colors and Styling
Customize the color scheme in `src/app/globals.css` by modifying the CSS custom properties:
```css
:root {
  --primary: your-primary-color;
  --background: your-background-color;
  /* ... other colors */
}
```

### Skills in Orbiting Component
Update the skills array in `src/components/ui/orbiting-skills.tsx`:
```tsx
const skills = [
  { name: 'Your Skill', icon: '🚀', radius: 120, duration: 20 },
  // ... add your skills
]
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

The robot in the hero section is specifically optimized to be centered on all screen sizes.

## 🎭 Animations

### Preloader
- Progress bar animation
- Fade out transition
- Loading dots animation

### Navigation
- Slide in from top
- Active tab indicator
- Smooth scrolling to sections

### Text Effects
- Vapor text cycling with particle effects
- Blur text reveal animations
- Typewriter effects

### Interactive Elements
- Magnetic button hover effects
- Glowing borders on mouse proximity
- Orbiting skill animations
- Evervault card hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── preloader.tsx
│   │   ├── anime-navbar.tsx
│   │   ├── splite.tsx
│   │   ├── vapour-text-effect.tsx
│   │   ├── animated-blur-text.tsx
│   │   ├── orbiting-skills.tsx
│   │   ├── evervault-card.tsx
│   │   ├── magnetic-button.tsx
│   │   ├── glowing-effect.tsx
│   │   ├── spotlight.tsx
│   │   ├── card.tsx
│   │   └── footer-section.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
└── lib/
    └── utils.ts
```

## 🎯 Performance

- **Lazy Loading**: 3D scenes and heavy components are lazy loaded
- **Optimized Animations**: Framer Motion with performance optimizations
- **Responsive Images**: Optimized for different screen sizes
- **Code Splitting**: Automatic code splitting with Next.js

## 🐛 Troubleshooting

### 3D Scene Not Loading
- Check your Spline scene URL
- Ensure you have a stable internet connection
- Verify the scene is publicly accessible

### Animations Not Working
- Ensure Framer Motion is properly installed
- Check for JavaScript errors in the console
- Verify Tailwind CSS is properly configured

### Styling Issues
- Make sure Tailwind CSS is properly installed
- Check that all CSS custom properties are defined
- Verify the build process completed successfully

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ and Next.js**