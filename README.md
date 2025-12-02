# AI-Powered Resume Analyzer

A small, client-side React + Vite app that analyzes resumes using the Google Generative API (Gemini). Upload a PDF or paste text, select job roles and experience, and get an ATS-style scoring and role-specific suggestions.

- React + Vite SPA
- Tailwind CSS for styling
- PDF text extraction via `pdfjs-dist`
- Role selection with `react-select`
- Calls Google Generative API from client (replace with a backend proxy for production)

Demo pages:
- Home: [src/pages/Home.jsx](src/pages/Home.jsx)
- About: [src/pages/About.jsx](src/pages/About.jsx)

Key files & symbols
- App entry:
  - [index.html](index.html)
  - [src/main.jsx](src/main.jsx)
  - [src/App.jsx](src/App.jsx)
- UI & pages:
  - Main page: [src/pages/Home.jsx](src/pages/Home.jsx)
  - About page: [src/pages/About.jsx](src/pages/About.jsx)
  - Navbar: [src/components/Navbar.jsx](src/components/Navbar.jsx)
  - Footer: [src/components/Footer.jsx](src/components/Footer.jsx)
- Resume UI & logic:
  - Main flow: [`ResumeSection`](src/components/ResumeSection.jsx)
  - Role selection: [`JobRoleSelect`](src/components/JobRoleSelect.jsx)
  - Result UI: [`ResumeResultCard`](src/components/ResumeResultCard.jsx)
  - Loader: [`Loader`](src/components/common/Loader.jsx)
- Utilities:
  - PDF text extractor: [`extractTextFromPdf`](src/utils/extractPdfText.js)
- Config & scripts:
  - Vite config: [vite.config.js](vite.config.js)
  - ESLint: [eslint.config.js](eslint.config.js)
  - Package manifest: [package.json](package.json)
  - Environment: [.env](.env)

Getting started

Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm or yarn

Install
```bash
npm install
```
