import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';
import {BrowserRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
