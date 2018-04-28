import React, { Component } from 'react';
 
import AdItem from './AdItem.js';
import { Typography } from 'rmwc/Typography';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Grid extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			modal: false, 
			item: {}
		}; 

		this.toggle = this.toggle.bind(this); 
	}

	toggle(item) {
  		this.setState({
  			modal: !this.state.modal, 
  			item: item
  		});

  		console.log(item);
  	}

	getAdItem() {
	    return [
	      { _id: 1, text: 'Higgs :)' },
	      { _id: 2, text: 'SAF Tim' },
	      { _id: 3, text: 'Vitamin Water' },
	      { _id: 4, text: 'HELLOOOO' },
	      { _id: 5, text: 'Lego'}, 
	      { _id: 6, text: 'Another Advertising Jawn'}
	    ];
  	}

  	renderItems() {
	    return this.getAdItem().map((item) => (
	      <AdItem key={item._id} item={item} onClick={this.toggle.bind(this, item)} />
	    ));
	}

	render () {
		return (
			<div>
				{this.renderItems()}
				<Modal isOpen={this.state.modal} toggle={this.toggle} >
		          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
		          <ModalBody>
		            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		          </ModalBody>
	        	</Modal>
			</div>
		)
	}
}