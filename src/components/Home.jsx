import React, { useEffect, useRef, useState } from "react";
import Location from "./Location";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

export default function Home() {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries: ["places"],
  // });

  // useEffect(() => {
  //   Location();
  // }, []);

  return (
    <>
      <Location />
    </>
  );
}
