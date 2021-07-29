import Dashboard from "./components/template";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SoldItems from './pages/SoldItems';
import CategoryForm from "./pages/CategoryForm";


function App() {
    return (
        <Router>
            <Dashboard>
                <Switch>
                    <Route path="/sold-items">
                        <SoldItems/>
                    </Route>
                    <Route path="/categories/:id">
                        <CategoryForm/>
                    </Route>
                </Switch>
            </Dashboard>
        </Router>
    );
}

export default App;
