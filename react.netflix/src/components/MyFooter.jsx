import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer className='mt-5 d-flex justify-content-center bg-black'>
        <div className='container-fluid' id='footer'>
          <div className='row mb-3'>
            <div className='col-md-12'>
              <button
                type='button'
                className='bg-transparent border-0 p-0 pe-4'
              >
                <i className='bi bi-facebook fs-4'></i>
              </button>
              <button
                type='button'
                className='bg-transparent border-0 p-0 pe-4'
              >
                <i className='bi bi-instagram fs-4'></i>
              </button>
              <button
                type='button'
                className='bg-transparent border-0 p-0 pe-4'
              >
                <i className='bi bi-twitter fs-4'></i>
              </button>
              <button
                type='button'
                className='bg-transparent border-0 p-0 pe-4'
              >
                <i className='bi bi-youtube fs-4'></i>
              </button>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3'>
              <p>Audio and Subtitles</p>
            </div>
            <div className='col-md-3'>
              <p>Audio description</p>
            </div>
            <div className='col-md-3'>
              <p>Help Center</p>
            </div>
            <div className='col-md-3'>
              <p>Gift Cards</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3'>
              <p>Media Center</p>
            </div>
            <div className='col-md-3'>
              <p>Investor Relations</p>
            </div>
            <div className='col-md-3'>
              <p>Jobs</p>
            </div>
            <div className='col-md-3'>
              <p>Corporate Information</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3'>
              <p>Privacy</p>
            </div>
            <div className='col-md-3'>
              <p>Legal Notices</p>
            </div>
            <div className='col-md-3'>
              <p>Cookie Preferences</p>
            </div>
            <div className='col-md-3'>
              <p>Terms of Use</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3'>
              <p>Contact Us</p>
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-3'></div>
            <div className='col-md-3'></div>
          </div>

          <button
            type='button'
            className='btn bg-black rounded-0 border-secondary text-secondary mb-2'
          >
            Service Code
          </button>
          <p id='copy'>&copy 1997-2021 Netflix, inc.</p>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
