import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.toggleBG};
  transition: all 360ms cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 2rem;
  border: 1px solid transparent;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 0;
    bottom: 1px;
    background-color: ${({ theme }) => theme.toggleFG};
    transition: all 360ms cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 50%;
    border: 2px solid transparent;
  }
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  visibility: hidden;
  width: 150%;
  height: 150%;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryDark}40;
    border-color: ${({ theme }) => theme.primaryDark};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.toggleBG};
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  overflow: hidden;
`;

const Text = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export default ({
  checked = false,
  onChange = () => null as any,
  label = "",
}) => {
  return (
    <Container>
      <Label>
        <Input onChange={() => onChange()} checked={checked} />
        <Slider></Slider>
      </Label>
      <Text style={{ opacity: checked ? 1 : 0.64 }}>{label}</Text>
    </Container>
  );
};
