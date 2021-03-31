import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Buttons from './Components/Buttons';
import GeneralList from './Components/GeneralList';
import IconList from './Components/IconList';
function Ui() {
    return (

        <Router>



        <Switch>
        <Route exact path='/ui/general-list' component={GeneralList}  />
        <Route exact path='/ui/icons' component={IconList}  />
        <Route exact path='/ui/buttons' component={Buttons}  />
</Switch>
        </Router>
    )
}

export default Ui
