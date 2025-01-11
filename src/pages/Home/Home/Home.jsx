import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
          <Banner />
          <Category />
          <Services />
          <PopularMenu />
          <Contact />
          <Chef />
          <Featured/>
    </div>
  );
}

export default Home
