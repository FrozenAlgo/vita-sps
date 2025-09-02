# 📖 React Website – SPS Vita (Intern Task)

## 🔹 Project Overview

This project is a **React-based rebuild** of the website:  
👉 [https://vita.spsnet.com/csm-vita/](https://vita.spsnet.com/csm-vita/)

The goal was to apply **React fundamentals, SEO techniques, and security best practices** while meeting the client’s requirement of showing **maximum content in the first view**:

- Navbar
- Banner
- Pricing
- Marquee
- Compliance
- Partners

---

## 🔹 React Concepts Implemented

- **Components:** (Navbar, Banner, Pricing, Marquee, Compliance, Partners, Footer)
- **Props:** Passing data such as pricing info and partner logos
- **State & Hooks:** Used `useState` and `useEffect` (e.g., toggle menu, feature animations)
- **Routing:** Implemented page navigation with React Router (`Home`, `About`)
- **Reusable Components:** Modular structure to avoid duplication

---

## 🔹 SEO Techniques Implemented

- Added **meta title & description** for each page with `react-helmet`
- Used **semantic HTML5** (`<header>`, `<main>`, `<section>`, `<footer>`)
- Proper **heading hierarchy** (`H1 → H2 → H3`)
- Added **alt text** for all images
- Configured **robots.txt** and **sitemap.xml** in `public/`
- Added **Open Graph (OG) tags** for social media sharing
- Added **Twitter Card tags** for better preview on Twitter/X
- Optimized images & enabled **lazy loading**
- Improved **page speed performance**

---

## 🔹 Security Best Practices Implemented

- Enforced **HTTPS links only**
- Applied **Content Security Policy (CSP)** via meta tags
- Set security headers:
  - Strict-Transport-Security (HSTS)
  - X-Content-Type-Options
  - X-Frame-Options
  - Permissions-Policy
- Prevented **XSS** by sanitizing inputs (where applicable)
- Avoided exposing **sensitive data** in frontend code
- Validated all **user inputs** in forms

---

## 🔹 Folder Structure

📦 vita-sps
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 README.md
├── 📁 node_modules
├── 📁 public
│ ├── 📄 robots.txt
│ ├── 📄 sitemap.xml
│ └── 📄 vite.svg
├── 📁 src
│ ├── 📄 App.css
│ ├── 📄 App.jsx
│ ├── 📄 index.css
│ ├── 📄 main.jsx
│ ├── 📁 assets
│ │ ├── 📁 icons
│ │ ├── 📁 images
│ │ │ ├── banner.png
│ │ │ ├── logo-small.png
│ │ │ ├── logo.png
│ │ │ └── react.svg
│ │ └── 📁 screenshots
│ │ ├── about.jpg
│ │ └── home.jpg
│ ├── 📁 components
│ │ ├── Banner.jsx
│ │ ├── Compliance.jsx
│ │ ├── Footer.jsx
│ │ ├── Marquee.jsx
│ │ ├── Navbar.jsx
│ │ ├── Partners.jsx
│ │ └── Pricing.jsx
│ └── 📁 pages
│ ├── About.jsx
│ └── Home.jsx
