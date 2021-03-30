import Dashboard from "./Screens/Dashboard/Dashboard";
import Header from "./Layouts/Components/Header";
import SideMenu from "./Layouts/Components/SideMenu";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Widgets from "./Screens/Widgets/Widgets";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>

      <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route  path="/Widgets" component={Widgets} />x
      </Switch>
      <SideMenu />

    </div>
    </Router>
  );
}

export default App;
