import Banner from "./Banner";
import MealsByCategory from "./Meals/MealsByCategory";
import MembershipSection from "./Member/MembershipSection";

const Home = () => {
    return (
        <div className="space-y-10">
          <Banner></Banner>
          <MealsByCategory></MealsByCategory>
          <MembershipSection></MembershipSection>
        </div>
    );
};

export default Home;