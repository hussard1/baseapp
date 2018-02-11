import React from 'react';
import ReactDOM from 'react-dom';
// main app
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './reducers';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
);