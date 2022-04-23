// import timeIcon from "assets/icons/time.svg";
// import { PROJECT_STATUS } from "constants/consts";
// import { startCase } from "lodash";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem;
  padding-bottom: 1rem;
  background-color: black;

  &:hover {
    transform: scale(1.05);
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
  margin-top: 1rem;
`;

const SubTitle = styled.p`
  font-family: "Nasalization";
  font-size: 12px;
`;

const Description = styled.p`
  font-family: "Nasalization";
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
`;

const Img = styled.img`
  width: 30%;
  @media (max-width: 1024px) {
    width: 20%;
  }
`;

const PlatformCard = ({ img, title, subtitle, desc }: any) => {
  return (
    <div style={{ padding: "0.5rem" }}>
      <Container>
        <Head>
          <Img src={img} />
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <Description className="description">{desc}</Description>
        </Head>
      </Container>
    </div>
  );
};

export default PlatformCard;
