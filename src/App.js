import Dashboard from "./components/template";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SoldItems from './pages/SoldItems';
import CategoryForm from "./pages/CategoryForm";
import Categories from "./pages/Categories";
import React, {useEffect} from "react";
import Api from './api';
import {CatalogsContext} from "./context/catalogs-context";


function App() {
    const [catalogs, setCatalogs] = React.useState({});

    useEffect(() => {
        loadCatalogs();
    }, []);

    const loadCatalogs = () => {
        Api.catalogs.getAll().then((receivedCatalogs) => {
            setCatalogs(receivedCatalogs);
        })
    }

    return (
        <CatalogsContext.Provider value={catalogs}>
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
        </CatalogsContext.Provider>
    );
}

export default App;
