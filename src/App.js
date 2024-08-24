import "./App.css";
import lamine from "./lamine.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "blue" }}>
          Matt<span style={{ color: "red" }}>hew</span>
        </p>
        <a
          className="App-link"
          href="https://www.fcbarcelona.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Barcelona
        </a>
        <a
          href="https://www.mundodeportivo.com/"
          target="_blank"
          className="App-link"
          rel="noopener noreferrer"
        >
          mundodeportivo
        </a>
        <a
          href="https://www.comedera.com/wp-content/uploads/2022/02/croissant-relleno-de-chocolate.jpg"
          className="App-link"
          target="_blank"
          style={{ color: "brown" }}
          rel="noopener noreferrer"
        >
          croissant de chocolate 🥐🥐
        </a>

        <a
          href="https://www.ea.com/es-es/games/ea-sports-fc/fc-24"
          style={{ color: "black" }}
          rel="noopener noreferrer"
        >
          fc24
        </a>
        <img
          src={lamine}
          style={{ width: "80%", marginTop: "25px" }}
          alt="lamine yamal and nico williams dancing"
        ></img>
      </header>
    </div>
  );
}

export default App;
