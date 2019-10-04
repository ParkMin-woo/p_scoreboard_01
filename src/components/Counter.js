import React from 'react';

class Counter extends React.Component {

	constructor() {
		super();
		this.state = {
			score : 0,
		};
	}

	// + 눌렀을 때, score가 증가하는 함수
	increamentScore = () => {
		console.log("증가!");
		this.setState(prevState => {
			console.log("prevState in increamentScore : " , prevState);
			return { score : prevState.score + 1  };
		});
	}

	// -를 눌렀을 때, score가 감소하는 함수
	decreamentScore = () => {
		console.log("감소!");
		this.setState(prevState => {
			console.log("prevState in decreamentScore : " , prevState);
			return { score : prevState.score - 1 };
		});
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick = {this.decreamentScore}> - </button>
				<span className = "counter-score">
					{this.state.score}
				</span>
				<button className="counter-action increment" onClick = {this.increamentScore}> + </button>
			</div>
		);
	}
}

export default Counter;