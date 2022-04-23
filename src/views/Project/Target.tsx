import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: inset 0 0 1.4rem #ff008073;
  -moz-box-shadow: inset 0 0 1.4rem #ff008073;
  box-shadow: inset 0 0 1.4rem #ff008073;
  border-radius: 1rem;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Title = styled.h3`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Value = styled.h1`
  white-space: nowrap;
  font-family: "Nasalization";
  font-weight: 400;
  font-size: 3rem;
`;

export default ({ project } = {} as any) => {
  return (
    <Container>
      <Title>Fundraise Goal</Title>
      <Value>{project.target}</Value>
    </Container>
  );
};
