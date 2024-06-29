import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <nav>
        <ul className="ul">
          <li className="list">
            <Link to="/">ホーム画面</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
