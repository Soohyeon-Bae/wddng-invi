import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        나는 당신 자체를 사랑할 뿐 아니라,
        <br />
        당신과 함께 있을 때의 나를 사랑합니다.
        <br />
        <br />
        나는 당신이 이룬 것을 사랑할 뿐 아니라,
        <br />
        당신이 나를 만들어가는 모습을 사랑합니다.
        <br />
        <br />
        - Roy Croft, Love -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
