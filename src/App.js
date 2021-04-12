import React from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';
import store from './store';
import './App.css';
import Page2 from './Page2';

function App () {
    return (
      <Provider store={store}>
        <Page2 />
        <Counter />
        
      </Provider>
    );
}

export default App;