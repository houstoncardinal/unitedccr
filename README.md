# United CCR - Professional Commercial Services Website

A modern, professional website for United CCR, delivering premium construction, cleaning & maintenance, and restoration services for Texas businesses.

## 🚀 Features

### Professional Design
- **Clean, modern interface** with navy blue, white, and black color scheme
- **Responsive design** optimized for all devices
- **Professional typography** and spacing
- **Clean line icons** that match the primary accent color
- **Smooth animations** and hover effects

### Complete Service Pages
- **Homepage** with hero section and service overview
- **About page** with company information and values
- **Contact page** with forms and contact information
- **Disaster Restoration** main page
- **Individual service pages** for each restoration service:
  - Fire Damage Restoration
  - Water Damage Restoration
  - Storm Damage Restoration
  - Mold Remediation
  - Roofing Services
  - Construction Services
  - Cleaning Services

### Lead Generation Optimized
- **Multiple contact forms** throughout the site
- **Clear call-to-action buttons** with phone numbers
- **Professional contact information** prominently displayed
- **Service-specific landing pages** for targeted leads
- **SEO optimized** meta tags and content

### Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **React Router** for navigation
- **Responsive design** for all screen sizes
- **Fast loading** and optimized performance

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Homepage hero section
│   ├── Services.tsx    # Services overview
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── DisasterRestoration.tsx
│   └── disaster-restoration/  # Individual service pages
├── assets/             # Images and static files
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## 🎨 Design System

### Colors
- **Primary**: Navy Blue (#1e3a8a)
- **Secondary**: Light Gray (#f8fafc)
- **Accent**: White (#ffffff)
- **Text**: Dark Gray (#1f2937)

### Typography
- **Headings**: Bold, professional fonts
- **Body**: Clean, readable text
- **Buttons**: Clear, action-oriented text

### Components
- **Cards**: Clean, shadowed containers
- **Buttons**: Professional CTAs with hover effects
- **Forms**: User-friendly input fields
- **Navigation**: Clear, accessible menu structure

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd unitedccr

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages Overview

### Homepage (/)
- Hero section with main value proposition
- Services overview with clean icons
- About section with company values
- Contact section with lead capture form

### About Page (/about)
- Company mission and values
- Team information
- Service area details
- Professional credentials

### Contact Page (/contact)
- Contact information
- Lead capture form
- Service area details
- FAQ section

### Service Pages
Each service page includes:
- Detailed service description
- Process steps
- Why choose us section
- Contact CTAs

## 🔧 Customization

### Colors
Update colors in `src/index.css`:
```css
:root {
  --primary: 220 85% 20%;
  --primary-dark: 220 85% 15%;
  /* ... other color variables */
}
```

### Content
- Update company information in components
- Modify service descriptions in service pages
- Update contact information throughout the site

### Styling
- Modify Tailwind classes in components
- Update CSS variables in `src/index.css`
- Customize component styles in individual files

## 📈 SEO & Performance

### SEO Features
- **Meta tags** optimized for search engines
- **Structured data** for local business
- **Clean URLs** and navigation
- **Fast loading** times
- **Mobile-friendly** design

### Performance Optimizations
- **Optimized images** and assets
- **Minified CSS and JavaScript**
- **Efficient component structure**
- **Lazy loading** where appropriate

## 🎯 Lead Generation Features

### Contact Forms
- **Homepage contact form** in hero section
- **Service page contact forms**
- **Dedicated contact page** with comprehensive form
- **Phone number CTAs** throughout the site

### Call-to-Actions
- **Emergency response** buttons
- **Free estimate** requests
- **Service-specific** contact forms
- **Professional consultation** offers

## 🔒 Legal & Compliance

### Content Guidelines
- **Professional language** throughout
- **No misleading claims** or guarantees
- **Clear service descriptions**
- **Appropriate disclaimers** where needed

### Privacy & Terms
- **Privacy policy** link in footer
- **Terms of service** link in footer
- **Contact information** clearly displayed
- **Professional business practices**

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Vercel**: Connect repository for automatic deployment
- **Netlify**: Drag and drop dist folder
- **AWS S3**: Upload dist folder to S3 bucket
- **Traditional hosting**: Upload files to web server

## 📞 Support

For technical support or questions about the website:
- **Email**: [support-email]
- **Phone**: (832) 683-7433
- **Documentation**: See inline comments in code

## 📄 License

This project is proprietary software for United CCR. All rights reserved.

---

**United CCR** - Construct, Clean, Restore
*Premium commercial services for Texas businesses*
