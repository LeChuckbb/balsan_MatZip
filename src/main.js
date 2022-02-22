'ust strict';

import Buttons from './buttons.js';

const LATITUDE = 37.55916069282345;
const LONGITUDE = 126.8410640925702;
const HOME_COORDINATE = new naver.maps.LatLng(LATITUDE, LONGITUDE);

/* 지도 초기상태 정의 및 초기화 */
const mapOptions = {
    center: HOME_COORDINATE, // 지도의 초기 중심 좌표(위도와 경도)
    zoom: 18, // 지도의 초기 줌 레벨
    minZoom: 6,
    zoomControl: true, // 줌 컨트롤 표시 여부
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
    },
};
const map = new naver.maps.Map('map', mapOptions);
const btns = new Buttons(map);

/* CustomControl 객체를 이용한 '발산역 엘크루' 버튼 추가하기 */
// exam ) 사용자 정의 컨트롤 만들기
const locationBtnHtml = `<a href="#" class="btn_mylct">
                                <span class="spr_trff spr_ico_mylct">발산역 청년주택</span>
                        </a>`;

naver.maps.Event.once(map, 'init', function () {
    const customControl = new naver.maps.CustomControl(locationBtnHtml, {
        position: naver.maps.Position.TOP_LEFT,
    });

    customControl.setMap(map); // map에 보이게 하는 것?

    naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
        map.setCenter(new naver.maps.LatLng(LATITUDE, LONGITUDE));
    });
});

/* HOME Marker 추가하기 */
// exam) 이미지 아이콘 사용하기
const HOME_PATH = window.HOME_PATH || '.';
const homePosition = HOME_COORDINATE;

const markerOptions = {
    position: homePosition.destinationPoint(90, 15),
    map: map,
    icon: {
        url: `${HOME_PATH}/img/house.jpg`,
        size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0), // 이미지의 원점
        anchor: new naver.maps.Point(25, 26), // 지도 위에 놓이는 마커의 위치와 일키시킬 아이콘의 기준 위치. default -> 아래쪽 가운데
    },
};

const marker = new naver.maps.Marker(markerOptions);
console.log(marker);

const marker2 = new naver.maps.Marker({
    position: HOME_COORDINATE,
    map: map,
});
