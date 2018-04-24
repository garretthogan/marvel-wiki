import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";

export default ({name, description, className, onClick}) => (
  <Card className={className} interactive={true} elevation={Elevation.TWO}>
    <h5 style={{textAlign: 'center'}}><a>{name}</a></h5>
    <p>{description ? `${description.substr(0, 48)}...` : 'No description.'}</p>
    <Button onClick={onClick}>Read More</Button>
  </Card>
);
