import { useEffect, useState } from 'react'
import useStore from "../app/store";
import { useExportGss } from '../app/store';
import './Home.css';

const { kakao } = window;

function Home() {
  const [toiletAllData, setToiletAllData] = useState([]);
  const lat = useStore((state) => state.lat);
  const lng = useStore((state) => state.lng);
  const getLocation = useStore((state) => state.getLocation);
  const exportToiletAll = useExportGss();
  const exportToiletAllData = exportToiletAll[0];

  useEffect(() => {
    getLocation();
  }, [navigator.geolocation]);

  useEffect(() => {
    if(exportToiletAllData || toiletAllData.length) {
      setToiletAllData(exportToiletAllData.data);
      console.log("데이터:::", exportToiletAllData.data)
    }
  }, [exportToiletAllData]);

  //현재 위치 마크
  kakao.maps.load(() => {
    const container = document.getElementById('map');
    let mapPosition = new kakao.maps.LatLng(lat, lng);
    const options = {
      center: mapPosition,
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    if (exportToiletAllData) {
      for (let i = 0; i < exportToiletAllData.data.length; i++) {
        const imageSize = new kakao.maps.Size(24, 35);
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        let toiletPosition = new kakao.maps.LatLng(exportToiletAllData.data[i].WSG84Yaxis, exportToiletAllData.data[i].WSG84Xaxis);

        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: toiletPosition, // 마커를 표시할 위치
          title : exportToiletAllData.data[i].buildingName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨
          image : markerImage // 마커 이미지
        });

        marker.setMap(map);
      }
  }
    const markerPosition  = new kakao.maps.LatLng(lat, lng); //현재 위치 마크
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    });

  return (
    <>
      <div className="App">
        <div id="map" className="map"/>
      </div>
    </>
  )
}

export default Home

