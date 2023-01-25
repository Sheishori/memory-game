import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

export default function Header() {
	return (
		<header>
			<h1>Memory Game</h1>
			<Scoreboard />
		</header>
	);
}
