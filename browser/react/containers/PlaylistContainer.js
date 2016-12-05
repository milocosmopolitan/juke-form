import React from 'react';
// import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';
import Playlist from '../components/Playlist'

const PlaylistContainer = function(props){
	
		console.log(props)
		return (
			<div>
				<Playlist selectedPlaylist={props.selectedPlaylist} selectPlaylist={props.selectPlaylist} params={props.routeParams} />
				<div className="well">
				    <form className="form-horizontal" noValidate name="songSelect">
				      <fieldset>
				        <legend>Add to Playlist</legend>
				        <div className="form-group">
				          <label htmlFor="song" className="col-xs-2 control-label">Song</label>
				          <div className="col-xs-10">
				            <select className="form-control" name="song" 
				            	onChange={props.selectSong}>
				            {
				            	props.songs.length ?
				            	props.songs.map(song=>{
				            		return <option key={song.id}>{song.name}</option>		
				            	}) : null
				            }					              
				            </select>
				          </div>
				        </div>
				        <div className="form-group">
				          <div className="col-xs-10 col-xs-offset-2">
				            <button type="submit" className="btn btn-success" onClick={props.addSongToPlaylist}>Add Song</button>
				          </div>
				        </div>
				      </fieldset>
				    </form>
				</div>
		   
			</div>
		
		)
	
}
export default PlaylistContainer;