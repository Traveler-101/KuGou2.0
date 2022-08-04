import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import './assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
