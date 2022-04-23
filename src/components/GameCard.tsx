// import timeIcon from "assets/icons/time.svg";
// import { PROJECT_STATUS } from "constants/consts";
// import { startCase } from "lodash";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: box-shadow: inset 0 0 2rem ${({ theme }) =>
    theme.primary}80,
  0 2rem 5rem ${({ theme }) => theme.primary}50;
  -moz-box-shadow: box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80,
  0 2rem 5rem ${({ theme }) => theme.primary}50;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80,
    0 2rem 5rem ${({ theme }) => theme.primary}50;
  border-radius: 1rem;
  cursor: pointer;
  background-color: black;
  &:hover {
    width: 105%;
    height: 120%;
  }
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

const Detail = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Title = styled.p`
  font-family: "Nasalization";
  font-size: 14px;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-family: "Nasalization";
  font-size: 10px;
  color: #333;
`;

const Section = styled.div``;

const List = styled.div`
  font-size: 10px;
  color: #333;
  width: 100%;
`;

const Abbr = styled.div`
  border-top: 1px dotted #333;
  align-self: center;
  width: 100%;
`;

const Value = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;
  width: 100%;
  text-transform: uppercase;
`;

const GameCard = ({
  id,
  title,
  category,
  symbol,
  deadline,
  status,
  raised,
  allocation,
  img,
  cover,
  index,
}: any) => {
  const navigate = useNavigate();

  return (
    <div data-aos="fade-up" data-aos-delay={index * 200}>
      <Container onClick={() => navigate(`/projects/${id}`)}>
        <Image src={img} />
        <Detail>
          <Layout>
            <Section>
              <Title>RAMO</Title>
              <Subtitle>STBA</Subtitle>
            </Section>
            <Section>
              <Subtitle>sales starts</Subtitle>
              <Title>June 2022</Title>
            </Section>
          </Layout>
          <Layout>
            <List>Total Raise</List>
            <Abbr></Abbr>
            <Value>{raised}TBA</Value>
          </Layout>
          <Layout>
            <List>People Allocation</List>
            <Abbr></Abbr>
            <Value>{allocation}TBA</Value>
          </Layout>
        </Detail>
      </Container>
    </div>
  );
};

export default GameCard;
