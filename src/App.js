// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>
          Ernest Muchiri — Full Stack Developer | React, Node.js, Cloud
        </title>
        <meta
          name="description"
          content="Ernest Muchiri — Full Stack Developer building modern applications with React, Node.js, and cloud technologies."
        />
        <meta
          name="keywords"
          content="Ernest Muchiri, Full Stack Developer, React Developer, Node.js Developer, Web Developer, portfolio, GitHub Pages"
        />
        <meta name="author" content="Ernest Muchiri" />
        <meta
          property="og:title"
          content="Ernest Muchiri — Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Full Stack Developer creating modern React and Node.js applications. Explore projects, skills and experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://263nest.github.io/clay-mustard" />
        <meta
          property="og:site_name"
          content="Ernest Muchiri Portfolio"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@263nest" />
        <meta name="twitter:creator" content="@263nest" />
        <meta
          name="twitter:title"
          content="Ernest Muchiri — Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer creating modern React and Node.js applications. View my portfolio."
        />
        <link rel="canonical" href="https://263nest.github.io/clay-mustard" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ernest Muchiri",
            "url": "https://263nest.github.io/clay-mustard",
            "sameAs": [
              "https://github.com/263nest"
            ],
            "jobTitle": "Full Stack Developer",
            "knowsAbout": ["React", "Node.js", "JavaScript", "TypeScript", "Cloud", "Web Development"],
            "description": "Full Stack Developer building modern applications using React, Node.js, and cloud technologies."
          }
        `}</script>
        {/* Structured Data: WebSite (for sitelinks search box) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ernest Muchiri Portfolio",
            "url": "https://263nest.github.io/clay-mustard",
            "description": "Portfolio of Ernest Muchiri — Full Stack Developer specializing in React, Node.js, and cloud technologies."
          }
        `}</script>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense
          fallback={
            <div className="container py-16">
              <SkeletonGrid count={6} />
            </div>
          }>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;