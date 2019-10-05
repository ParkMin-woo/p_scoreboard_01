import React from "react";
import Stats from "./Stats";
import {Stopwatch} from "./Stopwatch";

const Header = (props) => {
	console.log("props in Header : " , props);
	// result : {title: "NIKE Scoreboard", joinedPlayersCount: 11}
	return (
		<header className="header">

			<Stats joinedPlayersCount = {props.joinedPlayersCount} players = {props.players}/>

			{/*SCOREBOARD*/}
			<h1 className="h1">{props.title}</h1>
			{/*<span className="stats">PLAYERS : {props.joinedPlayersCount}</span>*/}

			<Stopwatch />
		</header>
	);
}

export default Header;