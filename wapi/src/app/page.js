"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {useState,useEffect} from "react"

import App from "@/components/App";
import ItemSingle from "@/components/ItemSingle";
import SearchBar from "@/components/SearchBar";
import { Text, Flex, Spinner } from "@chakra-ui/react";
// import { useSearch } from "../utils/search";
import { useSearch } from "../utils/search";

export default function Home() {
  const [_latitude, setLatitude1] = useState();
  const [_longitude, setLongitude ]= useState();
  // const {  search, onSearch } = useSearch();
  const items =[
    {name:'TRIBEEARTH',longitude:"39.583367066599514",latitude:"-4.294665222783007",phone:"",tags:""},
    {name:'SALTY SQUID',longitude:"39.563438280120444",latitude:"-4.350683128915565",phone:"",tags:{name:''}},
    // {name:'TRIBEEARTH',longitude:"",latitude:"",phone:"",tags:""},
    // {name:'TRIBEEARTH',longitude:"",latitude:"",phone:"",tags:""},
    // {name:'TRIBEEARTH',longitude:"",latitude:"",phone:"",tags:""},
    // {name:'TRIBEEARTH',longitude:"",latitude:"",phone:"",tags:""},
    // {name:'TRIBEEARTH',longitude:"",latitude:"",phone:"",tags:""},
]

  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLatitude1(latitude)
            setLongitude(longitude)
            distance(_latitude,_longitude,-4.294665222783007, 39.583367066599514,"k")

          
        })
    }
        	//add this below comment ↓ 
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      // if (unit=="N") { dist = dist * 0.8684 }
      return dist<1 ? 'nearby': Math.round(dist) + " km";
    }
  };

  return (
    // <main className={styles.main}>
      <App>
              <Text mb={2} fontSize="sm">
        {"Active "}
        <b>{"Items"}</b>
      </Text>
      <SearchBar  />
      {items.map((item,key) => <ItemSingle item={item} key={key} distance={distance} />)}

      {/* {loading ? (
        <Flex pt={24} align="center" justify="center">
          <Spinner size="xl" label="Loading items" />
        </Flex>
      ) : (
        <>
          {filteredItems.length ? (
            filteredItems.map((item) => <ItemSingle item={item} />)
          ) : (
            <EmptySearch />
          )} */}
          {/* <Flex justify="flex-end" as="i" color="gray.500">
            {`Showing ${filteredItems.length} out of ${allItems.length} items `}
          </Flex>
        </>
      )} */}

      </App>

      // {_latitude}  {' '}  {_longitude}{' '}
  
      // <div className={styles.center}>
      // {  distance(_latitude,_longitude,-4.294665222783007, 39.583367066599514,"k")}
      // </div>
    // </main>
  );
}

