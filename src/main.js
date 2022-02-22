'ust strict';

import Buttons from './buttons.js';

const LATITUDE = 37.55916069282345;
const LONGITUDE = 126.8410640925702;

const mapOptions = {
    center: new naver.maps.LatLng(LATITUDE, LONGITUDE), // 지도의 초기 중심 좌표(위도와 경도)
    zoom: 18, // 지도의 초기 줌 레벨
    zoomControl: true, // 줌 컨트롤 표시 여부
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
    },
};

const map = new naver.maps.Map('map', mapOptions);
const btns = new Buttons(map);

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
