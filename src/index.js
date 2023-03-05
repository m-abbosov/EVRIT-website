import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";
import {positions, Provider} from "react-alert";
import {Provider as ReduxProvider} from "react-redux";
import App from './App';
import './index.scss';
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
    timeout: 2000,
    position: positions.TOP_RIGHT
};
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider store={store}>
                <Provider template={AlertTemplate} {...options}>
                    <App/>
                </Provider>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>
);
