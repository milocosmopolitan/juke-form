import React, { Component } from 'react';
import Songs from './Songs';


export default class Playlist extends Component {
	constructor(props){
		super(props);
	}


	componentWillReceiveProps(nextProps){
		if(nextProps.params.playlistId !== this.props.params.playlistId){			
			const playlistId = nextProps.params.playlistId;
			const selectPlaylist = nextProps.selectPlaylist;
			selectPlaylist(playlistId);	
		}
	}

	componentDidMount(){	
		console.log(this.props)	
		const playlistId = this.props.params.playlistId;
		const selectPlaylist = this.props.selectPlaylist;
		selectPlaylist(playlistId);
	}

	render() {
		return (
			<div>
			  <h3>{ this.props.selectedPlaylist.name }</h3>
			  <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
			  { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
			  <hr />
					
			</div>
		)	
	}
	

}
