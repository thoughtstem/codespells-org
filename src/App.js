import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {BlogPage} from "./Pages/BlogPage"
import {HomePage} from "./Pages/HomePage"
import AuthoringToolsHelloWorldPost from "./Pages/AuthoringToolsHelloWorldPost"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/blog" element={<BlogPage />} /> 
          <Route path="/blog/getting-started-with-the-codespells-authoring-tools" element={<AuthoringToolsHelloWorldPost />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
