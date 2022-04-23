import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  width: fit-content;
  height: fit-content;
`;

export default ({ children }: any) => {
  return <Container>{children}</Container>;
};
