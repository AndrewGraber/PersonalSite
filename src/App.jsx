import './App.scss';
import PageHolder from './components/PageHolder';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  	return (
		<ParallaxProvider>
			<div className="App">
				<PageHolder />
			</div>
		</ParallaxProvider>
	);
}

export default App;
