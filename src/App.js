import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const despatch = useDispatch();

  return (
    <div className="App">
      <h1>counter = {counter}</h1>
      <button onClick={()=> despatch(increment(7))}>+</button>
      <button onClick={()=> despatch(decrement())}>-</button>
      {isLogged ? <h3>Valuble Date</h3> : ""}
    </div>
  );
}

export default App;
