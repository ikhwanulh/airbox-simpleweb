# Air Box Teknologi - Simple Website

A modern, responsive website for Air Box Teknologi built with pure HTML, CSS, and JavaScript.

## Features

✅ **Complete Website Implementation**
- Professional homepage with hero section
- Interactive consultation section with embedded Cekat.ai chatbot
- Products showcase with 4 main solutions
- Clients section with company logos
- Contact form with validation
- Team page with business and tech experts
- Privacy policy page with bilingual content (English/Indonesian)

✅ **Modern Design**
- Responsive mobile-first design
- Blue IT-themed color scheme
- Smooth animations and transitions
- Professional typography and spacing
- Interactive elements and hover effects

✅ **Technical Features**
- Pure HTML5, CSS3, and vanilla JavaScript
- No external dependencies except Font Awesome icons
- Cross-browser compatible
- SEO optimized with meta tags
- Accessible design with ARIA labels
- Mobile-responsive navigation

## File Structure

```
simple-website/
├── index.html              # Main homepage
├── team.html              # Team members page
├── privacy-policy.html    # Privacy policy page
├── css/
│   └── styles.css         # All styles in one file
├── js/
│   └── main.js           # All JavaScript functionality
├── images/
│   └── attached_assets/   # Client logos and company images
├── server.py             # Simple Python server for local development
└── README.md            # This file
```

## How to Run

### Option 1: Python Server (Recommended)
```bash
cd simple-website
python server.py
```
Then open your browser to `http://localhost:8080`

### Option 2: Any Web Server
You can serve the files using any web server:

- **Node.js**: `npx serve .`
- **PHP**: `php -S localhost:8080`
- **Live Server**: Use VS Code Live Server extension

### Option 3: Direct File Access
Open `index.html` directly in your browser (some features may not work due to CORS restrictions)

## Pages Overview

### Homepage (`index.html`)
- **Hero Section**: Company introduction with call-to-action buttons
- **Consultation Section**: Information about services + embedded Cekat.ai chatbot
- **Products Section**: Showcases 4 main products (Kurir Pintar, Kru Pintar, Jurnal Pintar, Interactive Dashboards)
- **Clients Section**: Animated carousel of client company logos
- **Contact Section**: Contact form and company information
- **Footer**: Links to other pages and company info

### Team Page (`team.html`)
- **Business Experts**: 3 team members with experience and expertise
- **Tech Experts**: 2 technical team members
- **Contact Modal**: Popup form when clicking "Get in Touch"

### Privacy Policy (`privacy-policy.html`)
- Complete privacy policy content in English and Indonesian
- Professional formatting with sections and subsections
- Contact information for privacy inquiries

## Key Features Implemented

### 1. Client Logos Integration
- Uses actual uploaded company logos
- Smooth infinite scroll animation
- Responsive image sizing

### 2. Chatbot Integration
- Embedded Cekat.ai chatbot with access key: `ARSA-nSF62ScG`
- Direct iframe integration for reliability
- Responsive container design

### 3. Contact Forms
- Main contact form on homepage
- Modal popup form on team page
- Form validation and submission handling
- Success/error notifications

### 4. Mobile Responsive
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Touch-friendly interactive elements
- Optimized for all screen sizes

### 5. Smooth Animations
- CSS transitions and animations
- Intersection Observer for scroll animations
- Modal slide-in effects
- Hover animations on cards

## Customization

### Colors
The website uses a blue IT theme. Main colors can be changed in `css/styles.css`:
- Primary Blue: `#3b82f6`
- Dark Blue: `#1d4ed8`
- Background: `#f8fafc`
- Text: `#1e293b`

### Content
- Edit HTML files directly to change text content
- Replace images in `images/attached_assets/` folder
- Update contact information in contact sections

### Styling
All styles are in `css/styles.css` organized by sections:
- Reset and base styles
- Navigation
- Hero section
- Individual page sections
- Responsive media queries

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized images
- Minimal external dependencies
- Efficient CSS animations
- Fast loading times

## Contact Integration
The website includes:
- Cekat.ai chatbot integration
- Contact forms with validation
- Company contact information
- Social links ready for addition

This simple version maintains all the functionality of the original React version while being easily deployable and customizable.