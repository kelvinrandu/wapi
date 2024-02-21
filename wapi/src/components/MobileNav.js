import React from "react";
import {
  IconButton,
  Icon,
  AvatarBadge,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Stack,
  useColorModeValue,
  Link,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Badge,
} from "@chakra-ui/react";
import Select from "react-select";
import Image from "next/image";
import { FiMenu, FiChevronDown } from "react-icons/fi";

const MobileNav = ({ onOpen, selected, setSelected, options }) => {
  console.log("options", options);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);

  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      // {...rest}
    >
      <Box>

     
      <IconButton
        display={{ base: "none", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
       </Box>

      {/* <HStack
        maxWidth={200}
        border={"1px solid red"}
        gap={6}
        spacing={{ base: "6", md: "6" }}
      >
        <Flex justifyContent={{ base: "space-between", md: "flex-end" }}>
          <Image
            src="/Bildmarke.svg"
            width={32}
            height={32}
            alt="Picture of the author"
          />
          <Image src="/wapi.svg" width={52} height={52} alt="Logo" />
        </Flex>
      </HStack> */}
      <Stack direction={['row', 'row']} spacing={'6px'}>
      <Image
            src="/Bildmarke.svg"
            width={32}
            height={32}
            alt="Picture of the author"
          />
 <Image src="/wapi.svg" width={52} height={52} alt="Logo" />
</Stack>

      <HStack     spacing={{ base: "0", md: "6" }}>
        <Flex display={{ base: "none", md: "none" }}>
          <Flex display={["flex", "flex", "flex"]} alignItems={"center"}>
            <Select
              onChange={(event) => handleChange(event)}
              value={selected}
              options={options}
            />
          </Flex>
          <Flex display={["none", "none", "none"]} alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} />

                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    {/* {user ? (
                    <Text fontSize="sm">{user.name}</Text>
                  ) : (
                    <Text fontSize="sm">annonymous</Text>
                  )} */}
                    <Text fontSize="sm">annonymous</Text>

                    <Text fontSize="xs" color="gray.600">
                      Wapi
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
