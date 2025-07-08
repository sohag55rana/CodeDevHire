// import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategory from "../components/TabCategory";

const Home = () => {
  // const jobs = useLoaderData();
  // console.log(jobs, "all jobs");
  return (
    <div className="space-y-10">
      <Carousel></Carousel>
      {/* <TabCategory jobs={jobs}></TabCategory> */}
      <TabCategory></TabCategory>
    </div>
  );
};

export default Home;
