import TeamMember from "components/TeamMember";
import TEAM from "constants/team";
import ADVISORY from "constants/advisory";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

const Members = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

const Team = () => (
  <Container id="team">
    <Title>Core Team</Title>
    <Members>
      {TEAM.map((e, i) => (
        <TeamMember key={e.id} index={i} {...e} />
      ))}
    </Members>
    <Members>
      {ADVISORY.map((e, i) => (
        <TeamMember key={e.id} index={i} {...e} />
      ))}
    </Members>
  </Container>
);

export default Team;
