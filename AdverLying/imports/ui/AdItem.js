import React, { Component } from 'react';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';

import { Typography } from 'rmwc/Typography';
 
export default class AdItem extends Component {
  render() {
  	return (
  		<div className="grid-item">
		  	<Card style={{width: '100%'}}>
			  <CardPrimaryAction>
			    <CardMedia sixteenByNine style={{backgroundImage: 'url(https://material-components-web.appspot.com/images/16-9.jpg)'}}/>
			    <div style={{padding: '0 1rem 1rem 1rem'}}>
			      <Typography use="title" tag="h2">{this.props.item.text}</Typography>
			      <Typography
			        use="subheading1"
			        tag="h3"
			        theme="text-secondary-on-background"
			        style={{marginTop: '-1rem'}}
			      >
			        Technology
			      </Typography>
			      <Typography use="body1" tag="div" theme="text-secondary-on-background">Visit ten places on our planet that are undergoing the biggest changes today.</Typography>
			    </div>
			  </CardPrimaryAction>
			</Card>
		</div>
	);
  }
}