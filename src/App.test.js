import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Test for App', () => {
  test('TestRendering', () => {
    const { getByTestId } = render(<Provider store={store}><App /></Provider>)
    expect(getByTestId('AppDiv')).toBeInTheDocument()
    expect(getByTestId('TodoPageDiv')).toBeInTheDocument()
    expect(getByTestId('TestButton')).toBeInTheDocument()
  })
  test('TestonClickEvent', () => {
    const { getByTestId } = render(<Provider store={store}><App /></Provider>)
    // const button = getByTestId('TestButton')
    const handleTestButton = require('./components/TestButton')
    // check the initial value
    // expect(button.handleTestButton).toBe(undefined)
    // simulate the onClick event on button
    // fireEvent.click(button)
    // check the value of the counter
    // expect(button.handleTestButton).toBe(undefined)
    expect(handleTestButton).toBe(undefined)
  })
})

// render() will render the component, can return functions like getByTestId, rerender, container etc
// describe() you can write many tests, there are scoping issues with describe and test.
// test() takes two parameters:
//   1. description of the test 
//   2. function which contains the implementation of this test.
//
// expect() is where we write our assertion, what we 'expect' to happen.
// getByTestId() is a function, we pass the data-testid as its argument to target the element.
// toBeInTheDocument() is a custom matcher provided by jest-dom, 
// it allows you to check if the target element is rendered into the dom properly.

//Notes: 
// The render launches from the App, the Provider of Redux is not read as its implemented in the index.js,
// thus you need to implement it in the render() function and wrapp the App component in it.
// 
// You cannot add data-testid directly on components!
