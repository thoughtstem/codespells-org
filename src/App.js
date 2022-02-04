import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {BlogPage} from "./Pages/BlogPage"
import {HomePage} from "./Pages/HomePage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/blog" element={<BlogPage />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
