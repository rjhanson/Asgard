import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Divider,
  Grid,
  Header,
  Menu,
} from 'semantic-ui-react'
import xhr from 'xhr'

import NHLRoster from '../../components/NHLRoster'


class NHLPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamData: null,
      teamDataError: false,
      isLoading: false,
    }
  }

  componentDidMount() {
    xhr({
      method: 'get',
      uri: "/api/v1/teams/" + this.props.match.params.team,
      json: true,
    }, (err, resp, body) => {
      const newState = {
        isLoading: false,
      }
      if (err) {
        newState.teamData = null
        newState.teamDataError = true
      } else {
        newState.teamData = body[0]
        newState.teamDataError = false
      }
      this.setState(newState)
    })
  }

  renderContent() {
    console.log(this.state.teamData)
    if (this.state.isLoading) {
      return (
        <div> Loading .... </div>
      )
    } else if (!this.state.teamData) {
      return (
        <div>No team data.</div>
      )
    } else {
      return (
        <Grid stackable padded relaxed centered>
          <Grid.Row>
            <Header as='h1' textAlign='center'>
              Schedule / Scores go here
            </Header>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column color='blue' width={10}>
              <NHLRoster teamId={24}/>
            </Grid.Column>

            <Grid.Column color='red' width={5}>
              Standings goes here
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }

  render() {
    return this.renderContent()
  }
}

export default NHLPage
