import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const reactRender = ReactDOM.createRoot(document.getElementById('root'))
  
let count = 0;

setInterval(() => {
    reactRender.render(
    <React.StrictMode>
 <Home count= {count}/>
 <div className="counter d-flex">
  
 </div>

  </React.StrictMode>,
    )
    count++
  }, 1000);
  
   


