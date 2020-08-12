import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function Header(){
  return(
    <div>
      <center>
    <nav id="nav" class="navbar-right navbar-expand-sm bg-light">

   <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/controls">Controls</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/play">Play</a>
    </li>
     </ul>
    </nav>
      <div className="header">
        </div>
       <center>
 <h1 class="title"><em>JUST DISTANCE </em></h1>
 </center>
 </center>
 </div>

  )
}

export default Header
