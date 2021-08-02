import Dashboard from "./components/template";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SoldItems from './pages/SoldItems';
import CategoryForm from "./pages/CategoryForm";
import Categories from "./pages/Categories";


function App() {
    return (
        <Router>
            <Dashboard>
                <Switch>
                    <Route path="/sold-items">
                        <SoldItems/>
                    </Route>
                    <Route path="/categories/create" exact>
                        <CategoryForm/>
                    </Route>
                    <Route path="/categories/:id">
                        <CategoryForm/>
                    </Route>
                    <Route path="/categories">
                        <Categories/>
                    </Route>
                </Switch>
            </Dashboard>
        </Router>
    );
}

export default App;
