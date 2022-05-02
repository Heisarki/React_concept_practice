import reducers from './state/reducres'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// import './index.css';
// import App from "./App";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);



// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );