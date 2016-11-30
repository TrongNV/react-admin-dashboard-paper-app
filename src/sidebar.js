import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
	    		<div className="sidebar-wrapper">
		            <div className="logo">
		            	<a href="http://www.creative-tim.com" className="simple-text">
		                	Creative Tim
		            	</a>
		            </div>
		            <ul className="nav">
		            <li className="active">
		            	 <Link to="/dashboard"><i className="pe-7s-graph" />Dashboard</Link>
		            </li>
		            <li>
		            	<Link to="/user"><i className="pe-7s-user" />User Profile</Link>
		            </li>
		              <li>
		              	<Link to="/table"><i className="pe-7s-note2" />Table List</Link>
		              </li>
		              <li>
		              	<Link to="/typography"><i className="pe-7s-news-paper" />Typography</Link>
		              </li>
		              <li>
		              	<Link to="/icons"><i className="pe-7s-science" />Icons</Link>
		              </li>
		              <li>
		              	<Link to="/maps"><i className="pe-7s-map-marker" />Maps</Link>
		              </li>
		              <li>
		              <Link to="/notifications"><i className="pe-7s-bell" />Notifications</Link>
		              </li>
		            </ul>
	        	</div>
        	</div>
        );
    }
}

export default SideBar;
