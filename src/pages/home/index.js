import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Header,
  Menu,
  Segment,
} from 'semantic-ui-react'

const Home = () => {
  return (
    <React.Fragment>
      <Grid inverted relaxed padded stackable centered>
        <Grid.Row stretched color={'violet'}>
          <Header as="h1" textAlign="center">Welcome to russelljhanson.com!</Header>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default Home
