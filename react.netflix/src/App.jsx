import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyNav from "./components/MyNav";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Trending from "./components/Trending";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixHome from "./components/NetflixHome";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path='/' element={<NetflixHome />} />
        <Route
          path='/trending'
          element={
            <>
              <Trending
                carouselId='first'
                subtitle='Trending Now'
                gallery='https://www.omdbapi.com/?apikey=90053f83&s=harry'
              />
              <Trending
                carouselId='second'
                subtitle='Watch It Again'
                gallery='https://www.omdbapi.com/?apikey=90053f83&s=avengers'
              />
              <Trending
                carouselId='third'
                subtitle='New Releases'
                gallery='https://www.omdbapi.com/?apikey=90053f83&s=galaxy'
              />
            </>
          }
        />
        <Route path='/movieDetails/:filmId' element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
