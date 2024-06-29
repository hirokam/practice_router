import { Link } from "react-router-dom";
import "../App.css";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <nav>
        <ul className="ul">
          <li className="list">
            <Link to="detail_a">Page1DetailA</Link>
          </li>
          <li className="list">
            <Link to="detail_b">Page1DetailB</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
