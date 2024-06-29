import { Link } from "react-router-dom";

export const Page2 = () => {
  const userId = 300;
  const userName = "hogehoge";
  return (
    <div>
      <h1>Page2ページです</h1>
      <nav>
        <ul className="ul">
          <li className="list">
            <Link to={`${userId}`}>URL Parameter</Link>
          </li>
          <li className="list">
            <Link to={`${userId}?username=${userName}`}>Query Parameter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
