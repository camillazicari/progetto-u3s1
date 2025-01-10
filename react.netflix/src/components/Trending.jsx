import { Component } from "react";
import { Spinner } from "react-bootstrap";

class Trending extends Component {
  state = {
    film: [],
    isLoading: true,
  };

  getFilm = async () => {
    try {
      const response = await fetch(this.props.gallery);
      if (response.ok) {
        const data = await response.json();
        console.log("SEARCH:", data.Search);
        this.setState({ film: data.Search }, () => {
          console.log("ECCOLIIIII", this.state.film);
        });
        this.setState({ isLoading: false });
      } else {
        throw new Error("errore nel recupero");
      }
    } catch {
      console.log("ERRORE", Error);
    }
  };

  componentDidMount() {
    this.getFilm();
  }
  render() {
    return (
      <div className='container-fluid mt-5 ms-1'>
        <h2 className='text-white'>{this.props.subtitle}</h2>
        {this.state.isLoading && (
          <Spinner
            animation='border'
            variant='danger'
            className='text-center'
          />
        )}
        <div
          id={this.props.carouselId}
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active' data-bs-interval='5000'>
              <div className='row flex-column flex-md-row flex-nowrap'>
                {this.state.film.length > 6
                  ? this.state.film.slice(0, 6).map((movie) => {
                      return (
                        <div key={movie.imbdID} className='col-8 col-md-2 g-1'>
                          {" "}
                          <img
                            className='card-img'
                            src={movie.Poster}
                            alt='sherlock'
                          />
                        </div>
                      );
                    })
                  : this.state.film.map((movie) => {
                      return (
                        <div key={movie.imbdID} className='col-8 col-md-2 g-1'>
                          {" "}
                          <img
                            className='card-img'
                            src={movie.Poster}
                            alt='sherlock'
                          />
                        </div>
                      );
                    })}
              </div>
            </div>
            <div className='carousel-item' data-bs-interval='5000'>
              <div className='row flex-column flex-md-row flex-nowrap'>
                {this.state.film.length > 6
                  ? this.state.film.slice(0, 6).map((movie) => {
                      return (
                        <div key={movie.imbdID} className='col-8 col-md-2 g-1'>
                          {" "}
                          <img
                            className='card-img'
                            src={movie.Poster}
                            alt='sherlock'
                          />
                        </div>
                      );
                    })
                  : this.state.film.map((movie) => {
                      return (
                        <div key={movie.imbdID} className='col-8 col-md-2 g-1'>
                          {" "}
                          <img
                            className='card-img'
                            src={movie.Poster}
                            alt='sherlock'
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
            data-bs-target={"#" + this.props.carouselId}
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
            data-bs-target={"#" + this.props.carouselId}
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
  }
}

export default Trending;
