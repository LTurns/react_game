import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import Hero from '../src/hero'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.fillRect(20, 20, 100, 100);

let hero = new Hero();
hero.draw(ctx);

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '39') {
      console.log(hero);
      hero.moveRight()
      ctx.clearRect(0, 0, 800, 600);
      hero.draw(ctx)
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
