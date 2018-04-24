import React, { Component } from 'react';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment} from '@blueprintjs/core';
import HeroGridContainer from './containers/HeroGridContainer';
import HeroOverlay from './components/HeroOverlay';

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
  selectHero = (selectedHero) => {
    this.setState({selectedHero});
    this.toggleOverlay();
  }
  toggleOverlay = () => {
    this.setState((prevState) => ({
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
          </NavbarGroup>
        </Navbar>
        <HeroGridContainer onSelectHero={this.selectHero} />
        <HeroOverlay {...this.state.selectedHero} toggleOpen={this.toggleOverlay} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default App;
