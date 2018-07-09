import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid
} from 'semantic-ui-react'

class SportsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid padded relaxed>
        <Grid.Row textAlign={"center"}>
          <div>NHL Scores <Link to={"/nhl/ANA"}>here</Link></div>
        </Grid.Row>
        <Grid.Row textAlign={"center"}>
          <div>NFL Scores</div>
        </Grid.Row>
        <Grid.Row textAlign={"center"}>
          <div>MLB Scores</div>
        </Grid.Row>
      </Grid>
    )
  }
}

export default SportsPage
