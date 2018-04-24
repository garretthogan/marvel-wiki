import React, { Component } from 'react';
import HeroCard from './components/HeroCard';
import {getCharacters} from './api/marvel';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment, Button, Overlay, Card, Elevation} from '@blueprintjs/core';

import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedHero: false,
      isOpen: false,
    };
  }
  componentDidMount() {
    getCharacters().then(characters => {
      this.setState({characters})
    });
  }
  selectHero = (index) => {
    console.log(this.state.characters[0]);
    this.setState({selectedHero: this.state.characters[0]});
    this.toggleOverlay();
  }
  toggleOverlay = () => {
    this.setState((prevState) => ({
      selectedHero: false,
      isOpen: !prevState.isOpen,
    }));
  }
  render() {
    return (
      <div className="app">
        <Navbar className="navbar">
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Marvel Wiki</NavbarHeading>
            <NavbarDivider />
            <Button className="pt-minimal" icon="home" text="Home" />
          </NavbarGroup>
        </Navbar>
        <div className="hero-cards-container">
          {
            this.state.characters && this.state.characters.map((c, i) => (<HeroCard onClick={this.selectHero} key={i} {...c} className="hero-card" />))
          }
        </div>
        <div >
          {this.state.characters.length > 0 &&
          <Overlay className="hero-info" isOpen={this.state.isOpen} onClose={this.toggleOverlay}>
            <Card className="hero-overlay-card" interactive={true} elevation={Elevation.TWO}>
              <h5 className="hero-name"><a>{this.state.characters[1].name}</a></h5>
              <p>{this.state.characters[1].description}</p>
              <Button onClick={this.toggleOverlay}>Exit</Button>
            </Card>
          </Overlay>}
        </div>
      </div>
    );
  }
}

export default App;
