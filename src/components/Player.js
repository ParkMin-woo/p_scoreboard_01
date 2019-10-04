import React from 'react';
import Counter from "./Counter";

const Player = (props) => {
	console.log("props in Player : " , props);
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => {props.removePlayer(props.id)}} > X </button>
				{props.name}
			</span>
			<Counter score = {props.score} scoreUpDown = {props.scoreUpDown} id = {props.id} />
		</div>
	);
}

export default Player;