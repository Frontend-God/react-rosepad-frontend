import styled from "styled-components";

const Wrapper: any = styled.div`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 4fr 2fr;
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    background: ${({ theme }) => theme.primary}29;
  }
`;

const Container: any = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
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

const Subtitle = styled.h5`
  opacity: 0.5;
`;

const Price = styled.h2`
  font-family: "Nasalization";
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};

  span {
    font-family: "Nasalization";
    font-size: 12px;
    color: ${({ theme }) => theme.primary}80;
  }
`;

const Lottery = styled.h5`
  opacity: 0.56;
  font-weight: 400;
`;
const Details = styled.div`
  z-index: 2;
  bottom: 0.5rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1rem;
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Span = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 1.25rem 0 0.5rem 0;
`;

export default ({ item, styles }: any) => {
  return (
    <Wrapper styles={styles}>
      <Container>
        <Overlay />
        <Image src={item.src} />
      </Container>
      <Details>
        <Main>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </Main>

        <Span>
          {item.price && (
            <Price>
              {item.price} <span>xRPAD</span>
            </Price>
          )}
          {item.lottery && <Lottery>{item.lottery} Lottery tickets</Lottery>}
        </Span>
      </Details>
    </Wrapper>
  );
};
