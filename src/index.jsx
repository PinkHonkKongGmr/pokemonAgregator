import './style/styles.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import initStore from './store';
import { Provider } from 'react-redux';
const store = initStore();
store.subscribe(() => console.log('some'));
ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            {' '}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
