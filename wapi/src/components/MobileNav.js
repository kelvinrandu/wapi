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
  Select,
} from "@chakra-ui/react";

import { FiMenu, FiChevronDown } from "react-icons/fi";

const MobileNav = ({ onOpen, ...rest }) => {
  //   const { user, error, isLoading } = useUser();
  //   const user_Id = user ? user.sub : [];
  //   const { data, loading } = useQuery(GET_UNREAD_ORDERS_FOR_ME_QUERY, {
  //     variables: { user_id: user_Id },
  //   });

  //   const allOrders = data ? data.orders : [];

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>{error.message}</div>;
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
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Wapi
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex>
          <Flex display={["flex", "flex", "flex"]} alignItems={"center"}>
            <Select placeholder="all">
              <option value="option1">near me</option>
    
            </Select>
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
