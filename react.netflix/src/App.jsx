import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyNav from "./components/MyNav";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Trending from "./components/Trending";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <Trending
        carouselId='first'
        subtitle='Trending Now'
        gallery='https://www.omdbapi.com/?ap=90053f83&s=harry' //l'endpoint corretto sarebbe: https://www.omdbapi.com/?apikey=90053f83&s=harry
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

      <MyFooter />
    </>
  );
}

export default App;
