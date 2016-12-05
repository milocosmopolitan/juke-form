import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

const NewPlaylistContainer = function(props){
	
		return (
			<NewPlaylist 
				errorMessage = {props.errorMessage}
				value={props.newPlaylistName} 
				nameInput={ props.namePlaylist } 
				createPlaylist = { props.createPlaylist } />
		)
	
	// warningMessage (message){		
	// 	this.setState({errorMessage: message})
	// }
	// namePlaylist (event) {
	// 	this.setState({ value: event.target.value })
	// 	if(event.target.value === '') this.warningMessage('input is empty');
	// 	if(event.target.value.length > 16) this.warningMessage('character exceed 16');		
	// } 
	// createPlaylist (event) {
	// 	event.preventDefault();
	// 	axios.post(`/api/playlists`, {
	// 		name: this.state.value
	// 	})
	// 	.then(res => res.data)
	// 	.then((newPlaylist) => {
	// 		console.log(newPlaylist)
	// 		this.setState({ value: '' })
	// 	})
	// }
}
export default NewPlaylistContainer;