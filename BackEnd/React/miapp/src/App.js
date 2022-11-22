import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="body-calculadora">
      <div>
        <input type="text" id="resultado" placeholder="0"></input>
      </div>
      <div class="num-container">
        <button class="s-button">7</button>
        <button class="s-button">8</button>
        <button class="s-button">9</button>
        <button class="s-button">+</button>
      </div>
      <div class="num-container">
        <button class="s-button">4</button>
        <button class="s-button">5</button>
        <button class="s-button">6</button>
        <button class="s-button">-</button>
      </div>
      <div class="num-container">
        <button class="s-button">1</button>
        <button class="s-button">2</button>
        <button class="s-button">3</button>
        <button class="s-button">/</button>
      </div>
      <div class="num-container">
        <button class="s-button">C</button>
        <button class="s-button">0</button>
        <button class="s-button">.</button>
        <button class="s-button">x</button>
      </div>
      <div class="num-container-2">
        <button class="s-button">v</button>
        <button class="s-button">v</button>
        <button class="s-button-2">=</button>
      </div>
    </div>
  );
}

export default App;
