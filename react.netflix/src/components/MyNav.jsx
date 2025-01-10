import { Component } from "react";

class MyNav extends Component {
  render() {
    return (
      <header className='container-fluid p-0 bg-black'>
        <nav className='navbar navbar-expand-lg py-2 mx-4'>
          <div className='container-fluid p-0'>
            <a className='navbar-brand' href='#'>
              <img
                src='public/img/netflix_logo.png'
                alt='logo Netflix'
                className='logoP2'
              />
            </a>
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
                    className='nav-link text-white'
                    aria-current='page'
                    href='#'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    TV Shows
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    Movies
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    Recently Added
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    My List
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav align-items-lg-center justify-content-end position-relative'>
                <li className='nav-item'>
                  <button className='btn p-0' type='button'>
                    <i className='bi bi-search text-white'></i>
                  </button>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    KIDS
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <i className='bi bi-bell-fill text-white'></i>
                  </a>
                </li>
                <li className='nav-item size'>
                  <a
                    className='nav-link dropdown-toggle'
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
      </header>
    );
  }
}

export default MyNav;
