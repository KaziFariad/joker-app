import { useState, useEffect } from 'react';

const Jokes = () => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:5050/api/jokes');
			const data = await response.json();
			setJokes(data);
		};
		fetchData();
	}, []);

	const JOKES = jokes?.map((joke, i) => (
		<li
			key={i}
			className="w-auto font-bold break-words md:break-all font-sans text-yellow-500 bg-slate-900 p-2 m-5 list-none"
		>
			{joke.joke}
			<span className="px-3 text-xs text-right font-thin font-mono text-sky-400">
				Category: {joke.category}
			</span>
		</li>
	));

	if (jokes.length === 0) {
		return <h1>Waiting for jokes to load</h1>;
	} else {
		return (
			<>
				<ul className="px-5 border-double border-8 border-sky-500">{JOKES}</ul>
			</>
		);
	}
};

export default Jokes;
