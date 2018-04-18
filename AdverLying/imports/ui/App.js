import React, { Component } from 'react';
 
import AdItem from './AdItem.js';
import { Typography } from 'rmwc/Typography';
 
// App component - represents the whole app
export default class App extends Component {
  getAdItem() {
    return [
      { _id: 1, text: 'Higgs :)' },
      { _id: 2, text: 'SAF Tim' },
      { _id: 3, text: 'Vitamin Water' },
      { _id: 4, text: 'HELLOOOO' },
    ];
  }

  renderItems() {
    return this.getAdItem().map((item) => (
      <AdItem key={item._id} item={item} />
    ));
  }
 
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
        <div>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}