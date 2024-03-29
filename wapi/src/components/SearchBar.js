import React from "react";
import { useColorModeValue,Input,InputGroup,InputLeftElement,Flex} from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";

const SearchBar = () => {
    const bg = useColorModeValue("#F2F1F9", "rgb(103 101 113 / 4%)");
    const color = useColorModeValue("black", "white");
 
  return (
    <Flex align={"center"}>
      {/* <InputGroup
        display={["block", "block", "block"]}
        width="100%"
        ml={16}
        mr={16}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="teal" />}
        />
        <Input
          placeholder="write something here ..."
          color="teal"
       
          focusBorderColor="red"
          size="sm"
          variant="filled"
          // w={[200, 200, 600]}
          key="random1"
        //   value={search}
        //   onChange={ onSearch}
        />
      </InputGroup> */}
        <InputGroup>
    {/* <InputLeftElement pointerEvents='none'>
      <Search2Icon color='gray.300' />
    </InputLeftElement> */}
    <InputLeftElement pointerEvents='none'>
  <Search2Icon color='gray.300' />
</InputLeftElement>
    <Input  placeholder='write something here ...' />
  </InputGroup>
    </Flex>
  );
};

export default SearchBar;