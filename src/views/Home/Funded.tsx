import GradientBtn from "components/GradientBtn";
import ProjectCard from "components/ProjectCard";
import { PROJECT_STATUS } from "constants/consts";
import { omit } from "lodash";
import { T_PROJECTS } from "mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 2rem;
  grid-auto-rows: 24rem;
  margin-bottom: 2rem;
`;

export default () => {
  return (
    <Container>
      <Title>Funded Projects</Title>
      <Items>
        {T_PROJECTS.map((e) => ({
          ...omit(e, ["deadline", "allocation"]),
          status: PROJECT_STATUS.soldout,
        }))
          .slice(0, 3)
          .map((i) => (
            <ProjectCard key={i.id} {...i} />
          ))}
      </Items>
      <GradientBtn animateOnHover>View all Projects</GradientBtn>
    </Container>
  );
};
