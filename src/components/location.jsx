import React, { useEffect } from "react";
import { Divider } from "antd"; // Ant Design의 Divider를 사용하고 계시는 것 같습니다.
import styled from "styled-components";
import Flower from "../assets/flower2.png"; // 이미지 경로 확인

// styled-components 정의 (이전 코드에서 제공해주신 내용)
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
  // Roughmap 실행 스크립트
  const executeScript = () => {
    if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
      new window.daum.roughmap.Lander({
        "timestamp": "1752994469016", // 이 값과 key는 퍼가려는 특정 지도와 일치해야 합니다.
        "key": "t5chefvcj94",
        "mapWidth": "640",
        "mapHeight": "360"
      }).render();
    } else {
      console.error("Kakao Roughmap script not loaded yet or Lander object is not available.");
    }
  };

  // Roughmap 설치 스크립트 (중복 로딩 방지 로직 개선)
  const InstallScript = () => {
    const scriptId = "kakao-roughmap-lander-script"; // 스크립트 중복 방지를 위한 고유 ID

    if (document.getElementById(scriptId)) {
      // 스크립트가 이미 DOM에 존재하면 다시 추가하지 않고 실행 함수 호출
      executeScript();
      return;
    }
    
    let protocol = window.location.protocol === "https:" ? "https:" : "http:";
    let cdnKey = "16137cec"; // 다음 로드맵 CDN 키

    // window.daum.roughmap 객체가 정의되지 않았다면 초기화
    window.daum = window.daum || {};
    window.daum.roughmap = window.daum.roughmap || { // 기존 속성 덮어쓰지 않도록 개선
      cdn: cdnKey,
      URL_KEY_DATA_LOAD_PRE: protocol + "//t1.daumcdn.net/roughmap/",
      url_protocal: protocol,
    };
    
    let scriptSrc =
      protocol +
      "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
      cdnKey +
      "/roughmapLander.js";

    const scriptTag = document.createElement("script");
    scriptTag.src = scriptSrc;
    scriptTag.id = scriptId; // 스크립트 ID 할당
    scriptTag.async = true; // 비동기 로딩으로 페이지 렌더링에 영향 최소화
    document.body.append(scriptTag); // body에 스크립트 추가

    scriptTag.onload = () => {
      executeScript(); // 스크립트 로드 완료 후 지도 실행
    };
    scriptTag.onerror = () => {
      console.error("Failed to load Kakao Roughmap script.");
    };
  };

  // 컴포넌트 마운트 시 스크립트 설치 및 지도 실행
  useEffect(() => {
    InstallScript();

    // 컴포넌트 언마운트 시 Roughmap이 남긴 흔적(script, div 내용)을 정리하는 로직 (선택 사항)
    return () => {
        const roughmapDiv = document.getElementById('daumRoughmapContainer1752994469016');
        if (roughmapDiv) {
            roughmapDiv.innerHTML = ''; // 내부 HTML 비워서 메모리 누수 방지
        }
        const script = document.getElementById('kakao-roughmap-lander-script');
        if (script) {
            script.remove(); // 추가했던 스크립트 태그 제거
        }
    };
  }, []); // 의존성 배열을 비워 컴포넌트 마운트 시 한 번만 실행되도록 함

  // 노보텔 앰배서더 수원 정보
  const venueName = "노보텔 앰배서더 수원";
  // Roughmap 퍼가기 방식은 자체적으로 위치를 포함하고 있으므로,
  // venueLat, venueLng, venuePlaceId는 roughmap 퍼가기 코드 자체에 들어있고,
  // 여기서는 클릭 시 앱/웹 링크 생성에만 활용됩니다.
  // const venueLat = "37.266205";
  // const venueLng = "126.999863";
  // const venuePlaceId = "11306354"; 

  // 카카오 맵 웹 페이지로 이동할 URL (장소 검색 기반)
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(venueName)}`;
 
  // 모바일 앱에서 직접 열릴 카카오맵 딥링크 (장소 검색 기반)
  const kakaoMapAppUrl = `kakaomap://search?q=${encodeURIComponent(venueName)}`;

  // 맵 클릭 시 실행될 함수: 앱 실행 시도 후 웹으로 폴백
  const handleMapClick = (e) => {
    e.preventDefault(); // 기본 링크 동작 (새 탭 열림) 방지

    // 1. 딥링크로 앱 실행 시도
    window.location.href = kakaoMapAppUrl;

    // 2. 일정 시간 후 앱이 열리지 않으면 웹 페이지로 리다이렉트 (폴백)
    const fallbackTimeout = setTimeout(() => {
      window.location.href = kakaoMapUrl; // <-- `kakaoMapWebUrl` 대신 `kakaoMapUrl`로 수정
    }, 1500); // 1.5초 후에도 앱이 열리지 않으면 웹으로 이동

    // 참고: 앱이 실행되면 브라우저는 백그라운드로 이동하기 때문에
    // 이 setTimeout이 실행되는 것을 직접적으로 취소하기는 어렵습니다.
    // 하지만 사용자 경험상 큰 문제는 없습니다.
  };

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title_1>오시는 길</Title_1>
      </Divider>
      <Image src={Flower} alt="웨딩 꽃 장식 이미지" /> {/* alt 속성 추가 권장 */}
      
      {/* 맵을 감싸는 링크 (웹으로 이동 우선) */}
      <MapContainerLink 
        href="" // onClick 핸들러로 동작을 제어하므로 href를 비워둡니다.
        // target="_blank" // onClick으로 제어하므로 이 속성은 불필요하거나 제거하는 것이 좋습니다.
        rel="noopener noreferrer" // 보안을 위한 설정
        aria-label={`${venueName} 지도 보기`} // 스크린 리더를 위한 설명
        onClick={handleMapClick} {/* <-- 중요한 수정! 이 부분에 이벤트 핸들러를 연결합니다. */}
      >
        <div
          id="daumRoughmapContainer1752994469016" // 이 ID는 Roughmap 퍼가기 코드에 있는 것과 일치해야 합니다.
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