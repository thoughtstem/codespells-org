import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {BlogIndexPage} from "./Pages/Blog"
import {HomePage} from "./Pages/HomePage"
import {allBlogPosts} from "./Pages/Blog/index"
import {Page} from "./Components/Page"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/blog" element={<BlogIndexPage />} /> 
          {allBlogPosts().map(b => {
            let TheBlogContent = b.component
            let TheBlogPage = <Page><TheBlogContent /></Page> 
            return <Route path={"/blog/" + b.slug} element={TheBlogPage} />})}
        </Routes>
      </Router>
    </>
  );
}

export default App;
