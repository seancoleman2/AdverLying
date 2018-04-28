import React, { Component } from 'react';
 
import AdItem from './AdItem.js';
import { Typography } from 'rmwc/Typography';
import Grid from './Grid.js';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div id="grid-container">
        <header className="header">
          <img src="/images/pinochio.png" />
          <div className="header-text">
            <Typography className="header-title" use="display1" tag="h2">AdverLying</Typography>
            <Typography className="header-subtitle" use="subheading1" tag="h3" theme="text-secondary-on-background"> Exposing false advertising campaigns, one at a time</Typography>
          </div>
        </header>
        <Grid />
      </div>
    );
  }
}