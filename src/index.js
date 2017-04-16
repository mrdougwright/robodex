import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Containers/App'
import './index.css'
import 'tachyons'
import { createStore } from 'redux'
import { searchReducer } from './reducers'

const store = createStore(searchReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
