import styled from "styled-components";

const Container = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.buttonBG};
  max-height: 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBG};
  }
`;
const Icon = styled.img`
  width: 1.2rem;
  filter: invert(1);
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
`;

export default ({ icon, label, onClick = () => null }: any) => {
  return (
    <Container onClick={() => onClick()}>
      <Icon src={icon} />

      {label && <Label>{label}</Label>}
    </Container>
  );
};
