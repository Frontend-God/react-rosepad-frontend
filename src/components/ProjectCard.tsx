// import timeIcon from "assets/icons/time.svg";
// import { PROJECT_STATUS } from "constants/consts";
// import { startCase } from "lodash";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80,
    0 1rem 3rem ${({ theme }) => theme.primary}50;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 1rem;
  padding-bottom: 0;
  background-color: black;

  &:hover {
    width: 105%;
    height: 115%;
    &.description {
      font-size: 14px;
    }
  }
`;

const Head = styled.div`
  height: 100%;
  min-height: 7rem;
  line-height: 18px;
`;

const Title = styled.h5`
  font-family: "Nasalization";
  color: #ff0089;
`;

const SubTitle = styled.p`
  font-family: "Nasalization";
  font-size: 10px;
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 12px;
  line-height: 25px;
`;

const ProjectCard = ({ id }: any) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/projects/${id}`)}>
      <Head>
        <Title>Launchpad</Title>
        <SubTitle>Tier System</SubTitle>
        <Description className="description">
          Advanced teir system innovative and inclusive system with multiple
          ways to access.
        </Description>
      </Head>
    </Container>
  );
};

export default ProjectCard;
