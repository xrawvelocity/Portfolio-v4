import { Button, Typography } from '@material-ui/core'
import React from 'react'
import Flex from '../flex/Flex'
import UndrawDesigner from '../UndrawDesigner/UndrawDesigner'

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import Navigation from './Navigation'

export default function Hero() {
  return (
    <section id="top">
      <Navigation />
      <Flex justifyContent="space-between" alignItems="center" height="65vh">
        <div className="hero-left">
          <Typography style={{ marginBottom: '3rem' }} variant="h3">
            need a <i className="custom">custom</i> website?
          </Typography>
          <Typography variant="h4">
            my name is Victor Fernandez, i am a software engineer with over 5
            years of experience
          </Typography>
          <Typography style={{ marginTop: '1rem' }} variant="h4">
            i ❤️ to help people bring their businesses online with a clean,
            user-oriented design that converts visitors to customers
          </Typography>
          <Button
            variant="contained"
            style={{ fontSize: '1.6rem', marginTop: '5rem' }}
          >
            Contact Me
          </Button>
        </div>
        <div className="hero-right">
          <UndrawDesigner
            height="350px"
            accentColor="#65cd3d"
            skinColor="#e2bd95"
            hairColor="#111"
            primaryColor="#f7fff7"
          />
        </div>
      </Flex>
    </section>
  )
}
