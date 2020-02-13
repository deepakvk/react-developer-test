import React, { useState } from "react";
import logo from './logo.svg';
import { Button, FormGroup, FormControl, ControlLabel } from "reactstrap";
import './App.css';

/*const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
	export default function Login(props) {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		  function validateForm() {
			return email.length > 0 && password.length > 0;
		  }

		  function handleSubmit(event) {
			event.preventDefault();
		  }
		return (
			<div className="Login">
				<form onSubmit={handleSubmit}>
					<FormGroup controlId="email" bsSize="large">
					  <ControlLabel>Email</ControlLabel>
					  <FormControl
						autoFocus
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					  />
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
					  <ControlLabel>Password</ControlLabel>
					  <FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					  />
					</FormGroup>
					<Button block bsSize="large" disabled={!validateForm()} type="submit">
					  Login
					</Button>
				</form>
			</div>
    );
}


//export default App;
