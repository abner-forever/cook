import React, { Component } from 'react';


import Home from './pages/main/home'
import Course from './pages/course'
import Tool from './pages/tool'
import Mine from './pages/mine'
import { Route, Switch, Redirect } from 'react-router-dom'
import TabSelect from '@/components/common/TabSelect'
class App extends Component {
	render() {
		return (
			<div className="App">
					<Switch>
						<Redirect from= '/' to = '/home' exact/>
						<Route path= '/home' component= {Home}/>
						<Route path= '/course' component= {Course}/>
						<Route path= '/tool' component= {Tool}/>
						<Route path= '/mine' component= {Mine}/>
					</Switch>
				<TabSelect/>
			</div>
		);
	}
}

export default App;
