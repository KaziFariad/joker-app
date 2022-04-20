import './App.css';
import Jokes from './components/jokes';

function App() {
	return (
		<div className="bg-gray-800 p-5">
			<div className="m-5 p-5">
				<h2 className="text-center font-extrabold text-4xl text-sky-500">
					Joker App
				</h2>
			</div>
			<Jokes />
		</div>
	);
}

export default App;
