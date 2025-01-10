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
      <Trending gallery='https://www.omdbapi.com/?apikey=90053f83&s=harry' />
      <MyFooter />
    </>
  );
}

export default App;
