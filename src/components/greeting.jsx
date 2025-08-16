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
  /* font-size: 1rem; */
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
  
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

const Content = styled.p`
  /* font-size: 0.875rem; */
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;

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

const GroomBride = styled.p`
  /* font-size: 1rem; */
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;

  
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
        저희는 이 날의 사진첩을 꺼내보며  
        <br/>
        가장 행복했던 기억을 떠올릴 것입니다.
        <br />
        <br />
        그 때, 그 사진 속에,
        <br />
        <br />
        함께 웃고 있는 여러분이 있었으면 
        <br/>
        좋겠습니다.
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
