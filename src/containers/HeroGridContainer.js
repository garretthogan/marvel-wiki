import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import HeroCard from '../components/HeroCard';
import Loading from '../components/Loading';

class HeroGridContainer extends Component {
  _onSelectHero = (index) => () => {
    const {onSelectHero} = this.props;
    if(onSelectHero) {
      onSelectHero(index);
    }
  }
  render() {
    const {characters, loading} = this.props;
    return (
      <Flex wrap pt={60} align="center">{
        loading ? <Loading /> : characters.map((c, i) => (<Box key={i} p={2} w={[1, 1/2, 1/3, 1/4]}><HeroCard className="hero-card" onClick={this._onSelectHero(i)} {...c} /></Box>))
      }</Flex>
    );
  }
}

export default HeroGridContainer;
