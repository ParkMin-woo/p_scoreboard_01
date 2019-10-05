import React from 'react';
import Counter from "./Counter";

// const Player = (props) => {
class Player extends React.PureComponent {
	render() {
		console.log(this.props.name , " rendered");
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => {this.props.removePlayer(this.props.id)}} > X </button>
					{this.props.name}
				</span>
				<Counter score = {this.props.score} scoreUpDown = {this.props.scoreUpDown} id = {this.props.id} />
			</div>
		);
	}
}

export default Player;