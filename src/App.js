import './App.scss';
import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Websites from "./pages/Websites";
import Logotypes from "./pages/Logotypes";
import Uav from "./pages/Uav";
import Pricing from "./pages/Pricing";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/freelance-offert-website/about" component={About} />
                <Route path="/freelance-offert-website/websites" component={Websites} />
                <Route path="/freelance-offert-website/logotypes" component={Logotypes} />
                <Route path="/freelance-offert-website/uav" component={Uav} />
                <Route path="/freelance-offert-website/pricing" component={Pricing} />
                <Route path="/freelance-offert-website/" component={Homepage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
