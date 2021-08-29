import './App.css';
import React, { Component } from 'react';

class App extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(err => console.log(err));
	}


	// fetching the GET route from the Express server which matches the GET route from server.js
	callBackendAPI = async () => {
		const response = await fetch('/user');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Zuri Chat Reminder Plugin</h1>
					<p>
						Reminder plugin for the open-source{' '}
						<a href="https://zuri.chat">Zuri Chat</a>
					</p>
					<p className="App-intro">{this.state.data}</p>
				</header>

			</div>
		)
	}
}

export default App
