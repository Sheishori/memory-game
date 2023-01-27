import React from 'react';
import '../styles/Scoreboard.css';

export default function Scoreboard({ scoreData }) {
	return (
		<div id='scoreboard'>
			<div>Current score: {scoreData.score}</div>
			<div>Best score: {scoreData.bestScore}</div>
			<div>Max score: 12</div>
		</div>
	);
}
