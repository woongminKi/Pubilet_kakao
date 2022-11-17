import React, { useEffect, useState } from "react";
import useStore from "../app/store";

export default function Location() {
  // const lat = useStore((state) => state.lat);
  // const { lat, setLat, lng, setLng, status, setStatus, getLocation } = useStore(
  //   (state) => state
  // );

  const lat = useStore((state) => state.lat);
  const lng = useStore((state) => state.lng);
  const status = useStore((state) => state.status);
  const getLocation = useStore((state) => state.getLocation);
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //     console.log("네비게이터 없어:::", setStatus);
  //   } else {
  //     setStatus("Locating...");
  //     console.log("네비게이터 파악중:::", status);
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setStatus(null);
  //         setLat(position.coords.latitude);
  //         console.log("lat::", lat);
  //         console.log("setLat::", setLat);
  //         setLng(position.coords.longitude);
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your loaction");
  //       }
  //     );
  //   }
  // };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>longitude: {lng}</p>}
    </>
  );
}
