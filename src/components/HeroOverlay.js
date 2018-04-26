import React from 'react';
import {Overlay, Card, Elevation, Button} from '@blueprintjs/core';

export default ({name, description, toggleOpen, isOpen, thumbnail}) => (
  <Overlay isOpen={isOpen} onClose={toggleOpen}>
    <Card className="hero-overlay-card" interactive={true} elevation={Elevation.TWO}>
      <div><img className="hero-img" alt={name} src={`${thumbnail ? thumbnail.path + '.' + thumbnail.extension : ''}`}></img></div>
      <h5 className="hero-name"><a>{name}</a></h5>
      <p>{description || 'No description...'}</p>
      <Button onClick={toggleOpen}>Exit</Button>
    </Card>
  </Overlay>  
);
