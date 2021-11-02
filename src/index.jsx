import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import router from './config/router';
import store from './config/store';
import {createSizeAction, listenResize} from 'redux-windowsize';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js'

store.dispatch(createSizeAction(window));
listenResize(store, window, 10);

render((
    <Provider store={store}>
        {router}
    </Provider>
), document.getElementById('root'));
