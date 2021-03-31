import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChartList from './Components/ChartList';
import FlotList from './Components/FlotList';
import InlineList from './Components/InlineList';
function Chart() {
    return (
        <Router>
<div class="wrapper">
        <Switch>
        <Route  path='/charts/chart-List' component={ChartList} />
        <Route  path='/charts/flot-List' component={FlotList} />
        <Route  path='/charts/inline-List' component={InlineList} />
</Switch>

        </div>
        </Router>
    )
}

export default Chart
