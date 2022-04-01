import React from 'react'
import '../styles/App.css';
import image from './image.jpeg';

const App = () => {
  return (
    <div id="main">
  <img src={image} alt="image" id="resizable-img" height="320px" width="320px"/>
    </div>
  )
}


export default App;
