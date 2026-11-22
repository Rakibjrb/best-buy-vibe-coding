# Best Buy - Modern E-Commerce Web Application

A modern, responsive e-commerce web application built with **React 19**, **Vite**, **Tailwind CSS v4**, **React Router v7** (object-based routing), and **React Icons**. 

---

## 🌟 Key Features

- **Object-Based Routing**: Clean and modular routing configured with `createBrowserRouter` and `RouterProvider`.
- **Swiper Hero Slider**: Interactive, auto-playing hero banner featuring top product drops and promotions with fade transitions.
- **Top Categories**: Browse products across curated categories (Laptops, Smart Electronics, Audio, Wearables, Gaming, Accessories).
- **Featured & Top Products**: Trending best sellers with a dedicated "More Products" call-to-action leading to the full catalog.
- **Product Filter & Search**:
  - Live search by product name and category.
  - Sticky sidebar filter on desktop while scrolling.
  - Multi-attribute filtering by category, price range slider, and minimum star rating.
  - Dynamic sorting (Featured, Price: Low to High, Price: High to Low, Top Rated).
- **Product Details Page**:
  - Image preview with thumbnail selector.
  - Detailed product information, price with discount calculations, stock indicators, and quantity picker.
  - Technical specifications and feature highlights.
  - Contextual related product recommendations.
- **Coupons & Newsletter**:
  - Interactive coupon section with one-click code copying to clipboard.
  - Newsletter subscription form with visual confirmation.
- **Contact & Support**:
  - Comprehensive contact form with submission feedback.
  - Location, telephone, operating hours, and customer service details.
  - Frequently Asked Questions (FAQ) section.
- **Iconography**: 100% strictly using `react-icons` (zero raw SVGs).

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **Carousel / Slider**: [Swiper](https://swiperjs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Code Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── MainLayout/
│   │   └── MainLayout.jsx        # App wrapper with Navbar, Footer, <Outlet />, and ScrollToTop
│   ├── shared/
│   │   ├── Navbar.jsx            # Desktop & mobile responsive navbar with search and action icons
│   │   └── Footer.jsx            # Multi-column footer with social links & store policies
│   └── ui/
│       ├── Badge.jsx             # Reusable status badges
│       ├── Button.jsx            # Reusable button with variants & sizes
│       ├── ProductCard.jsx       # Reusable card with image, badges, rating, and actions
│       └── Rating.jsx            # Star rating component with react-icons
├── data/
│   └── products.js               # Mock dataset: 20 products, categories, coupons & hero slides
├── pages/
│   ├── home/
│   │   ├── HomePage.jsx
│   │   └── _components/
│   │       ├── Hero.jsx          # Swiper hero carousel + trust badge strip
│   │       ├── TopCategories.jsx # Department cards with item counts
│   │       ├── TopProducts.jsx   # Top 8 best sellers + "More Products" button
│   │       ├── CouponSection.jsx # Promo codes with copy button
│   │       └── Newsletter.jsx    # Email subscription form
│   ├── products/
│   │   ├── ProductsPage.jsx
│   │   ├── _components/
│   │   │   ├── ProductFilter.jsx     # Sticky category, price range, and rating filters
│   │   │   ├── ProductGrid.jsx       # Responsive grid with empty state handling
│   │   │   └── ProductSearchSort.jsx # Search bar and sorting select
│   │   └── [id]/
│   │       ├── ProductDetailsPage.jsx
│   │       └── _components/
│   │           ├── ProductGallery.jsx  # Image view with thumbnails
│   │           ├── ProductInfo.jsx     # Pricing, stock, quantity, add-to-cart
│   │           ├── ProductSpecs.jsx    # Specifications list
│   │           └── RelatedProducts.jsx # Same-category recommendations
│   ├── contact/
│   │   ├── ContactPage.jsx
│   │   └── _components/
│   │       ├── ContactFAQ.jsx    # Quick FAQ cards
│   │       ├── ContactForm.jsx   # Contact form with submit feedback
│   │       └── ContactInfo.jsx   # Branch addresses, phone, emails, and hours
│   └── NotFoundPage.jsx          # 404 fallback page
├── routes/
│   └── routes.jsx                # createBrowserRouter object-based route definitions
├── App.jsx                       # RouterProvider mount point
├── main.jsx                      # Application entry point
└── index.css                     # Tailwind CSS v4 styling
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ or later) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rakibjrb/best-buy-vibe-coding.git
   cd best-buy-vibe-coding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

---

## 📜 Available Scripts

- `npm run dev` - Launches the Vite development server with Hot Module Replacement (HMR).
- `npm run build` - Builds the application for production into the `dist/` directory.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs Oxlint to inspect and maintain code quality.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
