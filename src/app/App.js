import Home from "../components/Home";
import Main from "../components/Main";
import { useEffect, useState } from 'react';
import useStore from "./store";
import { useExportGss } from "./store";

const { Tmapv2 } = window;

function App() {
  // const [toiletAllData, setToiletAllData] = useState([]);
  // const lat = useStore((state) => state.lat);
  // const lng = useStore((state) => state.lng);
  // const getLocation = useStore((state) => state.getLocation);
  // const exportToiletAll = useExportGss();
  // const exportToiletAllData = exportToiletAll[0];


  // useEffect(() => {
  //   getLocation();
  // }, [navigator.geolocation]);

  // // useEffect(() => {
  // //   if(exportToiletAllData) {
  // //     setToiletAllData(exportToiletAllData.data);
  // //   }
  // // }, [exportToiletAllData]);

  // useEffect(() => {
  //   initTmap();

  // console.log("lat:", lat)
  // console.log("lng:", lng)
  // }, []);

  // function initTmap(){
  //   const map = new Tmapv2.Map("map_div",
  //   {
  //     center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841), // 지도 초기 좌표
  //     width: "890px",
  //     height: "400px",
  //     zoom: 15
  //   });
  // }

  return (
    <>
      {/* <Home /> */}
      <Main />
      {/* <div id="map_div"></div> */}
    </>
  );
}

export default App;
