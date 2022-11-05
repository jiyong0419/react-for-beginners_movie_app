import { Link } from "react-router-dom";
// Link는 React에서 <a>태그 대신 사용하는것, <a>태그는 실행시 페이지가 re-load되어 state를 잃기때문이다

function Movie({ id, coverImg, title, summary = "", genres = [] }) {
  return (
    <div>
      <img src={coverImg}></img>
      <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
/* JSX풀이
<Link> => React에서 <a>태그 대신 사용하는것, <a>태그는 실행시 페이지가 re-load되어 state를 잃기 때문이다.
          Link to 는 이동할 경로를 적어준다.  a href 랑 같은 기능이라고 보면 된다.
          
*/
export default Movie;
