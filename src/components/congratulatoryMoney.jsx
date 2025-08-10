import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
// CheckCircleTwoTone 아이콘은 더 이상 사용하지 않으므로 임포트에서 제거합니다.
// import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";

// 사용할 이미지 파일들을 임포트합니다. 실제 파일 경로와 이름으로 바꿔주세요.
import GroomConfirmIcon from "../assets/GroomImageIcon.png"; // 예: 신랑측 전용 이미지
import BrideConfirmIcon from "../assets/BrideImageIcon.png"; // 예: 신부측 전용 이미지

import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 63px;
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;

  /* font-size: 0.6vw;
  word-break: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 1.6;
  }

  @media screen and (max-width: 480px) {
    font-size: 4vw;
  } */
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;
const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid #efddde;
  padding: 2.188rem 0;
  display: flex; /* 내부 요소들을 정렬하기 위해 flex 사용 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 (내부 콘텐츠가 남는 경우) */
  cursor: pointer; /* 클릭 가능한 요소임을 표시 */
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

// 커스텀 이미지를 위한 스타일드 컴포넌트 추가
const CustomIconImage = styled.img`
  width: 64px; /* 기존 CheckCircleTwoTone의 fontSize와 비슷하게 맞춤 */
  height: 64px;
  margin-bottom: 16px;
  object-fit: contain; /* 이미지가 잘리지 않도록 조절 */
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Image src={Flower} />
      <Content data-aos="fade-up">
        소중한 마음을 전해 주시는 분들을 위해
        <br/>
        조심스레 마음 담을 곳을 마련했습니다. 
        <br />
        늘 고마움을 잊지 않겠습니다.
      </Content>

      <ButtonWrap>
        <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          {/* 신랑측 아이콘을 커스텀 이미지로 대체 */}
          <CustomIconImage src={GroomConfirmIcon} alt="신랑측 계좌 확인 아이콘" />
          <SubContent>신랑측 계좌번호 확인</SubContent>
        </ContactButton>
        <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
          {/* 신부측 아이콘을 커스텀 이미지로 대체 */}
          <CustomIconImage src={BrideConfirmIcon} alt="신부측 계좌 확인 아이콘" />
          <SubContent>신부측 계좌번호 확인</SubContent>
        </ContactButton>
      </ButtonWrap>
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description key="groom-desc">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description key="bride-desc">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
