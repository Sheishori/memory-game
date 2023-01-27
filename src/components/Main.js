import React, { useState } from 'react';
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

export default function Main() {
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
	return (
		<main>
			<h2>Click on each card once to gain points!</h2>
			<div id='gameboard'>
				<Card src={cardData[0].src} name={cardData[0].name} />
				<Card src={cardData[1].src} name={cardData[1].name} />
				<Card src={cardData[2].src} name={cardData[2].name} />
				<Card src={cardData[3].src} name={cardData[3].name} />
				<Card src={cardData[4].src} name={cardData[4].name} />
				<Card src={cardData[5].src} name={cardData[5].name} />
				<Card src={cardData[6].src} name={cardData[6].name} />
				<Card src={cardData[7].src} name={cardData[7].name} />
				<Card src={cardData[8].src} name={cardData[8].name} />
				<Card src={cardData[9].src} name={cardData[9].name} />
				<Card src={cardData[10].src} name={cardData[10].name} />
				<Card src={cardData[11].src} name={cardData[11].name} />
			</div>
		</main>
	);
}
