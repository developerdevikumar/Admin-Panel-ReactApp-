import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChartList from './Components/ChartList';
function Chart() {
    return (
        <Router>
    <div class="content-wrapper">
        <Switch>
        <Route  path='/charts/chart-List' component={ChartList} />
</Switch>

        </div>
        </Router>
    )
}

export default Chart
