import { FC, ReactNode } from "react";
import { Box, Skeleton, SkeletonText, Flex } from "@chakra-ui/react";

const numberOfCounts = new Array<number>(5).fill(0);

type MiddleSkeletonProps = {
  isLoaded: boolean;
  children: ReactNode;
};

const MiddleSectionSkeleton: FC<MiddleSkeletonProps> = ({
  isLoaded,
  children,
}) => {
  if (isLoaded) {
    return <>{children}</>;
  }
  return (
    <Box mt="43px" w="full">
      <SkeletonText width="100px" noOfLines={1} />
      <Flex mt="13px" w="full" flexWrap="wrap">
        {numberOfCounts.map((_, index) => (
          <Skeleton
            w="153px"
            h="153px"
            borderRadius="25px"
            key={`mid-section-skel-${index}`}
            mr="30px"
            mb="20px"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default MiddleSectionSkeleton;
