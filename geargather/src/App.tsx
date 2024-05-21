import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/app.store';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router'
import './App.css'


function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Router />
         </BrowserRouter>
      </Provider>
   );
}

export default App;
