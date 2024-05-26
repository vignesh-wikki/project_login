import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
       <Route path="/blog"  element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
