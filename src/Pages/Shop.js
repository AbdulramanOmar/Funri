import { Hero } from "../component/index";
import couch from "../component/Assent/couch.png";
import Card from "../component/Card/Card";
const Shop = () => {
  return (
    <div className="shop">
      <Hero height="70vh" toogle={false} title={`Shop`} img={couch} />
      <Card />
    </div>
  );
};

export default Shop;
