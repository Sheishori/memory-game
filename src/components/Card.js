import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
	return (
		<div className='card' onClick={props.handleLogic.bind(this, props.name)}>
			<img src={props.src} alt={props.name} />
			<div>{props.name}</div>
		</div>
	);
}
