import caretIcon from "assets/icons/caret.svg";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary}29;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:last-child {
    border-bottom: unset;
  }
`;

const Title = styled.h4`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary}BD;
  text-align: left;
`;

const Description: any = styled.p`
  opacity: 0;
  height: 0;
  font-size: 14px;
  &.show-des {
    opacity: 0.8;
    height: auto;
    line-height: 1.9em;
    max-width: 80%;
  }
`;

const Caret = styled.img.attrs({ src: caretIcon })`
  width: 2rem;
  filter: invert(1);
  cursor: pointer;
  opacity: 0.56;
  padding: 0.64rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBG}29;
  }

  &.active-des {
    filter: invert(63%) sepia(98%) saturate(5819%) hue-rotate(328deg)
      brightness(101%) contrast(92%);
    transform: rotate(-180deg);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    ${Title} {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default ({ title, description, open = false }: any) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <Caret
          className={isOpen && "active-des"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Header>

      <Description className={isOpen && "show-des"}>{description}</Description>
    </Container>
  );
};
