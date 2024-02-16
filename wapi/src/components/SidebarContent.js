import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  useColorMode,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { FaPaperPlane, FaDolly, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/router";
// import { ReactText } from "react";

import Filters from "@/components/Filter";
import AddItemModal from "./AddItemModal";



const LinkItems = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Inbox", path: "/myOrders", icon: FaEnvelope },
  { name: "Outbox", path: "/orders", icon: FaPaperPlane },
  { name: "My Items", path: "/items", icon: FaDolly },
];


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflow={{ base: "scroll", md: "auto" }}
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="10"
        mb={10}
        justifyContent="space-between"
      >
        <Text fontSize="xl" fontFamily="monospace" fontWeight="bold">
          Wapi
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} path={link.path} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}

      {/* <Filters /> */}
      {/* <AddItemModal /> */}
    </Box>
  );
};

const NavItem = ({ icon, children, path }) => {
  const { colorMode } = useColorMode();
  const hoverColor = { light: "gray.900", dark: "whiteAlpha.900" };
  const activeColor = { light: "teal.800", dark: "teal.200" };
  const activeBg = { light: "teal.500", dark: "gray.700" };
//   const router = useRouter();
  const style = {
    marginRight: 10,
    bg: activeBg[colorMode],
    rounded: "sm",
    borderRadius: 4,
    // color: router.asPath === path ? activeColor[colorMode] : "gray",
    color:  "gray",
    textDecoration: "none",
  };
  const handleClick = (e) => {
    e.preventDefault();
    // router.push(path);
  };

  return (
    <Link href={path} onClick={handleClick} style={style}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: hoverColor[colorMode],
          transform: "translateX(2px)",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: hoverColor[colorMode],
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
export default SidebarContent;