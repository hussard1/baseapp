import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// main app
import {Provider} from 'react-redux';
import AppRoutes from './routes';
import store from './reducers';

// style
import Reboot from 'material-ui/Reboot'
import 'typeface-roboto'

axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
    <Provider store={store}>
        <Reboot>
            <AppRoutes/>
        </Reboot>
    </Provider>,
    document.getElementById('root')
);