import { Typography } from '@material-ui/core'
import React from 'react'

export default function Title({ children }) {
  return (
    <Typography style={{ margin: '0 0 5rem 0' }} align="center" variant="h3">
      {children}
    </Typography>
  )
}
