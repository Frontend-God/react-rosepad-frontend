import glassIcon from "assets/icons/glass.svg";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import NFTThumb from "components/NFTThumb";
import { SORT_BYS } from "constants/consts";
import { T_APE_NFTS } from "mock";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  background: ${({ theme }) =>
    `
    radial-gradient(circle at -5% 30%, #f0080816, transparent 10%),
    radial-gradient(circle at 120% 30%, #f0ba081a, transparent 10%),
    radial-gradient(circle at bottom center, #000000, transparent 50%), 
    radial-gradient(circle at bottom left, #fd117f6a, transparent 5%), 
    radial-gradient(circle at bottom right, #fd117f6a, transparent 5%), 
    radial-gradient(circle at -5% 70%, #f0087432, transparent 10%), 
    radial-gradient(circle at 105% 80%, #7408f031, transparent 15%), 
    ${theme.bg}
    `};
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

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Collection = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: 36rem;
  gap: 1rem;
`;

export default () => {
  const path = useLocation();

  const [sortBy, setSortBy] = useState(SORT_BYS[0]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>NFTs</Title>
          <More>
            <Input icon={glassIcon} placeholder="Search NFTs" />
            <Dropdown
              label="Sort By:"
              items={SORT_BYS}
              selected={sortBy}
              onChange={setSortBy}
            />
          </More>
        </Header>
        <Body>
          <Collection>
            {T_APE_NFTS.map((e: any) => (
              <NFTThumb key={e.id} item={e} />
            ))}
          </Collection>
        </Body>
      </Container>
    </Wrapper>
  );
};
