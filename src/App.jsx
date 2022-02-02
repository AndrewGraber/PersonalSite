import './App.scss';
import AuthenticatorWrapper from './components/AuthenticatorWrapper';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import config from './aws-exports';

Amplify.configure(config);


const reload = () => window.location.reload();

function App() {
  	return (
		<AuthenticatorWrapper />
	);
}

export default App;
