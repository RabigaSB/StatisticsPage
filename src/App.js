import React, {useEffect} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "./containers/Main";
import Statistic from "./containers/Statistic";
import {removeExpensesFromLS, saveExpensesToLS} from './helpers/helperFunctions';
import {expenses} from './helpers/mock';


const App = () => {
    
    useEffect(() => {
        saveExpensesToLS(expenses);
        return () => removeExpensesFromLS();
    }, []);
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/statistic" component={Statistic}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
