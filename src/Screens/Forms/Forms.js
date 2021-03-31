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
                <Route  path='/forms/advanceform' component={AdvanceElementList} />
                <Route  path='/forms/1' component={GeneralElementList} />
                <Route  path='/forms/2' component={ValidationList} />

        </Switch>


                </div>
                </Router>
    )
}

export default Forms
