import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Main.css';
import adamantoise from '../assets/Adamantoise.png';
import ahriman from '../assets/Ahriman.png';
import behemoth from '../assets/Behemoth.png';
import bomb from '../assets/Bomb.png';
import cactuar from '../assets/Cactuar.png';
import chocobo from '../assets/Chocobo.png';
import coeurl from '../assets/Coeurl.png';
import flan from '../assets/Flan.png';
import malboro from '../assets/Malboro.png';
import mandragora from '../assets/Mandragora.png';
import moogle from '../assets/Moogle.png';
import tonberry from '../assets/Tonberry.png';

export default function Main({ scoreData }) {
	const { score, setScore, bestScore, setBestScore } = scoreData;
	const [cardData, setCardData] = useState([
		{
			src: adamantoise,
			name: 'Adamantoise',
		},
		{
			src: ahriman,
			name: 'Ahriman',
		},
		{
			src: behemoth,
			name: 'Behemoth',
		},
		{
			src: bomb,
			name: 'Bomb',
		},
		{
			src: cactuar,
			name: 'Cactuar',
		},
		{
			src: chocobo,
			name: 'Chocobo',
		},
		{
			src: coeurl,
			name: 'Coeurl',
		},
		{
			src: flan,
			name: 'Flan',
		},
		{
			src: malboro,
			name: 'Malboro',
		},
		{
			src: mandragora,
			name: 'Mandragora',
		},
		{
			src: moogle,
			name: 'Moogle',
		},
		{
			src: tonberry,
			name: 'Tonberry',
		},
	]);

	function shuffleCards() {
		const cards = [...cardData];
		setCardData(cards.sort(() => Math.random() - 0.5));
	}

	useEffect(() => {
		shuffleCards();
	}, [score]);

	const [alreadyClicked, setAlreadyClicked] = useState([]);

	function handleLogic(name) {
		if (alreadyClicked.find((card) => card === name)) {
			if (bestScore < score) setBestScore(score);
			setScore(0);
			setAlreadyClicked([]);
		} else {
			setScore(score + 1);
			setAlreadyClicked(alreadyClicked.concat(name));
		}
	}

	return (
		<main>
			<h2>Click on each card once to gain points!</h2>
			<div id='gameboard'>
				{cardData.map((card) => (
					<Card
						key={card.name}
						src={card.src}
						name={card.name}
						handleLogic={handleLogic}
					/>
				))}
			</div>
		</main>
	);
}
