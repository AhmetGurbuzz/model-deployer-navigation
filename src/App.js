import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import './App.css'

import python from './python-1.png'
import spark from './spark-2.png'


export default function App() {
    return (
        <Router>
            <>
                <ul className={"navbar"}>
                    <li className={"model-deployer non-select"}><img className={"model-deployer-icon"} title={"Model Deployer"} src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/60/000000/external-3d-cube-virtual-reality-kiranshastry-gradient-kiranshastry.png" alt={"Model Deployer"}/></li>
                    <li className={"deployment"}>
                        <Link to="/"><img className={"deployment-icon"} src={python} alt={"python-logo"}/></Link>
                    </li>
                    <li className={"deployment"}>
                        <Link to="/about"><img className={"deployment-icon"} src={spark} alt={"spark-logo"}/></Link>
                    </li>
                    <li className={"deployment"}>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </>
        </Router>
    );
}

function Home() {
    return (
        <div className={"home"}>
            <h2>Home</h2>
            <div className={'equal-divs'}>
                <button>Start Deployment</button>
                <a>.zip</a>
                <button>Commit</button>
            </div>
        </div>
    )
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
