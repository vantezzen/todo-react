// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import main css
import './index.css';

// Import main app component
import App from './App';

// Import service worker
import * as serviceWorker from './serviceWorker';

// Render app
ReactDOM.render(<App />, document.getElementById('root'));

// Unregister service worker
serviceWorker.unregister();
