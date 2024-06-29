import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import { MainRouter } from "./router/MainRouter";

export const App = () => {
  return (
    <BrowserRouter basename="/app">
      <div className="App">
        <nav>
          <ul className="ul">
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/page1">Page1</Link>
            </li>
            <li className="list">
              <Link to="/page2">Page2</Link>
            </li>
          </ul>
        </nav>
        <MainRouter />
      </div>
    </BrowserRouter>
  );
};
