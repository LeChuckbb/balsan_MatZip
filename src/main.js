'ust strict';

import Buttons from './buttons.js';

const mapOptions = {
    center: new naver.maps.LatLng(37.55916069282345, 126.8410640925702), // 지도의 초기 중심 좌표(위도와 경도)
    zoom: 18, // 지도의 초기 줌 레벨
    zoomControl: true, // 줌 컨트롤 표시 여부
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
    },
};

const map = new naver.maps.Map('map', mapOptions);
