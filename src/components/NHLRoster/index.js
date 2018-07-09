import React from 'react'
import PropTypes from 'prop-types'
import {
  Table
} from 'semantic-ui-react'
import xhr from 'xhr'

class NHLRoster extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rosterData: []
    }
  }

  componentDidMount() {
    xhr({
      method: 'GET',
      body: JSON.stringify({id: this.props.teamId}),
      uri: "/api/v1/roster/" + this.props.teamId,
      json: true,
    }, (err, resp, body) => {
      console.log(resp)
      console.log(body)
      this.setState({
        rosterData: body,
      })
    })
  }

  render() {
    const rows = this.state.rosterData.map((player) => {
      return (
        <Table.Row key={player.person.id}>
          <Table.Cell>{player.person.fullName}</Table.Cell>
          <Table.Cell>{player.jerseyNumber}</Table.Cell>
          <Table.Cell>{player.position.abbreviation}</Table.Cell>
        </Table.Row>
      )
    })
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={3} textAlign={'center'}>Roster</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>Pos</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    )
  }
}

NHLRoster.propTypes = {
  teamId: PropTypes.number.isRequired
}

export default NHLRoster
