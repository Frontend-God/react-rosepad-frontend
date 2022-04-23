import { SetStateAction } from "react";
import { T_APE_NFTS } from "mock";
import { useState } from "react";
import styled from "styled-components";
import NFTCard from "./NFTCard";
import Slider from "react-slick";

const Container = styled.div`
  padding: 5rem 3rem 0;

  @media (max-width: 1024px) {
    padding: 5rem 1rem 0;
  }
`;

const CardSwiper = () => {
  const items = T_APE_NFTS.slice(0, 50);
  const [imageIndex, setImageIndex] = useState(0);

  const templateImages = items.map((image, idx) => {
    if (image !== null) {
      return (
        <div className={idx === imageIndex ? "activeSlide" : "slide"} key={idx}>
          <div className="slideWrapper">
            <NFTCard key={image?.id} item={image} />
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <Container>
      <Slider
        {...{
          infinite: true,
          className: "center",
          centerMode: true,
          slidesToShow: 3,
          centerPadding: "0px",
          slidesToScroll: 1,
          arrows: true,
          beforeChange: (_current: any, next: SetStateAction<number>) =>
            setImageIndex(next),
        }}
      >
        {templateImages}
      </Slider>
    </Container>
  );
};

export default CardSwiper;
