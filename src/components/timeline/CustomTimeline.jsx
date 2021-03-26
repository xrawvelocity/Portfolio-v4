import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab'
import ForumIcon from '@material-ui/icons/Forum'
import DescriptionIcon from '@material-ui/icons/Description'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import RepeatIcon from '@material-ui/icons/Repeat'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import WebIcon from '@material-ui/icons/Web'
import LaunchIcon from '@material-ui/icons/Launch'
import GroupIcon from '@material-ui/icons/Group'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({}))

export default function CustomizedTimeline() {
  const classes = useStyles()

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <ForumIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Strategy
          </Typography>
          <Typography variant="h4">
            We figure out what problem we are trying to solve and what custom
            solution is needed.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <DescriptionIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Agreement
          </Typography>
          <Typography variant="h4">
            From invoices to deadlines, from features to design. We will sign a
            contract that clarifies all of this to protect all parties.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <WebIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Wireframes
          </Typography>
          <Typography variant="h4">
            General structure is shown to you for approval
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <LaptopMacIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Design and Development
          </Typography>
          <Typography variant="h4">
            In this time all i need from you is any resources like images or a
            logo, any other previous content also helps speed up development
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <RepeatIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Revision
          </Typography>
          <Typography variant="h4">
            Making a website is a collaborative effort, i will make sure you
            recieve a product you are satisfied with.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <LaunchIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Launch
          </Typography>
          <Typography variant="h4">
            Hosting amount included, only thing you have to pay is the domain
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ color: '#111', backgroundColor: '#fd3' }}>
            <GroupIcon style={{ fontSize: '24px' }} />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h3"
            style={{ marginBottom: '1rem' }}
            component="h1"
          >
            Support
          </Typography>
          <Typography variant="h4">
            If at any time there is an issue with the final version I will
            always be available if you reach out to the email provided in the
            contract.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
