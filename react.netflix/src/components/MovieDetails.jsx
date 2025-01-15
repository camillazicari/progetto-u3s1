import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "http://www.omdbapi.com/?apikey=90053f83&i=";

  const navigate = useNavigate();
  const param = useParams();

  const getFilm = async () => {
    try {
      const response = await fetch(url + param.filmId);
      if (response.ok) {
        const data = await response.json();
        console.log("SEARCH:", data);
        // this.setState({ film: data.Search }, () => {
        //   console.log("ECCOLIIIII", this.state.film);
        // });
        setFilm(data);
        //this.setState({ isLoading: false });
        setIsLoading(false);
      } else {
        throw new Error("errore nel recupero");
      }
    } catch {
      console.log("ERRORE", Error);
      //this.setState({ isError: true, isLoading: false });
      setIsLoading(false);
      setIsError(true);
    }
  };

  // componentDidMount() {
  //   this.getFilm();
  // }

  useEffect(() => {
    getFilm();
  }, []);
  return (
    <Card>
      <Card.Img variant='top' src={film.Poster} style={{ width: "18rem" }} />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>{film.Plot}</Card.Text>
        <Button variant='primary' onClick={() => navigate("/trending")}>
          Torna alla home
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
