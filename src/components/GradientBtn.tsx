import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
    0%   {background-size: 100% 100%;}
    25%  {background-size: 300% 300%;}
    50%  {background-size: 200% 200%;}
    75%  {background-size: 400% 350%;}
    100% {background-size: 100% 100%;}
`;

const Inset = styled.div`
  width: calc(100% - 0.2rem);
  height: calc(100% - 0.2rem);
  position: absolute;
  border-radius: 5rem;
  top: 0.1rem;
  left: 0.1rem;
`;

const Container: any = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1.75rem;
  border-radius: 5rem;
  height: fit-content;
  width: fit-content;
  display: grid;
  place-content: center;
  position: relative;
  background: ${({ bg }: any) => bg};
  overflow: hidden;
  transition: all 560ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &::before {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #e100ff8d, transparent 40%),
      radial-gradient(circle at top left, #ff9900, transparent 12%),
      radial-gradient(circle at top right, #ff0073, transparent 15%),
      radial-gradient(circle at bottom right, #ffbb00, transparent 30%),
      radial-gradient(circle at bottom left, #ff0073, transparent 25%),
      linear-gradient(96deg, #e7175d 0%, #f81f4e 100%);
    transition: all 560ms cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: 1400ms ease 0s infinite normal none running
      ${({ animate }: any) => animate && Pulse};
    background-repeat: no-repeat;
  }

  &::after {
    opacity: 0;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, #e100ff8d, transparent 30%),
      radial-gradient(circle at top right, #ffbb00, transparent 60%),
      radial-gradient(circle at left center, #ff9900, transparent 30%),
      radial-gradient(circle at top left, #ff0073, transparent 50%),
      radial-gradient(circle at bottom right, #e100ff8d, transparent 30%),
      radial-gradient(circle at bottom right, #ff9900, transparent 80%),
      radial-gradient(circle at bottom left, #ff0073, transparent 50%),
      linear-gradient(180deg, #e7175d 0%, #f31847 100%);
    transition: all 560ms cubic-bezier(0.075, 0.82, 0.165, 1);
    animation: 820ms ease 0s infinite normal none running
      ${({ animate, animateOnHover }: any) =>
        (animate || animateOnHover) && Pulse};
    background-repeat: no-repeat;
  }

  &:hover {
    ${Inset} {
      background-color: #25051bfa;
    }

    &::after {
      opacity: ${({ stroked }: any) => (!stroked ? 1 : 0)};
    }
  }
`;

const Label = styled.label`
  font-family: "Nasalization";
  cursor: pointer;
  z-index: 2;
`;

export default ({
  label,
  children,
  bg,
  color,
  stroked = false,
  onClick = () => null,
  animate = false,
  animateOnHover = false,
  style,
}: any) => {
  return (
    <Container
      stroked={stroked}
      animate={animate}
      animateOnHover={animateOnHover}
      onClick={() => onClick()}
      bg={bg}
      style={style}
    >
      {stroked && <Inset />}
      <Label style={{ color: color || (stroked ? "#ff0073" : "white") }}>
        {label || children}
      </Label>
    </Container>
  );
};
