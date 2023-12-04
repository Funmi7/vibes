import {
  HStack,
  Box,
  Skeleton,
  SkeletonText,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type TopSectionSkeletonProps = {
  isLoaded: boolean;
  children: ReactNode;
};
const numberOfCounts = new Array<number>(3).fill(0);

const TopSectionSkeleton: FC<TopSectionSkeletonProps> = ({
  isLoaded,
  children,
}) => {
  if (isLoaded) {
    return <>{children}</>;
  }
  return (
    <Flex justifyContent="space-between" w={{ sm: "100%", "2xl": "100%" }}>
      <Skeleton
        width="686px"
        height="373px"
        bg="#609EAF"
        borderRadius="40px"
        alignItems="flex-start"
        pl="45px"
      />
      <VStack spacing={3} alignItems="flex-start" ml="22px" w="50%">
        <SkeletonText noOfLines={1} w="100px" mb="14px" />
        {numberOfCounts.map((_, index) => (
          <HStack
            bg="menuBg"
            py="17px"
            pl="17px"
            pr="21px"
            w="100%"
            justifyContent="space-between"
            alignItems="flex-start"
            key={`top-sekelton-${index}`}
          >
            <HStack>
              <Skeleton w="63px" h="63px" borderRadius="10px" />
              <Box pl={3.5}>
                <SkeletonText w="100px" noOfLines={1} mt="2" />
                <SkeletonText w="100px" noOfLines={1} mt="2" />
                <SkeletonText w="100px" noOfLines={1} mt="2" />
              </Box>
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
};

export default TopSectionSkeleton;
