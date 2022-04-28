import { useState } from 'react';

const AddJoke = () => {
	const [joke, setJoke] = useState('');
	const [category, setCategory] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ joke: joke, category: category }),
			};

			const response = await fetch('http://localhost:5050/api/jokes', options);
			let data = await response.json();
			console.log(data);
			if (response.status === 201) {
				setJoke('');
				setCategory('');
				setMessage(`Joke ${JSON.stringify(data.joke)} added successfully`);
			} else {
				setMessage('Some error occured');
			}
		} catch (err) {
			console.log(err);
		}
		setJoke('');
		setCategory('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="joke" className="text-blue-300 font-semibold">
				Joke:
				<input
					name="joke"
					type="text"
					className="px-2 py-3 m-5 font-bold text-gray-800"
					placeholder="Post a joke"
					value={joke}
					onChange={(e) => {
						e.preventDefault();
						setJoke(e.target.value);
					}}
				/>
			</label>
			<label htmlFor="category" className="text-blue-300 font-semibold">
				Category:
				<input
					name="category"
					type="text"
					className="px-2 py-3 m-5 font-bold text-gray-800"
					placeholder="Set a category"
					value={category}
					onChange={(e) => {
						e.preventDefault();
						setCategory(e.target.value);
					}}
				/>
			</label>
			<input
				type="submit"
				className="px-5 py-3 m-5 bg-blue-500 text-yellow-300 font-extrabold"
			/>
			<div className="text-green-400">{message ? <p>{message}</p> : null}</div>
		</form>
	);
};

export default AddJoke;
