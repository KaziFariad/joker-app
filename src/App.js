import './App.css';
import Jokes from './components/jokes';
import AddJoke from './components/addJoke';

function App() {
	return (
		<div className="bg-gray-800 p-5">
			<div className="m-5 p-5">
				<h2 className="text-center font-extrabold text-4xl text-sky-500">
					Joker App
				</h2>
			</div>
			<Jokes />
			<AddJoke />
		</div>
	);
}

export default App;
