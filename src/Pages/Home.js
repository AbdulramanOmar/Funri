import {
  Hero,
  Testimeniol,
  Material,
  Modern,
  ChooseUs,
  Popular,
} from "../component/index";
import couch from "../component/Assent/couch.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="home">
      <Hero
        height="calc(100vh - 91px)"
        toogle={true}
        title={`Modern Interior Design Studio`}
        img={couch}
      />
      <div className="container">
        <Material />
        <ChooseUs />
        <Modern />
        <Popular />
        <Testimeniol />
      </div>
    </div>
  );
};

export default Home;
