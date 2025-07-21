import React from "react";
// ImageGallery는 이제 Gallery 컴포넌트가 아닌 ImageModal 컴포넌트에서 사용됩니다.
// import ImageGallery from "react-image-gallery"; // 이 부분은 이제 필요 없습니다.
import { Divider } from "antd";
import styled from "styled-components";

// 이미지들을 불러옵니다.
import GalleryPhoto1 from "../assets/photo1.jpg";
import GalleryPhoto2 from "../assets/photo2.jpg";
import GalleryPhoto3 from "../assets/photo3.jpg";
import GalleryPhoto4 from "../assets/photo4.jpg";
import GalleryPhoto5 from "../assets/photo5.jpg";
import GalleryPhoto6 from "../assets/photo6.jpg";
import GalleryPhoto7 from "../assets/photo7.jpg";
import GalleryPhoto8 from "../assets/photo8.jpg";
import GalleryPhoto9 from "../assets/photo9.jpg";
import GalleryPhoto10 from "../assets/photo10.jpg";
// 만약 더 많은 사진이 있다면 여기에 추가 import 해주세요 (ex: GalleryPhoto11, GalleryPhoto12 ...)

const Wrapper = styled.div`
  padding-top: 63px;
  width: 90%; /* 화면 너비에 맞춰 조정 */
  max-width: 640px; /* 최대 너비 설정으로 PC에서 너무 넓어지지 않게 합니다. */
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

// 기존 'IMAGES' 배열에 'export' 키워드를 추가하여 외부에서 가져올 수 있도록 합니다.
export const IMAGES = [ // <-- 이곳에 'export' 키워드를 추가했습니다.
  { original: GalleryPhoto1, thumbnail: GalleryPhoto1 },
  { original: GalleryPhoto2, thumbnail: GalleryPhoto2 },
  { original: GalleryPhoto3, thumbnail: GalleryPhoto3 },
  { original: GalleryPhoto4, thumbnail: GalleryPhoto4 },
  { original: GalleryPhoto5, thumbnail: GalleryPhoto5 },
  { original: GalleryPhoto6, thumbnail: GalleryPhoto6 },
  { original: GalleryPhoto7, thumbnail: GalleryPhoto7 },
  { original: GalleryPhoto8, thumbnail: GalleryPhoto8 },
  { original: GalleryPhoto9, thumbnail: GalleryPhoto9 },
  { original: GalleryPhoto10, thumbnail: GalleryPhoto10 },
  // 20장을 채우려면 여기에 이미지를 더 추가해주세요.
  // 예시: { original: GalleryPhoto11, thumbnail: GalleryPhoto11 },
];

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4열 그리드 */
  gap: 8px; /* 썸네일 간 간격 */
  margin-top: 20px;
  padding-bottom: 42px;
`;

const ThumbnailItem = styled.div`
  width: 100%;
  padding-bottom: 100%; /* 1:1 비율 유지 */
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f0f0; /* 로딩 중 배경색 */
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 잘리지 않게 채움 */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* 호버 시 약간 확대 효과 */
  }
`;

// 부모(IndexPage)로부터 onThumbnailClick 이벤트를 props로 받습니다.
const Gallery = ({ onThumbnailClick }) => {
  // IMAGES 배열에서 최대 20개의 썸네일만 표시합니다.
  // 현재 10개의 이미지만 있으므로 10개가 모두 표시됩니다.
  const thumbnailsToShow = IMAGES.slice(0, 20);

  return (
    <Wrapper data-aos="fade-up">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Wedding Gallery</Title>
      </Divider>
      <ThumbnailGrid>
        {thumbnailsToShow.map((image, index) => (
          <ThumbnailItem key={index} onClick={() => onThumbnailClick(index)}>
            <ThumbnailImage src={image.thumbnail} alt={`웨딩 갤러리 썸네일 ${index + 1}`} />
          </ThumbnailItem>
        ))}
      </ThumbnailGrid>
    </Wrapper>
  );
};

export default Gallery;