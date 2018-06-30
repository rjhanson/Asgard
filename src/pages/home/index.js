import React from 'react'

import {
  Grid,
  Header
} from 'semantic-ui-react'

const Home = () => {
  return (
    <Grid inverted relaxed padded stackable centered>
      <Grid.Row streched color={'violet'}>
        <Header as="h1" textAlign="center">Welcome to russelljhanson.com!</Header>
      </Grid.Row>
    </Grid>
  )
}

export default Home
