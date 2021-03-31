import Dashboard from "./Screens/Dashboard/Dashboard";
import Header from "./Layouts/Components/Header";
import SideMenu from "./Layouts/Components/SideMenu";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Widgets from "./Screens/Widgets/Widgets";
import Chart from "./Screens/Chart/Chart";
import Calender from "./Screens/Calender/Calender";
import Footer from "./Layouts/Components/Footer";
import Ui from "./Screens/UIElements/Ui";
import Forms from "./Screens/Forms/Forms";
import Tables from "./Screens/Tables/Tables";
import Gallery from "./Screens/Gallery/Gallery";

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
            <Route  path="/Widgets" component={Widgets} />
            <Route path="/charts" component={Chart}  />
            <Route path="/calender" component={Calender} />
            <Route path="/ui" component={Ui} />
            <Route path="/forms" component={Forms} />
            <Route path="/tables" component={Tables} />
            <Route path="/gallery" component={Gallery} />

      </Switch>
      <SideMenu />
<Footer />
    </div>
    </Router>
  );
}

export default App;
