import React, { Component } from 'react';
import {Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment} from '@blueprintjs/core';
import HeroGridContainer from './containers/HeroGridContainer';
import HeroOverlay from './components/HeroOverlay';
import {getCharacters} from './api/marvel';

import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';

const searchFrequency = 250;
let timeSinceLastSearch = 0;
let intervalId;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      selectedHero: false,
      isOpen: false,
    };
  }
  componentDidMount() {
    intervalId = setInterval(() => {
      timeSinceLastSearch += 50;
    }, 50);
    this.loadCharacters();
  }
  componentWillUnmount() {
    clearInterval(intervalId);
  }
  loadCharacters = (options) => {
    this.setState({
      loading: true
    });
    getCharacters({...options}).then(characters => {
      this.setState({
        characters,
        loading: false
      });
    });
  }
  search = (event) => {
    if(timeSinceLastSearch > searchFrequency) {
      timeSinceLastSearch = 0;
      this.loadCharacters({startsWith: event.target.value});
    }
  }
  selectHero = (index) => {
    this.setState({selectedHero: this.state.characters[index]});
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
            <input onChange={this.search} className="pt-input pt-round" type="text" placeholder="Search by name" dir="auto" />
          </NavbarGroup>
        </Navbar>
        <HeroGridContainer characters={this.state.characters} loading={this.state.loading} onSelectHero={this.selectHero} />
        <HeroOverlay {...this.state.selectedHero} toggleOpen={this.toggleOverlay} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default App;
