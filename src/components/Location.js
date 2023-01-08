import React, { useEffect } from "react";
import useStore from "../app/store";

export default function Location() {
  const lat = useStore((state) => state.lat);
  const lng = useStore((state) => state.lng);
  const status = useStore((state) => state.status);
  const getLocation = useStore((state) => state.getLocation);

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
