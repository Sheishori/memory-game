import React from 'react';
import Card from './Card';
import '../styles/Main.css';

export default function Main() {
	return (
		<main>
			<h2>Click on each card once to gain points!</h2>
			<div id='gameboard'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</main>
	);
}
