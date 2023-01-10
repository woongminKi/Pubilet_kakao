import { useEffect, useState } from 'react';
import useStore from "../app/store";
import { useExportGss } from '../app/store';
import "./Main.css";

const { Tmapv2 } = window;

export default function Main() {
  const [toiletAllData, setToiletAllData] = useState([]);
  const lat = useStore((state) => state.lat);
  const lng = useStore((state) => state.lng);
  const status = useStore((state) => state.status);
  const getLocation = useStore((state) => state.getLocation);
  const exportToiletAll = useExportGss();
  const exportToiletAllData = exportToiletAll[0];
  const markerList = [];
  const pointArray = [];

  useEffect(() => {
    getLocation();
  }, [navigator.geolocation]);

  useEffect(() => {
    if (lat && lng) {
      initTmap();
    }
  }, [lat, lng]);

  useEffect(() => {
    if(exportToiletAllData) {
      setToiletAllData(exportToiletAllData.data);
    }
  }, [exportToiletAllData]);

  function initTmap() {
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(lat, lng),
      width: "100%",
      height: "600px",
      zoom: 15
    });

    const marker = new Tmapv2.Marker({
      position: new Tmapv2.LatLng(lat, lng),
      map: map,
    });


    if (exportToiletAllData) {
      for (let i = 0; i < exportToiletAllData.data.length; i++) {
        let toiletPosition = new Tmapv2.LatLng(exportToiletAllData.data[i].WSG84Yaxis, exportToiletAllData.data[i].WSG84Xaxis);

        const marker = new Tmapv2.Marker({
          map: map,
          position: toiletPosition,
          icon: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          title : exportToiletAllData.data[i].buildingName,
        })
      }
    }

    // addMarker(map);
    // addMarker("llStart", lat, lng, 1);
    // addMarker("llEnd", 127.11971717230388,37.49288934463672, 2);
    // addMarker("llPass",127.07389565460413,37.5591696189164,3);
    // addMarker("llPass",127.13346617572014,37.52127761904626,4);
  }

  // function addMarker(map, status, lng, lat, tag) {
  //   let imgURL = null;
  //   switch (status) {
  //     case "llStart":
	// 		  imgURL = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png';
	// 		  break;
	// 	  case "llPass":
	// 		  imgURL = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png';
	// 		  break;
	// 	  case "llEnd":
	// 		  imgURL = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png';
	// 		  break;
	// 	  default:
  //   };

  //   const marker = new Tmapv2.Marker({
  //     position: new Tmapv2.LatLng(lat, lng),
  //     icon: imgURL,
  //     map: map,
  //   });

  //   marker.tag = tag;
  //   marker.addListener("dragend", function(e) {
  //     markerListenerEvent(e);
  //   });

  //   marker.addListener("drag", function(e) {
  //     markerObject = markerList[tag];
  //   });

  //   markerList[tag] = marker;

  //   return marker;
  // }


  return (
    <>
      <div className="App">
        <div id="map_div" className="map" />
      </div>
    </>
  )
}
