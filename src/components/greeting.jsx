import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  /* 기존 스타일 유지 */
  /* font-size: 0.875rem; */
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

  /* --- 이 부분을 추가/수정하여 반응형 글자 크기를 적용합니다. --- */

  /* 기본 (큰 화면) 에서의 글자 크기: 뷰포트 너비의 2.2% */
  /* 0.875rem은 약 14px인데, 2.2vw는 대략 1920px 화면에서 42px 정도 됩니다.
     기존 크기(0.875rem)를 유지하고 싶으시다면 vw 값을 조정하거나,
     vw를 너무 크게 주지 않도록 주의해주세요.
     예시: font-size: 0.6vw; 정도면 1920px 화면에서 약 23px 정도 됩니다.
     이 값은 qotn님의 디자인 의도에 맞춰 조절하셔야 합니다. */
  font-size: 0.6vw; /* PC, 태블릿 등 넓은 화면에서 사용될 폰트 크기 비율 */
  
  /* 한글 줄바꿈 시 단어가 잘리지 않도록 (권장) */
  word-break: keep-all;

  /* 작은 화면 (모바일)에 대한 미디어 쿼리 적용 */
  @media screen and (max-width: 768px) {
    /* 화면 너비가 768px 이하일 때 글자 크기 조정 */
    /* 모바일에서는 vw 단위를 너무 작게 설정하면 글자가 안 보일 수 있으므로
       적절한 vw 값을 찾아주시거나, rem 또는 px 단위로 고정할 수도 있습니다. */
    font-size: 3.5vw; /* 예를 들어, 360px 모바일 화면에서 약 12.6px */
    line-height: 1.6; /* 모바일에서 줄 간격 미세 조정 (선택 사항) */
  }

  @media screen and (max-width: 480px) {
    /* 더 작은 화면 (아주 작은 모바일)에 대한 추가 미디어 쿼리 */
    font-size: 4vw; /* 예를 들어, 360px 모바일 화면에서 14.4px */
  }
`;

const GroomBride = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        매년 눈 내리는 겨울이 오면,
        <br />
        <br />
        이 날의 사진첩을 꺼내보며 행복했던 기억을 떠올릴 것입니다.
        <br />
        <br />
        그 때, 그 사진 속에,
        <br />
        <br />
        함께 웃고 있는 여러분이 있었으면 좋겠습니다.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
