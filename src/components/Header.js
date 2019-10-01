import React from "react";

const Header = (props) => {
	console.log("props in Header : " , props);
	// result : {title: "NIKE Scoreboard", joinedPlayersCount: 11}
	return (
		<header className="header">
			{/*SCOREBOARD*/}
			<h1 className="h1">{props.title}</h1>
			<span className="stats">PLAYERS : {props.joinedPlayersCount}</span>
		</header>
	);
}

export default Header;