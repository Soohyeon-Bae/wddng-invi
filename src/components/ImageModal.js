import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

// 이미지 크기 확대/축소, 저장 방지 CSS (선택 사항)
const StyledImageGallery = styled(ImageGallery)`
  .image-gallery-slide .image-gallery-image {
    object-fit: contain; /* 이미지가 잘리지 않고 전체 보이도록 조정 */
    max-height: 80vh; /* 화면 높이에 맞춰 최대 높이 설정 */
    width: auto; /* 너비는 자동으로 조정 */
    margin: 0 auto;
    user-select: none; /* 드래그 선택 방지 */
    -webkit-user-select: none; /* 웹킷 브라우저 */
    -moz-user-select: none; /* 모질라 브라우저 */
    -ms-user-select: none; /* 인터넷 익스플로러 */
  }

  .image-gallery-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000; /* 배경색 어둡게 */
  }

  .image-gallery-content.fullscreen {
    background-color: #000; /* 풀스크린 시 배경색 */
  }
`;

const ImageModal = ({ images, startIndex, isOpen, onClose }) => {
  if (!isOpen) {
    return null; // 모달이 닫혀있을 때는 렌더링하지 않음
  }

  // react-image-gallery 포맷에 맞게 images 배열 변환
  const galleryImages = images.map((image) => ({
    original: image.original, // 원본 이미지 경로
    thumbnail: image.thumbnail, // 썸네일 이미지 경로 (사용하지 않아도 됨)
    // 기타 필요한 속성 (예: description, originalAlt)
  }));

  return (
    <StyledImageGallery
      items={galleryImages}
      startIndex={startIndex} // 시작 인덱스 설정
      showPlayButton={false} // 슬라이드쇼 버튼 비활성화
      showFullscreenButton={false} // 풀스크린 버튼 비활성화
      showThumbnails={false} // 하단 썸네일 비활성화
      showNav={true} // 좌우 이동 화살표 활성화
      infinite={true} // 무한 반복 활성화
      // onSlide={idx => console.log('Current slide index:', idx)} // 슬라이드 변경 시 이벤트
    />
  );
};

export default ImageModal;
