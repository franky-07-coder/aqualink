import HeroSection from "./components/HeroSection";


const Home = () => {
  const data = {
    name: "aqualinc",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
