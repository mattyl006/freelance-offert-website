import React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Websites from "./pages/Websites";
import Logotypes from "./pages/Logotypes";
import Uav from "./pages/Uav";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/websites" component={Websites} />
            <Route path="/logotypes" component={Logotypes} />
            <Route path="/uav" component={Uav} />
        </Switch>
    );
}

export default App;
