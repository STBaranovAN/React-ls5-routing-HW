import React from "react";
import axios from "axios";
import Rooms from "./rooms";
import Messages from "./messages";
import PostMsg from "./postmsg";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

export default class Main extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selectedRoom: null
		}

		this.setRoom = this.setRoom.bind(this);
	}

	setRoom(roomObj){
		this.setState({selectedRoom: roomObj});
	}
	
	render() {
		return (
			<Router>
				<div className="main container">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/rooms">All Rooms</Link>
						<Link to="/messages">Messages</Link>
					</nav>

					<Switch>
						<Route exact path="/" render = { () => {
							return (
								// <div className="main container">
								<div>
									<div className="row">
										<div className="col">
											<Rooms setRoom={this.setRoom}/>
										</div>
										<div className="col">
											<Messages selectedRoom={this.state.selectedRoom}/>
											<br/>
											<PostMsg setRoom={this.setRoom} selectedRoom={this.state.selectedRoom}/>
										</div>
									</div>
								</div>
							)}}
						>
						</Route>
						<Route exact path="/rooms" component={Rooms} />
						<Route exact path="/messages" render={ () => <Messages getAll={true}/>} />
					</Switch>
				</div>
			</Router>
		)
	}
}

		