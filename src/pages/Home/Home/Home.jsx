import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Services from "../Services/Services";
import PopularMenu from "../PopularMenu/PopularMenu";

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
    </div>
  );
}

export default Home
