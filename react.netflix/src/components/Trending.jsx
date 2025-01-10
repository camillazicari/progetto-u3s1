import { Component } from "react";

class Trending extends Component {
  state = {
    film: [],
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
        <h2 className='text-white'>Trending Now</h2>
        <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active' data-bs-interval='5000'>
              <div className='row flex-column flex-md-row flex-nowrap'>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media0.webp'
                    alt='sherlock'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media1.jpg'
                    alt='american factory'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media2.webp'
                    alt='genius of the modern world'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media3.webp'
                    alt='cuba and the cameraman'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media4.jpg'
                    alt='the social dilemma'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media5.webp'
                    alt='the social dilemma'
                  />
                </div>
              </div>
            </div>
            <div className='carousel-item' data-bs-interval='5000'>
              <div className='row flex-column flex-md-row flex-nowrap'>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media6.jpg'
                    alt='sherlock'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media7.webp'
                    alt='american factory'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media8.webp'
                    alt='genius of the modern world'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media9.jpg'
                    alt='cuba and the cameraman'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media10.jpg'
                    alt='the social dilemma'
                  />
                </div>
                <div className='col-8 col-md-2 g-1'>
                  {" "}
                  <img
                    className='card-img'
                    src='assets/img/media/media11.jpg'
                    alt='the social dilemma'
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev justify-content-start'
            type='button'
            data-bs-target='#carouselExampleInterval'
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
            data-bs-target='#carouselExampleInterval'
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
