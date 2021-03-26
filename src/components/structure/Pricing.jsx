import { Slider, Typography } from '@material-ui/core'
import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing">
      <Typography align="center" className="title" variant="h3">
        "so... how much is it?"{' '}
        <a
          href="https://www.webfx.com/website-design-pricing.html#calculator"
          target="_blank"
          rel="noopener"
        >
          Heres an example of what i want to do here
        </a>
      </Typography>
      <Typography variant="h4" id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </section>
  )
}
