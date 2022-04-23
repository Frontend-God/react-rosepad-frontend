import { ROADMAP_MILESTONES } from "constants/consts";
import styled from "styled-components";

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.36rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.primary}16;
  box-shadow: 0 2rem 5rem ${({ theme }) => theme.primary}50;
  backdrop-filter: blur(16px);

  &.active-mile {
    background: rgb(178, 26, 240);
    background: radial-gradient(ellipse at top center, #f0931e, transparent 30%),
      radial-gradient(circle at bottom left, #ff0073cc, transparent 25%),
      radial-gradient(circle at bottom right, #6f00ffcc, transparent 27%),
      radial-gradient(ellipse at bottom center, #9dff006a, transparent 36%),
      linear-gradient(
        324deg,
        rgba(178, 26, 240, 1) 0%,
        rgba(202, 62, 184, 1) 21%,
        rgba(246, 122, 23, 1) 100%
      );
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(1);
  &.upcoming,
  .beginning {
    filter: none;
  }
`;

const Bubble = styled.div`
  padding: 2rem;
  min-width: 16rem;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  width: 12rem;
  display: block !important;

  &:nth-child(even) {
    justify-self: flex-end;
  }

  &:hover,
  &:nth-child(even):hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  div {
    display: flex;
    gap: 2rem;
    transform: translateX(1.5rem);
    flex-direction: row-reverse;
  }

  &:nth-child(even) div {
    justify-self: flex-start;
    flex-direction: row;
    transform: translateX(-1.5rem);

    @media (max-width: 1024px) {
      flex-direction: row;
      transform: translateX(-1.5rem);
    }
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  font-size: 14px;
  line-height: 0.6em;
  cursor: pointer;
  border-radius: 0.36rem;

  &:hover {
    background-color: ${({ theme }) => theme.primary}16;
    color: ${({ theme }) => theme.primary};
  }
`;

const Title = styled.span`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

const Head = styled.h4`
  font-weight: 600;
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.p`
  opacity: 0.5;
  font-size: 14px;
  font-family: "Nasalization";
`;

const RoadmapItem = ({ item, area }: any) => (
  <Container style={{ gridArea: area }}>
    <div data-aos="fade-up">
      <Icon
        className={
          item.status.match(ROADMAP_MILESTONES.current) && "active-mile"
        }
      >
        <Img src={item.icon} className={item.status} />
      </Icon>
      <Bubble>
        <Title>
          <Head>{item.time}</Head>
          <Subtitle>{item.title}</Subtitle>
        </Title>
        <List>
          {item.items.map((e: any, i: number) => (
            <ListItem key={`map-item-${e}-${i}`}>{e}</ListItem>
          ))}
        </List>
      </Bubble>
    </div>
  </Container>
);

export default RoadmapItem;
