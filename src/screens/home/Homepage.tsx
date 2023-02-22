import MainLayout from "layouts/MainLayout";
import MiddleSection from "./components/MiddleSection";
import TopSection from "./components/TopSection";

const Homepage = () => {
  return (
    <MainLayout>
      <TopSection />
      <MiddleSection />
    </MainLayout>
  );
};

export default Homepage;
