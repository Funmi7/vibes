import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "design/icons/SearchIcon";

const SearchComponent = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<SearchIcon h="4" w="4" />} />
        <Input
          id="search"
          border="none"
          placeholder="Search artists"
          fontWeight="boldSm"
          fontSize="sm"
          lineHeight="18px"
          color="gray.100"
          _placeholder={{
            fontWeight: "boldSm",
            fontSize: "sm",
            lineHeight: "18px",
            color: "gray.100",
          }}
        />
      </InputGroup>
    </>
  );
};

export default SearchComponent;
