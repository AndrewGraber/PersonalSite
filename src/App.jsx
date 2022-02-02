import './App.scss';
import PageHolder from './components/PageHolder';
import { ParallaxProvider } from 'react-scroll-parallax';

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
