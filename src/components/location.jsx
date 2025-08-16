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
  /* font-size: 1rem; */
  font-weight: bold;
  color: var(--title-color);
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.36vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

const Title = styled.span`
  /* font-size: 0.875rem; */
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.19vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

const Highlight = styled.span`
  /* font-size: 1rem; */
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;

  font-size: 1.36vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  /* font-size: 0.72rem; */
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  margin-bottom: 16px;

  font-size: 0.98vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  }
`;

const MapContainerLink = styled.a` /* <a> 태그를 감쌀 스타일드 컴포넌트 */
  display: block; /* 블록 요소로 만들어 전체 Map 영역이 클릭되도록 */
  width: 100%;
  max-width: 640px;
  height: auto; /* 내부 컨텐츠에 따라 높이 조절 */
  padding: 0;
  text-decoration: none; /* 링크 밑줄 제거 */
  color: inherit; /* 텍스트 색상 상속 */
  cursor: pointer; /* 클릭 가능한 요소임을 나타냄 */
  margin: 0 auto; /* 중앙 정렬 */

  & > div { /* Map 컴포넌트 내부의 div에 적용 */
    width: 100%;
    height: 360px; /* 카카오 맵 스크립트의 mapHeight와 일치 */
  }
`;


const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    // 맵 스크립트가 로드되었는지 확인 후 실행
    if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
      new window.daum.roughmap.Lander({
        "timestamp" : "1752994469016",
        "key" : "t5chefvcj94",
        "mapWidth" : "640",
        "mapHeight" : "360"
      }).render();
    } else {
      console.error("Kakao Roughmap script not loaded yet.");
    }
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        // 이미 스크립트가 삽입되었다면 다시 삽입하지 않음
        executeScript(); // 스크립트가 이미 로드된 경우 바로 맵 렌더링 시도
        return;
      }
      
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
      scriptTag.onerror = () => {
        console.error("Failed to load Kakao Roughmap script.");
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []); // 의존성 배열에 InstallScript를 추가하지 않습니다. 함수가 리렌더링될 때마다 새로운 함수를 생성하기 때문입니다.

  // 노보텔 앰배서더 수원 주소와 좌표
  const venueName = "노보텔 앰배서더 수원";
  const venueLat = "37.266205"; // 위도
  const venueLng = "126.999863"; // 경도
  const kakaoMapUrl = `https://map.kakao.com/link/map/${venueName},${venueLat},${venueLng}`; // 웹용 카카오 맵 링크
  const kakaoAppUrl = `kakaomap://look?p=${venueLat},${venueLng}`; // 카카오맵 앱 바로가기 링크 (딥링크)

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title_1>오시는 길</Title_1>
      </Divider>
      <Image src={Flower} />
      
      {/* 맵을 감싸는 링크 (웹으로 이동 우선) */}
      {/* 딥링크를 지원하려면 navigator.userAgent를 이용한 조건부 렌더링이 필요하지만, 여기서는 웹 링크를 기본으로 하고 
          앱에서 자동으로 열리기를 기대하거나, 사용자가 브라우저에서 '앱에서 열기'를 선택하도록 유도합니다. */}
      <MapContainerLink 
        href={kakaoMapUrl} // 웹 브라우저에서 열릴 카카오 맵 URL
        target="_blank" // 새 탭 또는 새 창으로 열기
        rel="noopener noreferrer" // 보안을 위한 설정
        aria-label={`${venueName} 지도 보기`} // 스크린 리더를 위한 설명
        // 모바일 환경에서 앱으로 바로 열리게 하려면 아래 딥링크를 시도할 수 있지만, 
        // 앱이 설치되어 있지 않은 경우 오류가 발생할 수 있으므로 일반적으로 웹 링크를 fallback으로 사용합니다.
        // onClick={(e) => { 
        //   e.preventDefault(); 
        //   window.location.href = kakaoAppUrl; // 앱 시도
        //   setTimeout(() => { // 일정 시간 후 앱으로 열리지 않으면 웹으로 리다이렉트
        //     window.location.href = kakaoMapUrl;
        //   }, 1000); 
        // }}
      >
        <div
          id="daumRoughmapContainer1752994469016"
          className="root_daum_roughmap root_daum_roughmap_landing"
        ></div>
      </MapContainerLink>

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
        수원역(1호선,수인분당선) 하차 후 4번 출구 바로 앞
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
