import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import {
  Header,
  Menu,
  Segment
} from 'semantic-ui-react'

class AppHeader extends React.Component {
  render() {
    const childCount = React.Children.count(this.props.children)
    const path = this.props.location.pathname
    return (
      <Segment vertical inverted padded size={'huge'} textAlign="center">
        <Header as={"h1"} color={"violet"}>Russell J Hanson</Header>
        <Menu secondary pointing stackable widths={childCount} color={'violet'}>
          {
            React.Children.map(this.props.children, (child, idx) => {
              const active = path == child.props.url
              return React.cloneElement(child, { active })
            })
          }
        </Menu>
      </Segment>
    )
  }
}

class AppHeaderItem extends React.Component {
  render() {
    if (this.props.active) {
      return (
        <Menu.Item name={this.props.text} active={true} link />
      )
    } else {
      return (
        <Menu.Item>
          <Link to={this.props.url}>{this.props.text}</Link>
        </Menu.Item>
      )
    }
  }
}

AppHeaderItem.propTypes = {
    active: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

AppHeader.Item = AppHeaderItem

export default withRouter(AppHeader)
