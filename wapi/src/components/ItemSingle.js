import React, { useState,useEffect } from "react";
import { Collapse ,Badge,Tag} from "@chakra-ui/react";
import { Box, Heading, Text, Flex, Spacer,HStack } from "@chakra-ui/layout";
import { TriangleDownIcon, TriangleUpIcon, AtSignIcon } from "@chakra-ui/icons";
// import ItemDetail from "../components/ItemDetail";
// import EditItem from "../components/EditItem";



const badgeColors = {
  food: "teal",
  drinks: "red",
  hardware: "blue",
  textile: "orange",
  electronics: "yellow",
};

const ItemSingle = ({ item,key,distance}) => {
  const [itemDetail, setItemDetail] = useState(false);
  const [_latitude, setLatitude1] = useState();
  const [_longitude, setLongitude ]= useState();
  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLatitude1(latitude)
            setLongitude(longitude)
         

          
        })
    }
    	//add this below comment ↓ 
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  function ItemDetailHandler() {
    setItemDetail(!itemDetail);
  }
  return (
    <Box
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "dark-lg",
      }}
      key={key}
      borderWidth="1px"
      borderRadius={8}
      mb={2}
      p={8}
      shadow="md"
      margin={2}
    >
      <Flex justify="center" align="center" wrap="wrap" grow={1}>
        <Heading fontSize="md" mr={4}>
          {item.name.toLowerCase()}
        </Heading>
        {/* <Spacer /> */}
        {/* <AtSignIcon color="teal" /> */}
        {/* <Text> {item.price} </Text> */}

        <Spacer />
        <Badge mr={5} colorScheme={'teal'}>
            {   distance(_latitude,_longitude,item.latitude, item.longitude,"k")}
            
            </Badge>
{/* 
        {myItem ? (
          <EditItem item={item} />
        ) : (
          <>
            <Badge mr={5} colorScheme={badgeColors[item.category.name]}>
              {item.category.name}
            </Badge>

            <Box
              as="button"
              alignSelf="right"
              float="right"
              onClick={() => ItemDetailHandler()}
            >
              {itemDetail ? (
                <TriangleUpIcon color="red" boxSize={6} />
              ) : (
                <TriangleDownIcon color="teal" boxSize={6} />
              )}
            </Box>
          </>
        )} */}
      </Flex>
      <HStack spacing={4}>
  {['sm', 'sm', 'sm'].map((size) => (
    <Tag size={'sm'} key={size} variant='solid' colorScheme='teal'>
      Teal
    </Tag>
  ))}
</HStack>
{/* 
      {itemDetail && (
        <Collapse in={itemDetail} animateOpacity style={{ zIndex: 10 }}>
          <ItemDetail item={item} ItemDetailHandler={ItemDetailHandler} />
        </Collapse>
      )} */}
    </Box>
  );
};

export default ItemSingle;