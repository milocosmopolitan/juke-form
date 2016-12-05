import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class ArtistsContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			inputValue: ''
		}
		this.changeEvent = this.changeEvent.bind(this);
	}
	render () {
		var artists = this.props.artists;
		if (this.state.inputValue !== '') {
			artists = this.props.artists.filter((artist) => {
				return artist.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
			})
		}
		return (
			<div>
				<FilterInput onChange = {this.changeEvent}/>
				<Artists artists = {artists} selectArtist = {this.props.selectArtist}/>
			</div>
		)
	}
	changeEvent (event) {
		this.setState({ inputValue: event.target.value})
	
	}
}
