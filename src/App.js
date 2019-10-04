import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";

// 자식에서 부모로 통신하는 예제
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players : [
        {name : "Kim Sooyoung" , score : 0 , id : 1 },
        {name : "Park Minwoo"  , score : 0 , id : 2 },
        {name : "Kim Dongheon" , score : 0 , id : 3 },
        {name : "Yoo Jaean" , score : 0 , id : 4 },
      ]
    };
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      console.log("prevState.players in removePlayer : " , prevState.players);
      return { players : prevState.players.filter(item => item.id !== id) };
    });
  }

  handleScoreUpDown = (id, delta) => {
  	console.log("id : " , id , "delta : " , delta);
  	// id값에 따라서
		// +, - 버튼을 누르면 증가, 감소하는 함수를 만든다.
		this.setState(prevState => {
			console.log("prevState in handleScoreUpDown : " , prevState);
			prevState.players.forEach(item => {
				if(item.id === id) {
					item.score += delta;
				}
			});
			// return [prevState, ...prevState.players];
			return {players : [...prevState.players]};
		});

	}

  render() {
    console.log("this.state in App : " , this.state);
    return (
      <div className="scoreboard">
        <Header title = "NIKE Scoreboard" joinedPlayersCount = {this.state.players.length} />
        {this.state.players.map(item =>
					<Player
						name = {item.name}
						score = {item.score}
						key = {item.id.toString()}
						id = {item.id}
						// index = {index}
						removePlayer = {this.handleRemovePlayer}
						scoreUpDown = {this.handleScoreUpDown}
					/>)
        }
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
