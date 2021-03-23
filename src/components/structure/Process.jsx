import { Typography } from '@material-ui/core'
import React from 'react'
import Flex from '../flex/Flex'
import CustomizedTimeline from '../timeline/CustomTimeline'
import Title from '../title/Title'

export default function Process() {
  return (
    <section id="process">
      <Flex direction="column">
        <Title>pros have a process</Title>
        {/* i have a process to my craft. first we talk about you, we understand
        your needs and only then will you recieve an estimate. every website has
        different needs. */}
        <CustomizedTimeline />
      </Flex>
    </section>
  )
}
