import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';


import HomePage from "./home/homepage.js";
import Dashboard from './dashboard/dashboard';

const App = () => {
    return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// export default App;
