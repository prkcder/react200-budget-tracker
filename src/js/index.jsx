// import React from 'react';
// import { render } from 'react-dom';
// import App from './app';

// render(<App />, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);