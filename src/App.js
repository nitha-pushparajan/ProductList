import Home from "./Pages/Home";

import "./App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <a href="/">Product Search</a>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
