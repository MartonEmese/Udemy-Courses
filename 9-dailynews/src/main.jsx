import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes.jsx';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routes />
  </Provider>,
)
