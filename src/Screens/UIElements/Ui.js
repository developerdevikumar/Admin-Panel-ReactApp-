import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GeneralList from './Components/GeneralList';
function Ui() {
    return (

        <Router>
             <div class="content-wrapper">

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Inline Charts</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Inline Charts</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
        </div>
        <Switch>
        <Route exact path='/ui/general-list' component={GeneralList} />
</Switch>
        </Router>
    )
}

export default Ui
