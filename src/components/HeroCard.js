import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";

export default ({name, description, className, onClick}) => (
  <Card className={className} interactive={true} elevation={Elevation.TWO}>
    <h5 style={{textAlign: 'center'}}><a>{name.substr(0, 24)}</a></h5>
    <p style={{marginTop: '36px'}}>{description ? `${description.substr(0, 48)}...` : 'No description.'}</p>
    <div style={{marginTop: '24px'}}>
      <Button onClick={onClick}>Read More</Button>
    </div>
  </Card>
);
