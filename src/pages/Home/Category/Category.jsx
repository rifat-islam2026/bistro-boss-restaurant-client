import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20">
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="oder online"
      />
      <CategoryCard />
    </div>
  );
}

export default Category
