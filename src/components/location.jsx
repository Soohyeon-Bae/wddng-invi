import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Highlight = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  margin-bottom: 16px;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1752994469016",
    "key" : "t5chefvcj94",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
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
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1752994469016"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
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
        1호선, 수인분당선 수원역 하차 (4번 출구)
        <br />
        <br />
        <Title>기차 이용시</Title>
        <br />
        수원역 하차
        <br />
        <br />
        <Title>자가용 이용시</Title>
        <br />
        노보텔 앰배서더 수원: 경기 수원시 팔달구 덕영대로 902 
        <br />
        (호텔 정면 출입구 혹은 후면 주차장 진입로를 통해 출입하실 수 있습니다.)
      </Content>
    </Wrapper>
  );
};

export default Location;
