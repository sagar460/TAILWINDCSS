import { useEffect, useState } from "react";
import Card from "../assets/components/Card";
import Navbar from "../assets/components/Navbar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://mern3-node-y6pb.onrender.com/blog"
      );
      setBlogs(response.data.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {blogs.map(function (blog) {
          return <Card key={blog._id} blog={blog} />;
        })}
      </div>
    </>
  );
}
export default Home;
