import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import Arrow from "../assets/icons/arrow.svg";

const ScrollToTopButton = () => {
  const Box = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50% !important;
    z-index: 100000;
    bottom: 30px;
    position: fixed;
    right: 30px;

    @media (max-width: 1024px) {
      bottom: 20px;
      right: 10px;
    }
  `;

  const ArrowIcon = styled.img`
    transform: rotate(180deg);
    width: 40%;
  `;

  return (
    <Box>
      <ScrollToTop
        className="scroll-to-top-btn"
        smooth
        component={<ArrowIcon src={Arrow} />}
      />
    </Box>
  );
};

export default ScrollToTopButton;
