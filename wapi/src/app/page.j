"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {useState,useEffect} from "react"

export default function Home() {
  const [_latitude, setLatitude1] = useState();
  const [_longitude, setLongitude ]= useState();

  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLatitude1(latitude)
            setLongitude(longitude)
  const [_latitude, setLatitude] = useState();
  distance(_latitude,_longitude,-4.294665222783007, 39.583367066599514,"k")

          
        })
    }
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
      return dist + " km";
    }
  };

  return (
    <main className={styles.main}>
      {/* {distance(
        -4.294665222783007,
        39.583367066599514,
        -4.350683128915565,
        39.563438280120444,
        "K"
      )} */}
      {_latitude}  {' '}  {_longitude}{' '}
  
      <div className={styles.center}>
      {  distance(_latitude,_longitude,-4.294665222783007, 39.583367066599514,"k")}
      </div>
    </main>
  );
}

