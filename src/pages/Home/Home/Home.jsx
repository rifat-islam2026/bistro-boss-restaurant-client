import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";
import Chef from "../Chef/Chef";

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
    </div>
  );
}

export default Home
