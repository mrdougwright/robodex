import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App'
import './index.css'
import 'tachyons'
import { createStore, applyMiddleware } from 'redux'
import { searchReducer } from './reducers'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'


const logger = createLogger()

const store = createStore(searchReducer, applyMiddleware(logger, ReduxThunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
