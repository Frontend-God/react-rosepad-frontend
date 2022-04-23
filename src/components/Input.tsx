import styled from "styled-components";

const Icon = styled.img`
  width: 1rem;
  filter: ${({ theme }) => theme.iconFilter};
  left: 1rem;
  position: absolute;
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0.72rem 0.9rem;
  text-indent: 2rem;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.inputBG};
  border-radius: 0.64rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  position: relative;
  min-width: 12rem;

  &:hover {
    border-color: ${({ theme }) => theme.primaryDark};

    ${Icon} {
      filter: ${({ theme }) => theme.primaryFilter} opacity(0.56);
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};

    ${Icon} {
      filter: ${({ theme }) => theme.primaryFilter};
    }
  }
`;

export default ({
  icon,
  type = "text",
  placeholder = "",
  onChange = () => null as any,
}: any) => {
  return (
    <Container>
      <Icon src={icon} />
      <Input
        type={type}
        placeholder={placeholder}
        onChange={() => onChange()}
      />
    </Container>
  );
};
