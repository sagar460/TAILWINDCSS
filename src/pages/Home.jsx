import Card from "../assets/components/Card";
import Navbar from "../assets/components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
export default Home;
