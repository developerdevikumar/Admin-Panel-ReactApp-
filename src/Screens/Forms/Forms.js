import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdvanceElementList from './Components/AdvanceElementList';
import GeneralElementList from './Components/GeneralElementList';
import ValidationList from './Components/ValidationList';

function Forms() {
    return (
        <Router>
        <div class="wrapper">
                <Switch>
                <Route  path='/general' component={AdvanceElementList} />
                <Route  path='/advance' component={GeneralElementList} />
                <Route  path='/validation' component={ValidationList} />

        </Switch>


                </div>
                </Router>
    )
}

export default Forms
