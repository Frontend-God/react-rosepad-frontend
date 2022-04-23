import SOCIALS from "constants/socials";
import styled from "styled-components";

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

const Input = styled.input.attrs({ type: "text" })`
  background-color: ${({ theme }) => theme.inputBG};
  outline: none;
  border: none;
  padding: 1.5rem;
  font-size: 15px;
  width: 100%;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.inputBG};
  }

  &:focus {
    background-color: ${({ theme }) => theme.inputBG};
  }
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.inputBG}33;
  border-radius: 5rem;
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const SubsBtn = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.primary}16;
  font-weight: 700;
  padding: 1rem;
  cursor: pointer;
  height: 4rem;
  color: ${({ theme }) => theme.primary}80;

  &:hover {
    background-color: ${({ theme }) => theme.primary}29;
    color: ${({ theme }) => theme.primary};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  filter: ${({ theme }) => theme.primaryFilter} opacity(0.56);
`;

const Social = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.primary}16;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  padding: 0.86rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary}29;

    ${SocialImg} {
      filter: ${({ theme }) => theme.primaryFilter} opacity(0.96);
    }
  }
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
    <Title>Stay Connected</Title>
    <InputBox>
      <Input placeholder="Your email" />
      <SubsBtn>Subscribe</SubsBtn>
    </InputBox>
    <Socials>
      {SOCIALS.map((e, i) => (
        <Social
          key={`${e.title}-${i}`}
          onClick={() => (window.open(e.link, "_blank") as any).focus()}
        >
          <SocialImg src={e.img} />
        </Social>
      ))}
    </Socials>
  </Container>
);

export default Connect;
