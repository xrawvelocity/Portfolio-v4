import React, { useState } from 'react'
import './../../styles/navigation.css'

const Navigation = () => {
  const [active, setActive] = useState(false)
  const [close, setClose] = useState(false)

  return (
    <nav className="navigation">
      <a
        onClick={() => {
          setActive(false)
          setClose(true)
        }}
        href="#top"
        className="navigation-logo"
      >
        <h1 className="navigation-logo_text">Vic Dev</h1>
      </a>
      <div className="navigation-links">
        <a href="#examples" className={`navigation-links_projects`}>
          examples
        </a>
        <a href="#process" className={`navigation-links_about`}>
          process
        </a>
        <a href="#pricing" className={`navigation-links_reviews`}>
          pricing
        </a>
        <a href="#contact" className={`navigation-links_contact`}>
          contact
        </a>
        <a href="#questions" className={`navigation-links_questions`}>
          questions
        </a>
      </div>
      <div
        onClick={async () => {
          await setActive(prev => !prev)
          setClose(active)
        }}
        className={!active ? 'hamburger' : 'hamburger_open'}
      >
        <span
          className={!active ? 'hamburger-one' : 'hamburger-one_open'}
        ></span>
        <span
          className={!active ? 'hamburger-two' : 'hamburger-two_open'}
        ></span>
        <span
          className={!active ? 'hamburger-three' : 'hamburger-three_open'}
        ></span>
      </div>
      <div
        className={
          !active
            ? `navigation-hamburger ${
                close ? 'navigation-hamburger_close' : ''
              }`
            : 'navigation-hamburger_active'
        }
      >
        <a
          onClick={() => {
            setActive(false)
            setClose(true)
          }}
          href="#services"
          className="navigation-hamburger_projects"
        >
          Services
        </a>
        <a
          onClick={() => {
            setActive(false)
            setClose(true)
          }}
          href="#about"
          className="navigation-hamburger_about"
        >
          About
        </a>
        <a
          onClick={() => {
            setActive(false)
            setClose(true)
          }}
          href="#reviews"
          className="navigation-hamburger_reviews"
        >
          Reviews
        </a>
        <a
          onClick={() => {
            setActive(false)
            setClose(true)
          }}
          href="#contact"
          className="navigation-hamburger_contact"
        >
          Contact
        </a>
        <a
          onClick={() => {
            setActive(false)
            setClose(true)
          }}
          href="#questions"
          className="navigation-hamburger_questions"
        >
          Questions
        </a>
      </div>
    </nav>
  )
}

export default Navigation
