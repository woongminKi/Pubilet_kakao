import React, { useEffect, useState } from "react";

export default function Location() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your loaction");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      {/* <button onClick={getLocation}>Get Location</button> */}
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Latitude: {lng}</p>}
    </>
  );
}
