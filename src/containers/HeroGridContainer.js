import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import HeroCard from '../components/HeroCard';
import {getCharacters} from '../api/marvel';

class HeroGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }
  componentDidMount() {
    getCharacters().then(characters => {
      this.setState({
        characters
      });
    });
  }
  _onSelectHero = (index) => () => {
    const {onSelectHero} = this.props;
    if(onSelectHero) {
      onSelectHero(this.state.characters[index]);
    }
  }
  render() {
    return (
      <Flex wrap pt={60} align="center">{
        this.state.characters && this.state.characters.map((c, i) => (<Box key={i} p={2} w={1/3}><HeroCard className="hero-card" onClick={this._onSelectHero(i)} {...c} /></Box>))
      }</Flex>      
    );
  }
}

export default HeroGridContainer;
