import React from 'react';
import { createStore } from 'redux';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let timePassed = store.getState();
    return (
      <div>
        <h1>My timer:</h1>
        <p>{timePassed}</p>
	      <button onClick={() => {
      	  store.dispatch({
      	    type: 'INCREMENT'
      	  })
      	}}>
    	  Add time
      	</button>
      </div>
    );
  }
}

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

// const render = () => {
//   ReactDOM.render(
//     <App
//       timePassed={store.getState()}
//     />,
//     document.getElementById('app')
//     );
// };

// Create the Redux store, and specify that timer is the reducer function that will determine what happens to the state.
const store = createStore(timer);
store.subscribe(render);


//store.subscribe() => {
//  console.log(store.getState())
//};

//document.addEventListener('click', () => {
//  store.dispatch({ type: 'INCREMENT' });
//});

render(<App/>, document.getElementById('app'));
