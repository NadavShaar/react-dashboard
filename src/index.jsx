import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Dashboard from './components/dashboard/Dashboard';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import { initWidgets } from "./store/actions";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initWidgets({route: 'dashboard'}));
    }, [])

    return (
        <Dashboard />
    )
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));