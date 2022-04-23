import caretIcon from "assets/icons/caret.svg";
import useOutsideListener from "hooks/useOutsideListener";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

const Label = styled.p`
  font-family: "Nasalization";
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.36rem;

  &:hover {
    background: ${({ theme }) => theme.buttonHoverBG}80;
  }

  &.active {
    color: #f54360;
    background: ${({ theme }) => theme.primary}29;
  }
`;

const Dropdown = styled.div`
  display: grid;
  place-content: center;
`;
const Main = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
const DropdownContent = styled.ul`
  position: absolute;
  list-style: none;
  padding: 1rem 0;
  background-color: black;
  border-radius: 0.5rem;
  top: 2rem;
  z-index: 1;
`;
const Nested = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 0.36rem;

  &:hover {
    background-color: #8b8a8a13;
  }
`;

const Caret = styled.img.attrs({ src: caretIcon })`
  width: 0.7rem;
  filter: invert(1);
  cursor: pointer;

  &.active {
    filter: invert(63%) sepia(98%) saturate(5819%) hue-rotate(328deg)
      brightness(101%) contrast(92%);
  }
`;

const NavItem = ({
  id,
  label,
  children,
  link,
  onChange = () => null,
  scrollLink,
  onClick,
}: any) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useOutsideListener(ref, setOpen);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <Container onClick={onClick}>
      {!children?.length ? (
        scrollLink ? (
          <ScrollLink activeClass="active" to={scrollLink} spy={true}>
            <Label>{label}</Label>
          </ScrollLink>
        ) : (
          <Label
            className={pathname.includes(id) ? "active" : ""}
            onClick={() => (navigate(`${link}`), onChange())}
          >
            {label}
          </Label>
        )
      ) : (
        <Dropdown ref={ref}>
          <Main onClick={() => setOpen(!open)}>
            <Label className={pathname.includes(id) ? "active" : ""}>
              {label}
            </Label>
            <Caret className={pathname.includes(id) ? "active" : ""} />
          </Main>
          {open && (
            <DropdownContent>
              {children.map((e: any) => (
                <Nested
                  key={e.id}
                  onClick={() => (
                    navigate(`${e.link}`), setOpen(!open), onChange()
                  )}
                >
                  <Label className={pathname.includes(e.id) ? "active" : ""}>
                    {e.label}
                  </Label>
                </Nested>
              ))}
            </DropdownContent>
          )}
        </Dropdown>
      )}
    </Container>
  );
};

export default NavItem;
