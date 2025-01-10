import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyNav from "./components/MyNav";
import "./App.css";
import MyFooter from "./components/MyFooter";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <MyNav />
      <MyFooter />
    </>
  );
}

export default App;
