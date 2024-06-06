import { Hero, Testimeniol, ChooseUs } from "../component/index";
import Team from "../component/Team/Team";
import about from "../component/Assent/couch.png";
const About = () => {
  return (
    <div className="about">
      <Hero height="70vh" toogle={false} title={`About`} img={about} />
      <div className="container">
        <ChooseUs />
        <Team />
        <Testimeniol />
      </div>
    </div>
  );
};

export default About;
