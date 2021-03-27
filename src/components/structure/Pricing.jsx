import { Box, Slider, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Flex from '../flex/Flex'

const CustomSlider = withStyles({
  root: {
    color: '#fd3',
    height: 8,
    marginLeft: '5rem',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fd3',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
    fontSize: '1.6rem',
    color: '#111',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

export default function Pricing() {
  const [pages, setPages] = useState(1)
  const [design, setDesign] = useState(1)

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
      <Flex alignItems="center">
        <Typography variant="h4" id="discrete-slider" gutterBottom>
          Pages: {pages}
        </Typography>
        <CustomSlider
          defaultValue={1}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          min={1}
          max={10}
          onChange={(e, val) => setPages(val)}
        />
      </Flex>
      <Flex alignItems="center">
        <Typography variant="h4" id="discrete-slider" gutterBottom>
          Design: {design}
        </Typography>
        <CustomSlider
          defaultValue={1}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          valueLabelFormat={val => {
            if (val === 1) {
              return (
                <Box>
                  <Typography variant="h5">No Design Needed</Typography>
                </Box>
              )
            } else if (val === 2) {
              return (
                <Box>
                  <Typography variant="h5">Simple Yet Attractive</Typography>
                </Box>
              )
            } else if (val === 3) {
              return (
                <Box>
                  <Typography variant="h5">Detailed Design</Typography>
                </Box>
              )
            } else if (val === 4) {
              return (
                <Box>
                  <Typography variant="h5">High-End</Typography>
                </Box>
              )
            }
          }}
          step={1}
          min={1}
          marks
          max={4}
          onChange={(e, val) => setDesign(val)}
        />
      </Flex>
    </section>
  )
}
