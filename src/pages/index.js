import React, { useEffect, useState } from "react";
import { Layout, Modal } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css"; // antd 스타일 임포트

// --- 새로 추가된/수정된 임포트 시작 ---
import Gallery, { IMAGES } from "../components/gallery"; // Gallery 컴포넌트와 IMAGES 배열 임포트
import ImageModal from "../components/ImageModal"; // ImageModal 컴포넌트 임포트
import Snowfall from 'react-snowfall'; // 눈 내리는 효과 라이브러리 임포트
// --- 새로 추가된/수정된 임포트 끝 ---

import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css"; // 전역 스타일 임포트

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
  position: relative; /* Snowfall이 Wrapper 내에서 z-index를 사용할 수 있도록 설정 */
`;

const IndexPage = () => {
  // 모달의 열림/닫힘 상태를 관리합니다.
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 현재 모달에서 보여줄 이미지의 인덱스를 관리합니다.
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 갤러리 썸네일 클릭 시 호출될 함수입니다.
  // 클릭된 이미지의 인덱스를 받아 모달을 열고 해당 이미지를 표시합니다.
  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // 모달 닫기 버튼 또는 외부 클릭 시 호출될 함수입니다.
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      // 오타 수정: romoveChile -> removeChild
      document.body.removeChild(script);
    };
  }, []); // 빈 배열을 추가하여 컴포넌트 마운트 시 한 번만 실행되도록 수정

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []); // 빈 배열을 추가하여 컴포넌트 마운트 시 한 번만 실행되도록 수정

  return (
    <Wrapper>
      {/* --- 눈 내리는 효과 컴포넌트 추가 시작 --- */}
      <Snowfall
        style={{
          position: 'fixed', // 화면에 고정
          width: '100vw',    // 뷰포트 너비 전체
          height: '100vh',   // 뷰포트 높이 전체
          zIndex: 999,       // 다른 요소들보다 위에 나타나도록 z-index를 높게 설정
          pointerEvents: 'none', // 눈 효과가 다른 요소의 클릭 이벤트를 방해하지 않도록 설정
        }}
        snowflakeCount={150} // 눈송이 개수
        color="#c8e4f5"      // 눈송이 색상
        speed={[0.2, 0.8]}   // 눈송이 떨어지는 속도 범위
        wind={[-0.1, 0.2]}    // 바람 효과 범위
      />
      {/* --- 눈 내리는 효과 컴포넌트 추가 끝 --- */}

      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      {/* Gallery 컴포넌트에 썸네일 클릭 이벤트를 처리할 함수를 props로 전달합니다. */}
      <Gallery onThumbnailClick={handleThumbnailClick} />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        © Shin Jooyoung 2022. Customization © Soohyeon-Bae 2025. All rights reserved.
      </Footer>

      {/* 이미지를 팝업으로 보여줄 Ant Design의 Modal 컴포넌트입니다. */}
      <Modal
        visible={isModalOpen} // 모달의 표시 여부
        onCancel={handleModalClose} // 모달이 닫히려고 할 때 호출될 함수 (예: X 버튼 클릭, ESC 키 누름, 모달 외부 클릭)
        footer={null} // 모달 하단의 기본 푸터(OK, Cancel 버튼)를 제거합니다.
        centered // 모달을 화면 중앙에 배치합니다.
        width="90%" // 모달의 너비를 화면 너비의 90%로 설정합니다. 필요에 따라 조절하세요.
        bodyStyle={{ padding: 0 }} // 모달 본문 영역의 내부 패딩을 제거합니다.
        destroyOnClose={true} // 모달이 닫힐 때 내부 컴포넌트 인스턴스를 파괴하여 메모리를 확보합니다.
        style={{ top: 20 }} // 모달의 상단 여백을 주어 모바일에서 너무 위로 붙는 것을 방지합니다.
      >
        {/* 모달 내부에 표시될 ImageModal 컴포넌트입니다. */}
        <ImageModal
          images={IMAGES} // components/gallery.jsx에서 가져온 전체 이미지 배열을 전달합니다.
          startIndex={selectedImageIndex} // 모달이 열릴 때 처음 보여줄 이미지의 인덱스를 전달합니다.
          isOpen={isModalOpen} // ImageModal 내부 로직을 위해 모달의 열림 상태를 전달합니다.
          // onThumbnailClick을 ImageModal에 전달할 필요는 없습니다. 썸네일은 Gallery에서 처리합니다.
        />
      </Modal>
    </Wrapper>
  );
};

// ----- ⭐ 여기에 Gatsby Head API를 추가합니다! ⭐ -----
export const Head = () => (
  <>
    {/* 웹 브라우저 탭에 표시되는 제목 */}
    <title>호상♥수현 결혼합니다</title>

    {/* 오픈 그래프(Open Graph) 메타 태그들 */}
    {/* og:url은 실제 배포된 사이트 URL로 변경해주세요. */}
    <meta property="og:url" content="https://hosooweddinginvitation.netlify.app" />
    <meta property="og:title" content="윤호상❤배수현 결혼식에 초대합니다" />
    <meta property="og:type" content="website" />
    {/* og:image 경로는 Netlify 배포 후 실제로 접근 가능한 thumbnail.jpg의 정확한 URL을 넣어주세요. */}
    {/* (만약 public/assets/thumbnail.jpg에 두셨고 빌드 후에도 그 경로라면 아래와 같이 사용) */}
    <meta property="og:image" content="https://hosooweddinginvitation.netlify.app/thumbnail.jpg" />
    <meta property="og:description" content="귀한 걸음 하시어 저희의 새로운 시작을 축복해 주시면 감사하겠습니다🤵👰" />
    <meta property="og:site_name" content="호상♥수현 청첩장" />

  </>
);

export default IndexPage;