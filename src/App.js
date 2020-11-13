import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement, sign_in,logout} from './actions';
//use Selector can 

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.login);
  const dispatch = useDispatch(); //use dispatcher is used to dispatch the counter
  console.log(isLogged);
  return (
    <div className="App">
     <h1>Counter  {counter}</h1>
     <button onClick={()=>dispatch(increment(5))}>+</button>
     <button onClick={()=>dispatch(decrement(4))}>-</button>

     <h3>is User Logged {isLogged}</h3>
     <button onClick={()=>dispatch(sign_in())}>Login</button>
     <button onClick={()=>dispatch(logout())}> Logout</button>
    </div>
  );
}

export default App;
