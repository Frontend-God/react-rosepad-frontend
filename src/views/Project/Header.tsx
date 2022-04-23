import GradientBtn from "components/GradientBtn";
import { PROJECT_STATUS } from "constants/consts";
import { sample, startCase } from "lodash";
import { T_PROJECT_LOGOS } from "mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 3rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: "Nasalization";
  text-transform: uppercase;
`;

const Profile = styled.div`
  width: 6rem;
  aspect-ratio: 1;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid #2c2936;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Column = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

const Status: any = styled.p`
  border-radius: 5rem;
  padding: 0.25rem 0.72rem;
  font-family: "Nasalization";
  text-transform: uppercase;
  z-index: 1;
  width: fit-content;
  background-color: ${({ status, theme }: any) =>
    status.match(PROJECT_STATUS.open)
      ? theme.alert
      : status.match(PROJECT_STATUS.upcoming)
      ? theme.warning
      : status.match(PROJECT_STATUS.soldout)
      ? theme.success
      : ""};
`;

const Symbol = styled.h5`
  font-family: "Nasalization";
  opacity: 0.56;
`;

export default ({ project } = {} as any) => {
  const status = sample(Object.keys(PROJECT_STATUS));

  return (
    <Container>
      <Header>
        <Profile>
          <ProfileImg src={sample(T_PROJECT_LOGOS)} />
        </Profile>

        <Column>
          <Row>
            <Title>{project.title}</Title>
            <Status status={status}>{startCase(status)}</Status>
          </Row>
          <Symbol>{project.symbol}</Symbol>
        </Column>
      </Header>
      <GradientBtn>Register for Whitelist</GradientBtn>
    </Container>
  );
};
