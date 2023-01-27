import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	const scoreData = {
		score: score,
		setScore: setScore,
		bestScore: bestScore,
		setBestScore: setBestScore,
	};

	return (
		<div id='App'>
			<Header scoreData={scoreData} />
			<Main scoreData={scoreData} />
			<Footer />
		</div>
	);
}
