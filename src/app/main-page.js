// src/app/main-page.js
'use client';

import Hero from './components/Hero'
import Features from './components/Features'
// import any future sections here, e.g.
// import Services from './components/Services'
// import Contact from './components/Contact'

export default function MainPage() {
  return (
    <main className="pt-16 overflow-x-hidden">
      <Hero />
      <Features />
      {/* <Services /> */}
      {/* <Contact /> */}
    </main>
  )
}
