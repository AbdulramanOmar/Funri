import { Hero, Testimeniol, Material } from "../component/index";
import service from "../component/Assent/couch.png";
import Services from "../component/Service/Services";
const Service = () => {
  return (
    <div className="Service">
      <Hero height="70vh" toogle={false} title={`Service`} img={service} />
      <div className="container">
        <Services toogle="repeat(auto-fill,minmax(300px,1fr))" />
        <Material />
        <Testimeniol />
      </div>
    </div>
  );
};

export default Service;
