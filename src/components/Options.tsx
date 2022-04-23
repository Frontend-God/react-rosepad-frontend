import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 100%;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Option: any = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  filter: ${({ selected, theme }: any) =>
    selected ? theme.primaryFilter : ""};

  &:hover {
    background-color: ${({ theme }) => theme.inputBG};
  }
`;

const Icon = styled.img`
  width: 1rem;
  filter: ${({ theme }) => theme.iconFilter};
`;

export default ({
  items = [],
  selected = items[0],
  onChange = () => null as any,
}: any) => {
  return (
    <Container>
      <Options>
        {items.map((e: any) => (
          <Option
            selected={e.id === selected.id}
            key={e.id}
            onClick={() => onChange(e)}
          >
            <Icon src={e.icon} />
          </Option>
        ))}
      </Options>
    </Container>
  );
};
