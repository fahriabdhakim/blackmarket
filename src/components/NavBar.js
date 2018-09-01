import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid centered columns={1} padded>
        <Grid.Column>
      <Segment textAlign="center" inverted>
        <Menu inverted pointing secondary fluid={true}>
          <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Link to="/Shoes"><Menu.Item name='shoes' active={activeItem === 'shoes'} onClick={this.handleItemClick}/></Link>
          <Link to="/Clothes"><Menu.Item name='clothes' active={activeItem === 'clothes'} onClick={this.handleItemClick} /></Link>
          <Link to="/About">  <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/></Link>
        </Menu>
      </Segment>
      </Grid.Column>
      </Grid>
    )
  }
}
