import React from 'react';
import ReactDOM from 'react-dom';

import ResponsiveApp from '../../../src/react-responsive-app.jsx';




export default class MyApp extends React.Component{
    constructor(props) {
        super(props);

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.refs.resApp.toggleSideBar();
    }

    render() {
        let sidebar = <ul><li>mau</li></ul>;

        return <ResponsiveApp ref="resApp"  sidebarContent={sidebar}>
            <h1>Your App</h1>
            <button onClick={this.toggleSidebar}>Toggle</button>
                </ResponsiveApp>;
    }
}






let app = <ResponsiveApp className="mau container">

        <h1>Your App</h1>

    </ResponsiveApp>;



ReactDOM.render(<MyApp />, document.getElementById('container'));
