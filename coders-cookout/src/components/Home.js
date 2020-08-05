import React from 'react';
import "../App.css"
import Image from './Images/Image'
import './Images/Image.css'

function Home() {
  return (
    <div className="homeDiv">
      <Image src="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
    </div>
    
  );
}

export default Home;