import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from './App'

describe('App', () => {
  it('Render without error', () => {
    render(<App />)
    const count = screen.getByText(/count/i);
    const addBtn = screen.getByRole('button', {name: '+'});
    const minusBtn = screen.getByRole('button', {name: '-'});
    expect(count).toHaveTextContent(/count: 0/i);
    addBtn.click();
    expect(count).toHaveTextContent(/count: 1/i);
    minusBtn.click();
    expect(count).toHaveTextContent(/count: 0/i);
  })  

  //it('Render next', () => {
    //render(<App />)
    //screen.debug();
  //})  
});
