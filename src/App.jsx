import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Chord from './components/Chord';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { base } from './base';

class App extends Component {
	constructor() {
		super();
		this.addSong = this.addSong.bind(this);

		this.state = {
			songs: { }
		}
	}

	addSong(title) {
		const songs = {...this.state.songs};
		const id = Date.now();
		songs[id] = {
			id: id,
			title: title,
			chordpro: ''
		}
	}

	componentWillMount() {
		this.songsRef = base.syncState('song', {
			context: this,
			state: 'songs'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.songsRef);
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/news" component={News} />
					<Route path="/chord" component={Chord} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
