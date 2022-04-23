import FAQs from "../../constants/faqs";
import styled from "styled-components";
import FAQItem from "./FAQItem";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

const Table = styled.div`
  width: 100%;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

const Connect = () => (
  <Container id="contact">
    <Title>Frequently asked questions</Title>
    <Table>
      {FAQs.map((e, i) => (
        <FAQItem key={e.id} {...e} open={i === 0} />
      ))}
    </Table>
  </Container>
);

export default Connect;
