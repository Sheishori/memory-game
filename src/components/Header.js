import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

export default function Header({ scoreData }) {
	return (
		<header>
			<h1>Memory Game</h1>
			<Scoreboard scoreData={scoreData} />
		</header>
	);
}
