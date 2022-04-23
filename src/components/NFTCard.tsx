import styled from "styled-components";

const Container: any = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 56px 72px -72px ${({ theme }: any) => theme.primaryDark}0f;

  ${({ styles }: any) => styles}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h3`
  font-family: "Nasalization";
  text-transform: uppercase;
`;

const Subtitle = styled.h5``;

const Price = styled.h2`
  font-family: "Nasalization";
  text-transform: uppercase;
`;

const Lottery = styled.h5``;
const Details = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0.5rem;
  width: 100%;
  padding: 0 0 1rem 0;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: rgb(0, 0, 0);
  background: ${({ theme }: any) =>
    `linear-gradient(0deg,  ${theme.primary} 0%, ${theme.primary}00 100%);`};
`;

const NFTCard = ({ item, styles }: any) => {
  return (
    <Container
      styles={{ width: "18rem !important", height: "22rem !important" }}
    >
      {item && (
        <>
          <Overlay />
          <Details>
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
            {item.price && <Price>{item.price} xRPAD</Price>}
            {item.lottery && <Lottery>{item.lottery} Lottery tickets</Lottery>}
          </Details>
          <Image src={item.src} />
        </>
      )}
    </Container>
  );
};

export default NFTCard;
