# AURA Website

A modern, responsive web application for AURA, featuring adaptive UI personalization and research documentation.

## Features

- **Adaptive UI Research**: Documentation and presentations on ML-driven UI personalization.
- **Contact System**:
  - **Interactive Contact Form**: Powered by EmailJS for seamless email notifications.
  - **WhatsApp Integration**: Direct chat link for instant communication.
- **Modern Aesthetic**: Built with React, Vite, TailwindCSS, and DaisyUI for a premium dark-themed look.
- **SEO Optimized**: Dynamic meta tags and titles for every page.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: TailwindCSS, DaisyUI
- **Communication**: EmailJS, React Icons
- **Routing**: React Router 7

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd aura-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Deployment

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

---

Built with ❤️ by the AURA Team.
