import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Skills } from './Skills'
import { Contact } from './Contact'

export const Homepage = () => {
  return (
    <div>
      <section id="home">
        <Home />
        {/* Content for Home Section */}
      </section>

      <section id="about">
        <About />
        {/* Content for About Section */}
      </section>

      <section id="skills">
        <Skills />
        {/* Content for Services Section */}
      </section>

      <section id="contact">
    <Contact />
        {/* Content for Contact Section */}
      </section>
    </div>
  )
}
