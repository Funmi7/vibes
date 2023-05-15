import { VStack } from "@chakra-ui/react";

import MainLayout from "layouts/MainLayout";
import TopSection from "./components/TopSection";
import TrackItems from "./components/TrackItems";

const TracksList = () => {
  return (
    <MainLayout>
      <VStack w="full">
        <TopSection />
        <TrackItems />
      </VStack>
    </MainLayout>
  );
};

export default TracksList;
