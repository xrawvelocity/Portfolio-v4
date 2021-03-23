import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'
import '../../styles/examples.css'
import Flex from '../flex/Flex'
import { portfolios, projects } from '../../data/projects'
import Title from '../title/Title'

export default function Examples() {
  const showCards = arr => {
    return arr.map(each => {
      return (
        <Grid item xs={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                style={{ height: '250px' }}
                image={each.image}
                title={each.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {each.name}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                  {each.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => window.open(each.url, '_blank')}
                size="large"
                color="primary"
              >
                <Typography variant="h5">Visit</Typography>
              </Button>
              <Button size="large" color="primary">
                {/* gotta show a modal on click of this that has information like features, time it took to build, if client requested specific design */}
                <Typography variant="h5">Learn More</Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })
  }

  return (
    <section id="examples">
      <Flex direction="column">
        <Title>here are some examples</Title>
        <Grid container spacing={3}>
          {showCards(portfolios)}
        </Grid>
      </Flex>
      {/* <Flex direction="column">
        <Typography
          style={{ margin: '10rem 0 5rem' }}
          align="center"
          variant="h3"
        >
          Personal Projects
        </Typography>
        <Grid container spacing={3}>
          {showCards(projects)}
        </Grid>
      </Flex> */}
    </section>
  )
}
