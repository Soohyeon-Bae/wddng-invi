import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

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

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
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

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
    {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
    {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
    {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
    {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Wedding Gallary</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
