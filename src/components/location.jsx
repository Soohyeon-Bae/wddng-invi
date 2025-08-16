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
    font-size: 4.2vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4.7vw;
  }
`;

const Title = styled.span`
  /* font-size: 0.875rem; */
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
  /* font-size: 0.875rem; */
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
    font-size: 3.2vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.7vw;
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
  // venueLat, venueLng, venuePlaceId는 길찾기 또는 마커 표시에 활용될 수 있지만,
  // 검색 결과 링크에서는 직접 사용되지 않습니다.
  // const venueLat = "37.266205"; // 위도
  // const venueLng = "126.999863"; // 경도
  // const venuePlaceId = "11306354"; // 노보텔 앰배서더 수원 고유 ID

  // **변경 지점: 카카오 맵 링크를 장소 검색 모드로 변경**
  // 장소 이름을 직접 검색어로 사용하여 카카오맵 검색 결과 페이지로 연결합니다.
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(venueName)}`; 
  // encodeURIComponent를 사용하여 한글 이름이 URL 인코딩되도록 합니다.
 
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
      >
        <div id="roughmap_canvas_1752994469016" className="roughmap_canvas_class"></div>
      </MapContainerLink>
    </Wrapper>
  );
};

export default Location;
