import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './App';
import Dashboard from './partial/dashboard';
import NotFound from './partial/not_found';
import Icons from './partial/icons';
import Maps from './partial/maps';
import Notifications from './partial/notifications';
import Table from './partial/table';
import User from './partial/user';
import Typography from './partial/typography';

export default ( 
    <Route history={ browserHistory } path="/" component={ App }>
		<IndexRoute component={Dashboard}/>
		<Route path="/dashboard" component={ Dashboard }/>
		<Route path="/icons" component={ Icons }/>
		<Route path="/maps" component={ Maps }/>
		<Route path="/notifications" component={ Notifications }/>
		<Route path="/table" component={ Table }/>
		<Route path="/user" component={ User }/>
		<Route path="/typography" component={ Typography }/>
		<Route path="*" component={ NotFound }/>
	</Route>
);
