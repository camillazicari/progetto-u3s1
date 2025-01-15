import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, ListGroup, Row, Col } from "react-bootstrap";

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "http://www.omdbapi.com/?apikey=90053f83&i=";
  const url2 = "https://striveschool-api.herokuapp.com/api/comments/";

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

  const getComments = async () => {
    try {
      const response = await fetch(url2 + param.filmId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzY5NTM0MjYsImV4cCI6MTczODE2MzAyNn0.Dk1W85tOvce7zgi5rKsLiW1oqkoCaGdlp2E_t-g0RdM",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("COMMENTI:", data);
        // this.setState({ film: data.Search }, () => {
        //   console.log("ECCOLIIIII", this.state.film);
        // });
        setComment(data);
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
    getComments();
  }, []);
  return (
    <Container>
      <Row className='flex-column'>
        <Col xs={12} className='d-flex justify-content-center'>
          <Card style={{ width: "25rem" }} className='my-5'>
            <Card.Img variant='top' src={film.Poster} className='h-75' />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>{film.Plot}</Card.Text>
              <Button variant='primary' onClick={() => navigate("/trending")}>
                Torna alla home
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <h3 className='text-white'>Recensioni del film:</h3>
          <ListGroup className='d-flex justify-content-center'>
            {comment.length > 0 ? (
              comment.map((oneComment) => {
                return (
                  <ListGroup.Item key={oneComment._id}>
                    {oneComment.comment}
                  </ListGroup.Item>
                );
              })
            ) : (
              <h4 className='text-white-50'>
                Spiacenti, non ci sono recensioni per questo film...
              </h4>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
