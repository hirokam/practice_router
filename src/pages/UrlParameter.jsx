import { useLocation, useNavigate, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { userId } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const navigate = useNavigate();

  const onClickBack = () => navigate("/page2");
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{userId}です</p>
      <p>クエリパラメーターは{query.get("username")}です</p>
      <button onClick={onClickBack}>Page2に戻る</button>
    </div>
  );
};
