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
