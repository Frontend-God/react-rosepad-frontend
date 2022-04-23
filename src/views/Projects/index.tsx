import calendarIcon from "assets/icons/calendar.svg";
import glassIcon from "assets/icons/glass.svg";
import IconBtn from "components/IconBtn";
import Input from "components/Input";
import { PROJECT_CATEGORIES } from "constants/consts";
import { startCase } from "lodash";
import { T_PROJECTS } from "mock";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  background: ${({ theme }) => theme.bg};
  padding-bottom: 5rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  margin: 2rem auto 0 auto;
  max-width: min(1920px, calc(100% - 16rem));

  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
`;
const Columns = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  column-gap: 2rem;
  row-gap: 5rem;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ColumnTitle = styled.h3`
  font-family: "Nasalization";
  height: min-content;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const ColumnItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: 28rem;
  gap: 2rem;
  grid-auto-flow: dense;
`;

const EmptyMsg = styled.p`
  opacity: 0.56;
`;

export default () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Projects</Title>
          <More>
            <Input icon={glassIcon} placeholder="Search Farms" />
            <IconBtn
              icon={calendarIcon}
              label="Calendar View"
              onClick={() => navigate("/projects/calendar")}
            />
          </More>
        </Header>
        <Columns>
          {Object.values(PROJECT_CATEGORIES).map((c) => {
            const items =
              T_PROJECTS.filter(
                (p) => p.category?.toString() === c.toString()
              ) || [];

            return (
              <Column key={c.toString()}>
                <ColumnTitle>{startCase(c.toString())}</ColumnTitle>
                {!items.length && (
                  <EmptyMsg>
                    Sorry. No {startCase(c.toString())} Projects
                  </EmptyMsg>
                )}
                <ColumnItems>
                  {items.map((i) => (
                    <ProjectCard key={i.id} {...i} />
                  ))}
                </ColumnItems>
              </Column>
            );
          })}
        </Columns>
      </Container>
    </Wrapper>
  );
};
