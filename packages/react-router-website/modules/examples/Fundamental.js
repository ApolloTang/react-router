import React from 'react'

const Module = ()=>(<div>module</div>);
const Home = ()=>(<div>home</div>);

// React router version v4
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Root extends React.Component {
    constructor(props) { super(props); }
    render() {
        return(
            <Router>
                <div>
                    <div><Link to="/">home</Link></div>
                    <div><Link to="/module">module</Link></div>
                    <div>
                        <p>App</p>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/module" component={Module} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


export default Root;
