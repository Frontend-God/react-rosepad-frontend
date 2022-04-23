import glassIcon from "assets/icons/glass.svg";
import Choose from "components/Choose";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import Options from "components/Options";
import Toggle from "components/Toggle";
import { CHOOSE_OPTIONS, SORT_BYS, VIEW_OPTIONS } from "constants/consts";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Grid from "./Grid";
import Table from "./Table";

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
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
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

export default () => {
  const path = useLocation();
  const [isStakedOnly, setIsStakedOnly] = useState(false);
  const [sortBy, setSortBy] = useState(SORT_BYS[0]);
  const [viewOption, setViewOption] = useState(VIEW_OPTIONS[0]);
  const [chooseOption, setChooseOption] = useState(CHOOSE_OPTIONS[0]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Farms</Title>
          <More>
            <Toggle
              checked={isStakedOnly}
              onChange={() => setIsStakedOnly(!isStakedOnly)}
              label="Staked only"
            />
            <Choose
              items={CHOOSE_OPTIONS}
              selected={chooseOption}
              onChange={setChooseOption}
            />
            <Input icon={glassIcon} placeholder="Search Farms" />
            <Dropdown
              label="Sort By:"
              items={SORT_BYS}
              selected={sortBy}
              onChange={setSortBy}
            />
            <Options
              items={VIEW_OPTIONS}
              selected={viewOption}
              onChange={setViewOption}
            />
          </More>
        </Header>

        {viewOption.id === VIEW_OPTIONS[0].id ? <Table /> : <Grid />}
      </Container>
    </Wrapper>
  );
};
