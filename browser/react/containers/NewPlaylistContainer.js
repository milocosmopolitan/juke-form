import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			value: '',
			invalid: true
		}
		this.createPlaylist = this.createPlaylist.bind(this)
		this.namePlaylist = this.namePlaylist.bind(this)
	}
	render () {
		return (
			<NewPlaylist invalid={this.state.invalid} value={this.state.value} nameInput={ this.namePlaylist } createPlaylist = { this.createPlaylist } />
		)
	}
	namePlaylist (event) {
		if(event.target.value !== '' && event.target.value.length <= 16) this.setState({invalid: false})
		this.setState({ value: event.target.value })
	} 
	createPlaylist (event) {
		event.preventDefault();
		axios.post(`/api/playlists`, {
			name: this.state.value
		})
		.then(res => res.data)
		.then((newPlaylist) => {
			console.log(newPlaylist)
			this.setState({ value: '' })
		})
	}
}