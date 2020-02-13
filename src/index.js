import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, browserHistory, IndexRoute } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import './index.css';
//import App from './App';
import logo from './logo.svg';
import { Button, FormGroup, FormControl, ControlLabel } from "reactstrap";
import './App.css';
import 'antd/dist/antd.css';
import Routes from './routes';


const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});
networkInterface.use([{
	applyMiddleware(req, next) {
		if(!req.options.headers){
			req.options.headers = {};
		}
		req.options.headers['x-token'] = localStorage.getItem('token');
		req.options.headers['x-refresh-token'] = localStorage.getItem('refrshToken');
	}
}]);
const client = new ApolloClient({
  networkInterface: networkInterface
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
