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
  		<div className="grid-item" onClick={this.props.onClick} >
		  	<Card style={{width: '100%'}}>
			  <CardPrimaryAction>
			    <CardMedia sixteenByNine style={{backgroundImage: `url(${this.props.item.img[0]})`, height: '250px'}}/>
			    <div style={{padding: '0 1rem 1rem 1rem'}}>
			      <Typography use="title" tag="h2">{this.props.item.headline}</Typography>
			      <Typography
			        use="subheading1"
			        tag="h3"
			        theme="text-secondary-on-background"
			        style={{marginTop: '-1rem'}}
			      >
			      {this.props.item.industry}
			      </Typography>
			      <Typography use="body1" tag="div" theme="text-secondary-on-background" className='cardDescription'>{this.props.item.description}</Typography>
			    </div>
			  </CardPrimaryAction>
			</Card>
		</div>
	);
  }
}