import { Component } from "react";
import { Link } from "react-router-dom";

class MyNav extends Component {
  render() {
    return (
      <header className='container-fluid p-0 bg-black'>
        <nav className='navbar navbar-expand-lg py-2 mx-3'>
          <div className='container-fluid p-0'>
            <Link className='navbar-brand' to={"/trending"}>
              <img
                src='public/img/netflix_logo.png'
                alt='logo Netflix'
                className='logoP2'
              />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-lg-between'
              id='navbarNav'
            >
              <ul className='navbar-nav ms-lg-5'>
                <li className='nav-item'>
                  <a
                    className='nav-link text-secondary'
                    aria-current='page'
                    href='#'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    TV Shows
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    Movies
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    Recently Added
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    My List
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav align-items-lg-center justify-content-end position-relative'>
                <li className='nav-item'>
                  <button className='btn p-0' type='button'>
                    <i className='bi bi-search text-secondary'></i>
                  </button>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-secondary' href='#'>
                    KIDS
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <i className='bi bi-bell-fill text-secondary'></i>
                  </a>
                </li>
                <li className='nav-item size'>
                  <a
                    className='nav-link dropdown-toggle text-secondary'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img
                      className='w-100'
                      src='public/img/avatar.png'
                      alt='avatar Netflix'
                    />
                  </a>
                  <ul className='dropdown-menu dropdown-menu-lg-end dropdown-menu-dark bg-black p-0 position-absolute'>
                    <li className='d-flex align-items-end'>
                      <img
                        className='w-25 ms-3'
                        src='public/img/avatar.png'
                        alt='avatar'
                      />
                      <a
                        className='dropdown-item px-2 text-white'
                        href='#'
                        id='realUserName'
                      >
                        Epicoder #1
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item text-white' href='#'>
                        Manage Profiles
                      </a>
                    </li>

                    <li>
                      <a className='dropdown-item text-white' href='#'>
                        Account
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item text-white' href='#'>
                        Help Center
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider text-white' />
                    </li>
                    <li>
                      <a className='dropdown-item text-white' href='#'>
                        Signout Netflix
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='text-white mt-3 overflow-hidden'>
          <div className='container-fluid text-white ms-3 pe-5 d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
              <h1 className='me-4' id='tvShows'>
                TV Shows
              </h1>
              <select
                name='generi'
                className='bg-black border border-white text-white p-1'
              >
                <option value='vario'>Genres</option>
                <option value='romance'>Romance</option>
                <option value='thriller'>Thriller</option>
                <option value='horror'>Horror</option>
              </select>
            </div>
            <div className='d-flex align-items-end'>
              <button
                type='button'
                className='bg-black border border-white text-white py-1 px-3'
              >
                <i className='bi bi-text-left'></i>
              </button>
              <button
                type='button'
                className='bg-black border border-white text-white py-1 px-3'
              >
                <i className='bi bi-grid'></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default MyNav;
