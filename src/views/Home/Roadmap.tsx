import ROADMAP from "constants/roadmap";
import styled from "styled-components";
import RoadmapItem from "./MapItem";
import rose2 from "../../assets/images/Roses/rose2.png";
import rose4 from "../../assets/images/Roses/rose4.png";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0 6rem 0;
  position: relative;
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const MapContainer: any = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5rem;
  width: 80%;
  margin: auto;
  grid-template-areas: ${({ areas }: any) => areas};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-areas: ${({ areasSmall }: any) => areasSmall};
  }
`;

const Line = styled.div`
  width: 2px;
  height: calc(100% - 18rem);
  background-color: ${({ theme }) => theme.primary}40;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  position: absolute;
  top: 600px;
  left: 30px;
  width: 70px;
  height: 70px;
  animation: rose 10s linear infinite;
`;

const Image1 = styled.img`
  position: absolute;
  top: 1000px;
  right: 30px;
  width: 70px;
  height: 70px;
  animation: rose 10s linear infinite;
`;

const Roadmap = () => {
  const areas = ROADMAP.reduce(
    (acc, _, inx) =>
      `${acc} ${inx % 2 === 0 ? `"item-${inx} ."` : `". item-${inx}"`}`,
    ``
  );

  const areasSmall = ROADMAP.reduce(
    (acc, _, inx) => `${acc} ${`". item-${inx}"`}`,
    ``
  );

  return (
    <Container id="roadmap">
      <Title>Roadmap</Title>
      <Image src={rose2} />
      <MapContainer areas={areas} areasSmall={areasSmall}>
        {ROADMAP.map((e, i) => (
          <RoadmapItem key={`${e.title}-${i}`} item={e} area={`item-${i}`} />
        ))}
        <Line />
      </MapContainer>
      <Image1 src={rose4} />
    </Container>
  );
};

export default Roadmap;
