import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
          <Banner />
          <Category/>
    </div>
  );
}

export default Home
