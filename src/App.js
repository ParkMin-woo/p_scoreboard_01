import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

// 자식에서 부모로 통신하는 예제



const Player = (props) => {
  console.log("props in Player : " , props);
  return (
    <div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => {props.removePlayer(props.id)}} > X </button>
        {props.name}
			</span>
      <Counter />
    </div>
  );
}

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

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players : [
        {name : "Kim Sooyoung" , id : 1 },
        {name : "Park Minwoo"  , id : 2 },
        {name : "Kim Dongheon"  , id : 3 },
        {name : "Yoo Jaean" , id : 4 },
      ]
    };
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      console.log("prevState.players in removePlayer : " , prevState.players);
      return { players : prevState.players.filter(item => item.id !== id) };
    });
  }

  render() {
    console.log("this.state in App : " , this.state);
    return (
      <div className="scoreboard">
        <Header title = "NIKE Scoreboard" joinedPlayersCount = {this.state.players.length} />
        {this.state.players.map(item => <Player name = {item.name} key = {item.id.toString()} id = {item.id} removePlayer = {this.handleRemovePlayer} />)}
      </div>
    );

  }
}

{/*JSON Array 형태로 나타내보기*/}
// const players = [
// 	{name : "Kim Sooyoung" , id : 1 },
// 	{name : "Park Minwoo"  , id : 2 },
// 	{name : "Kim Dongheon"  , id : 3 },
// 	{name : "Yoo Jaean" , id : 4 },
// ];

export default App;
