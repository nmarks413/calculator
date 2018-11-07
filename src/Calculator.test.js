import React from 'react';
import ReactDOM from 'react-dom';
import MathHandler from './Calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathHandler />, div);
  ReactDOM.unmountComponentAtNode(div);
});
