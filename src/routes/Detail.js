import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams(); // 해당 Route가 지니고있는 parameter를 id에 담는다. 원형은 const id = useParams().id
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json(); // const json = await(awiat fetch()).json() 이형태를 익혀두자
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Movie id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} genres={movie.genres}></Movie>
    </div>
  );
}
export default Detail;
