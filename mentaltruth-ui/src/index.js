import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute,
    Link
} from 'react-router-dom';

import './index.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// #Routes
render((
    <Router>
      <App />
    </Router> 
),
document.getElementById('root')
);
registerServiceWorker();
