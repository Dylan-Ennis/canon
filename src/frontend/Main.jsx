import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

function Main({stories}) {
  return(

  <App>
    <div className='story' style= {{color:"black",backgroundColor:"#897e5d"}}>
      <p>Tup tup tup tup tup tup tup tup tup tup tup tup tup tup tup tup tup</p>
    </div>
    <nav style={{color:"#897e5d",}}>Info Log:
    <ul>
            <li>Info Log:</li>
            <li>Original Title: Tup</li>
            <li>Original Author: Tup202116</li>
            <li>Word Count: 500</li>
            <li>Canon Continuations: 10</li>
            <li>Fanon Continuations: 30</li>
          </ul>
    </nav>

  
  </App>

  )
}

export default Main;