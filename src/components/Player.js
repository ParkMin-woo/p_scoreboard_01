import React from 'react';
import Counter from "./Counter";

// const Player = (props) => {
class Player extends React.Component {
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

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// console.log("nextProps in shouldComponentUpdate : " , nextProps);
		return nextProps.score !== this.props.score ? true : false;
	}

}

export default Player;