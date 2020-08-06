// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {isAuthenticated} from './actions'
function App() {
  const [count,setCount]=React.useState(0)
  const [data,setdata]=React.useState([])
  const {post:{lst}}=useSelector(state=>state)
  const dispatch=useDispatch()
 useEffect(()=>{
   alert("here called")
  //  const fetchFnc=async()=>{
  //   const hitApi=await fetch('https://api.github.com/users')
  //  const js=await hitApi.json()
  //  console.log(js)
  //   setdata(js)
  //  }
  //  fetchFnc()

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
{count}

<button onClick={()=>setCount(count+1)}>incrment</button>
<button onClick={()=>setCount(count-1)}>deccrment</button>
<button onClick={()=>dispatch({type:isAuthenticated})}>fetch list</button>

{JSON.stringify(lst)}
    </>
  );
}

export default App;
