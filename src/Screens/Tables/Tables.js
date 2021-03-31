import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DataTableList from './Components/DataTableList';
import SampleTableList from './Components/SampleTableList';
function Tables() {
    return (
        <Router>
        <div class="wrapper">
                <Switch>
                <Route  path='/tables/1' component={SampleTableList} />
                <Route  path='/tables/2' component={DataTableList} />

        </Switch>

                </div>
                </Router>
    )
}

export default Tables
