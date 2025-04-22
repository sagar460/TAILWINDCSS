import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:id" element={<SingleBlog />}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/edit/:id" element={<EditBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
