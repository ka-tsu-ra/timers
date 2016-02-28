import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

// Reducer function.
// For now, the representation of time passing will just be a number that you manually increment.
const timer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } 
  else {
    return state;
  } 
};
// Create the Redux store, and specify that timer is the reducer function that will determine what happens to the state.
const store = createStore(timer);
store.subscribe(() => {
  console.log(store.getState())
});

document.addEventListener('click', () => {
  store.dispatch( { type: 'INCREMENT' });
});

class App extends React.Component {

  render () {
    let timePassed = store.getState();
    return (
      <div>
        <h1>My timer:</h1>
        <p>{timePassed}</p>	
      </div>
    )
  }
}
render(<App/>, document.getElementById('app'));


