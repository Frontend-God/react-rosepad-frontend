import closeIcon from "assets/icons/close.svg";
import ROUTES from "constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavMenu } from "store/ui";
import styled from "styled-components";
import GradientBtn from "./GradientBtn";
import IconBtn from "./IconBtn";
import NavItem from "./NavItem";

const Container: any = styled.div`
  padding: 1rem;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    &.nav-open {
      display: flex;
      visibility: visible;
      opacity: 1;
      z-index: 10000;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6755077030812324) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(to bottom, #000000 100%, transparent);
  mask-image: linear-gradient(to bottom, #000000 100%, transparent);
  backdrop-filter: blur(36px);
`;

const Routes = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;

const Options = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const Action = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export default () => {
  const isNavMenuOpen = useSelector((state: any) => state.ui.isNavMenuOpen);
  const dispatch = useDispatch();

  return (
    <Container className={isNavMenuOpen && "nav-open"}>
      <Overlay onClick={() => dispatch(toggleNavMenu())}></Overlay>
      <Action>
        <IconBtn icon={closeIcon} onClick={() => dispatch(toggleNavMenu())} />
      </Action>
      <Options>
        <Routes>
          {ROUTES.map((e) => (
            <NavItem
              key={e.id}
              {...e}
              onChange={() => dispatch(toggleNavMenu())}
            />
          ))}
        </Routes>
        <GradientBtn animate label="Connect Wallet" />
      </Options>
    </Container>
  );
};
