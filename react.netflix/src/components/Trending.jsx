import { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Trending = (props) => {
  // state = {
  //   film: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const getFilm = async () => {
    try {
      const response = await fetch(props.gallery);
      if (response.ok) {
        const data = await response.json();
        console.log("SEARCH:", data.Search);
        // this.setState({ film: data.Search }, () => {
        //   console.log("ECCOLIIIII", this.state.film);
        // });
        setFilm(data.Search);
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
    <div className='container-fluid mt-5 ms-1'>
      <h2 className='text-white'>{props.subtitle}</h2>
      {isLoading && (
        <Spinner animation='border' variant='danger' className='text-center' />
      )}
      {isError && (
        <Alert variant='danger' className='fs-5 text-center'>
          <i class='bi bi-exclamation-triangle-fill fs-5'></i> Errore nel
          recupero dei film <i class='bi bi-exclamation-triangle-fill fs-5'></i>
        </Alert>
      )}
      <div
        id={props.carouselId}
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='5000'>
            <div className='row flex-column flex-md-row flex-nowrap'>
              {film.length > 6
                ? film.slice(0, 6).map((movie) => {
                    return (
                      <div key={movie.imdbID} className='col-8 col-md-2 g-1'>
                        {" "}
                        <img
                          className='card-img'
                          src={movie.Poster}
                          alt='sherlock'
                          onClick={() =>
                            navigate("/movieDetails/" + movie.imdbID)
                          }
                        />
                      </div>
                    );
                  })
                : film.map((movie) => {
                    return (
                      <div key={movie.imdbID} className='col-8 col-md-2 g-1'>
                        {" "}
                        <img
                          className='card-img'
                          src={movie.Poster}
                          alt='sherlock'
                          onClick={() =>
                            navigate("/movieDetails/" + movie.imdbID)
                          }
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className='carousel-item' data-bs-interval='5000'>
            <div className='row flex-column flex-md-row flex-nowrap'>
              {film.length > 6
                ? film.slice(0, 6).map((movie) => {
                    return (
                      <div key={movie.imdbID} className='col-8 col-md-2 g-1'>
                        {" "}
                        <img
                          className='card-img'
                          src={movie.Poster}
                          alt='sherlock'
                          onClick={() =>
                            navigate("/movieDetails/" + movie.imdbID)
                          }
                        />
                      </div>
                    );
                  })
                : film.map((movie) => {
                    return (
                      <div key={movie.imdbID} className='col-8 col-md-2 g-1'>
                        {" "}
                        <img
                          className='card-img'
                          src={movie.Poster}
                          alt='sherlock'
                          onClick={() =>
                            navigate("/movieDetails/" + movie.imdbID)
                          }
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev justify-content-start'
          type='button'
          data-bs-target={"#" + props.carouselId}
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next justify-content-end'
          type='button'
          data-bs-target={"#" + props.carouselId}
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Trending;
