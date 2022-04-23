import { Route, Routes } from "react-router";
import styled from "styled-components";
// import Calendar from "views/Calendar";
// import Exchange from "views/Exchange";
// import Farms from "views/Farms";
import Home from "views/Home";
import FAQ from "views/FAQ";
// import Liquidity from "views/Liquidity";
// import NFT from "views/NFT";
// import Pools from "views/Pools";
// import Project from "views/Project";
// import Projects from "views/Projects";
// import Trade from "views/Trade";

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto 0 auto;
`;

const View = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/fag" element={<FAQ />}></Route>
        {/* <Route path="trade" element={<Trade />}>
          <Route path="exchange" element={<Exchange />}></Route>
          <Route path="liquidity" element={<Liquidity />}></Route>
          <Route path="*" element={<Navigate replace to="exchange" />} />
        </Route>
        <Route path="farms" element={<Farms />}></Route>
        <Route path="pools" element={<Pools />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="nfts" element={<NFT />}></Route>
        <Route path="projects/calendar" element={<Calendar />}></Route>
        <Route path="projects/:pid" element={<Project />}></Route> */}
      </Routes>
    </Container>
  );
};

export default View;
