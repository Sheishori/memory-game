import React from 'react';
import '../styles/Card.css';

export default function Card({ src, name, handleLogic }) {
	return (
		<div className='card' onClick={handleLogic.bind(this, name)}>
			<img src={src} alt={name} />
			<div>{name}</div>
		</div>
	);
}
