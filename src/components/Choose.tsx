import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 100%;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.inputBG};
  padding: 0.125rem;
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
  padding: 0.25rem 0.75rem;
  border-radius: 5rem;
  filter: ${({ selected, theme }: any) =>
    selected ? theme.primaryFilter : ""};
  font-family: "Nasalization";

  &.selected {
    color: ${({ theme }: any) => theme.primary};
    background-color: ${({ theme }: any) => theme.primary}16;
  }

  &:hover {
    background-color: ${({ theme }) => theme.inputBG};
  }
`;

const Choose = ({
  items = [],
  selected = items[0],
  onChange = () => null as any,
}: any) => {
  return (
    <Container>
      <Options>
        {items.map((e: any) => (
          <Option
            className={e.id === selected.id && "selected"}
            key={e.id}
            onClick={() => onChange(e)}
          >
            {e.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
};
export default Choose;
