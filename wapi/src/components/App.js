import React, { ReactNode, useState } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,

} from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";


  const App = ({children,setSelected,selected,options}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
    console.log(`Option selected:`, selectedOption)
  }


  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav setSelected={setSelected} selected={selected} options={options} onOpen={onOpen} />
      <Box >
        {children}
      </Box>
    </Box>
  );
};

export default App;