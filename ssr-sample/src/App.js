// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react'
import {HelmetCmp} from './HelmetCmp'
function App() {
  const [count, setCount] = React.useState(0)
  const [data, setdata] = React.useState([])
  useEffect(() => {
    // alert("here called")
    const fetchFnc = async () => {
      const hitApi = await fetch('https://api.github.com/users')
      const js = await hitApi.json()
      console.log(js)
      setdata(js)
    }
    fetchFnc()

  }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>j
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <HelmetCmp />
      {count}
      <button onClick={() => setCount(count + 1)}>incrment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      {data && JSON.stringify(data)}
    </>
  );
}

export default App;
