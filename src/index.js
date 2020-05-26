import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import {rootReducer} from '../src/reducers/rootReducer';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import './styles/variable.scss'
import * as serviceWorker from './serviceWorker'


const store = createStore(rootReducer)

const render = (Component) =>{
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <Component />
                </Provider>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

render(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
