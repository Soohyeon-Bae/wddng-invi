import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title_1 = styled.span`
  font-weight: bold;
  color: var(--title-color);
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.36vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 4.2vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4.7vw;
  }
`;

const Title = styled.span`
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.19vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.8vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4.3vw;
  }
`;

const Highlight = styled.span`
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.19vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.8vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4.3vw;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  margin-bottom: 16px;

  font-size: 0.98vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.2vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.7vw;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 640px;
  height: 360px;
  margin: 0 auto;
`;

const Location = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=본인_APPKEY&libraries=services";
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          // 지도 생성
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 초기 서울 시청 좌표
            level: 5,
          };
          const map = new window.kakao.maps.Map(container, options);

          // 장소 검색 객체 생성
          const ps = new window.kakao.maps.services.Places();

          // 검색 키워드
          const keyword = "노보텔 앰배서더 수원";

          // 키워드 검색
          ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const place = data[0]; // ✅ 첫 번째 결과만 사용
              const coords = new window.kakao.maps.LatLng(place.y, place.x);

              // 마커 생성
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 인포윈도우
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="padding:5px;font-size:14px;">${place.place_name}</div>`,
              });
              infowindow.open(map, marker);

              // 마커 클릭 → 장소 상세 페이지로 이동
              window.kakao.maps.event.addListener(marker, "click", () => {
                window.open(place.place_url, "_blank");
              });

              // 지도 중심 이동
              map.setCenter(coords);
            } else {
              alert("검색 결과를 찾을 수 없습니다.");
            }
          });
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title_1>오시는 길</Title_1>
      </Divider>
      <Image src={Flower} />

      {/* 카카오맵 영역 */}
      <MapContainer id="map" />

      <Content>
        <Highlight>노보텔 앰배서더 수원 2층 샴페인홀</Highlight>
        <br />
        경기 수원시 팔달구 덕영대로 902
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        수원역.노보텔수원 정류장 하차
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        수원역(1호선, 수인분당선) 하차 후 4번 출구 바로 앞
        <br />
        <br />
        <Title>기차 이용시</Title>
        <br />
        수원역 하차 후 THE AK TOWN 2층 연결통로 이용
        <br />
        <br />
        <Title>자가용 이용시</Title>
        <br />
        호텔 정면 주차장입구2 또는 후면 주차장입구1 이용
        <br />
        네비게이션 검색시 GATE 7번으로 진입
      </Content>
    </Wrapper>
  );
};

export default Location;
