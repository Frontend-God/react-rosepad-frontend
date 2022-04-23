import caretIcon from "assets/icons/caret.svg";
import useOutsideListener from "hooks/useOutsideListener";
import { useRef, useState } from "react";
import styled from "styled-components";

const Caret: any = styled.img.attrs({ src: caretIcon })`
  width: 0.6rem;
  filter: ${({ theme }) => theme.iconFilter};
  transform: ${({ toggle }: any) => `rotateZ(${toggle ? -180 : 0}deg)`};
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
`;

const Label = styled.label`
  white-space: nowrap;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Items: any = styled.ul`
  list-style: none;
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.inputBG};
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 12rem;
  z-index: 100;
  visibility: ${({ toggle }: any) => (toggle ? "visible" : "hidden")};
  opacity: ${({ toggle }: any) => (toggle ? 1 : 0)};
  backdrop-filter: blur(10px);
`;
const Item = styled.li`
  padding: 0.72rem 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.inputBG};
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.inputBG};
  border-radius: 0.64rem;
  padding: 0.72rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  position: relative;
  min-width: 12rem;

  &:hover {
    border-color: ${({ theme }) => theme.primaryDark};

    ${Label} {
      filter: ${({ theme }) => theme.primaryFilter} opacity(0.56);
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};

    ${Label} {
      filter: ${({ theme }) => theme.primaryFilter};
    }
  }
`;

const Dropdown = ({
  label = "",
  placeholder = "",
  onChange = () => null as any,
  items = [],
  selected = items[0],
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  useOutsideListener(ref, setIsOpen);

  return (
    <Container ref={ref} onClick={() => setIsOpen(!isOpen)}>
      <Main>
        <Label>{label}</Label>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={() => onChange()}
          value={selected.label}
        />
        <Caret toggle={isOpen} />
      </Main>
      <Items toggle={isOpen}>
        {items.map((e: any) => (
          <Item key={e.id} onClick={() => (onChange(e), setIsOpen(!isOpen))}>
            {e.label}
          </Item>
        ))}
      </Items>
    </Container>
  );
};

export default Dropdown;
