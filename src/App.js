import React, { Component } from 'react';
import Home from './pages/main/home'
import Course from './pages/course'
import Tool from './pages/tool'
import Mine from './pages/mine'
import { Route, Switch, Redirect } from 'react-router-dom'
import TabSelect from '@/components/common/TabSelect'
import Detail from './pages/detail/Detail'
class App extends Component {
	render() {
		return (
			<div className="App">
					<Switch> 
						{/* 只显示匹配的link */}
						<Redirect from= '/' to = '/home' exact/>
						<Route path= '/home' component= {Home}/>
						<Route path= '/course' component= {Course}/>
						<Route path= '/tool' component= {Tool}/>
						<Route path= '/mine' component= {Mine}/>
					</Switch>
				{/* 切换选项卡 一级路由 */}
				<TabSelect/>
				<Route path="/detail/:id" component={Detail} />
			</div>
		);
	}
}

export default App;
