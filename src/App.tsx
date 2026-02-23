import {useState}from "react";
function App(){
  const [count,setCount]=useState(0);
  const increment=():void=>{
    setCount(count+1);
    
};
  return (
    <div>
      <h1>React + TypeScript - 2500040083 - M Sai Dhanush</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default App;