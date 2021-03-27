import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as api from "./util/api";

// pages
import Home from "./pages/home";
import NoMatch from "./pages/404";
import Stats from "./pages/stats";
import RedirectPage from "./pages/redirect";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/stats" component={Stats}/>

                    <Route path='/login' component={() => {
                        window.location.href = api.getOauth();
                        return RedirectPage;
                    }}/>

                    <Route path='/discord' component={() => {
                        window.location.href = "https://discord.gg/5WbQzb8n"
                        return RedirectPage;
                    }}/>

                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;