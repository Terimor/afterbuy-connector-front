import Dashboard from "./components/template";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SoldItems from './pages/SoldItems';


function App() {
    return (
        <Router>
            <Dashboard>
                <Switch>
                    <Route path="/sold-items">
                        <SoldItems/>
                    </Route>
                </Switch>
            </Dashboard>
        </Router>
    );
}

export default App;
