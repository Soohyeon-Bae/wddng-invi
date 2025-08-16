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
import GalleryPhoto28 from "../assets/photo28.jpg";
import GalleryPhoto20 from "../assets/photo20.jpg";
import GalleryPhoto24 from "../assets/photo24.jpg";
import GalleryPhoto14 from "../assets/photo14.jpg";
import GalleryPhoto11 from "../assets/photo11.jpg";
import GalleryPhoto12 from "../assets/photo12.jpg";
import GalleryPhoto25 from "../assets/photo25.jpg";
import GalleryPhoto26 from "../assets/photo26.jpg";
import GalleryPhoto15 from "../assets/photo15.jpg";
import GalleryPhoto13 from "../assets/photo13.jpg";
import GalleryPhoto21 from "../assets/photo21.jpg";
import GalleryPhoto27 from "../assets/photo27.jpg";
import GalleryPhoto23 from "../assets/photo23.jpg";
import GalleryPhoto30 from "../assets/photo30.jpg";
import GalleryPhoto16 from "../assets/photo16.jpg";


// 만약 더 많은 사진이 있다면 여기에 추가 import 해주세요 (ex: GalleryPhoto11, GalleryPhoto12 ...)

const Wrapper = styled.div`
  padding-top: 63px;
  width: 90%; /* 화면 너비에 맞춰 조정 */
  max-width: 640px; /* 최대 너비 설정으로 PC에서 너무 넓어지지 않게 합니다. */
  margin: 0 auto;
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
  { original: GalleryPhoto28, thumbnail: GalleryPhoto28 },
  { original: GalleryPhoto20, thumbnail: GalleryPhoto20 },
  { original: GalleryPhoto24, thumbnail: GalleryPhoto24 },
  { original: GalleryPhoto14, thumbnail: GalleryPhoto14 },
  { original: GalleryPhoto11, thumbnail: GalleryPhoto11 },
  { original: GalleryPhoto12, thumbnail: GalleryPhoto12 },
  { original: GalleryPhoto25, thumbnail: GalleryPhoto25 },
  { original: GalleryPhoto26, thumbnail: GalleryPhoto26 },
  { original: GalleryPhoto15, thumbnail: GalleryPhoto15 },
  { original: GalleryPhoto13, thumbnail: GalleryPhoto13 },
  { original: GalleryPhoto21, thumbnail: GalleryPhoto21 },
  { original: GalleryPhoto27, thumbnail: GalleryPhoto27 },
  { original: GalleryPhoto23, thumbnail: GalleryPhoto23 },
  { original: GalleryPhoto30, thumbnail: GalleryPhoto30 },
  { original: GalleryPhoto16, thumbnail: GalleryPhoto16 },
  // 예시: { original: GalleryPhoto11, thumbnail: GalleryPhoto11 },
];

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5열 그리드 */
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
  // IMAGES 배열에서 최대 25개의 썸네일만 표시합니다.
  const thumbnailsToShow = IMAGES.slice(0, 25);

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
