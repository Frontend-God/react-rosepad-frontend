import { T_PROJECT } from "mock";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.ul`
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  list-style: none;
  padding: 1.125rem 0 3rem 0;
  height: fit-content;
  position: sticky;
  top: 12rem;

  @media (max-width: 1024px) {
    position: static;
    top: unset;
  }
`;

const NavItem: any = styled.li`
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-family: "Nasalization";
  font-size: 1rem;
  text-transform: uppercase;

  &.active-nav {
    color: ${({ theme }) => theme.primary};
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 0 4rem 0;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Head = styled.h3`
  font-family: "Nasalization";
  text-transform: uppercase;
  opacity: 0.56;
`;

const Headline = styled.h1`
  font-family: "Nasalization";
  font-weight: 500;
  line-height: 1.5em;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoTitle = styled.h4`
  font-family: "Nasalization";
`;

const InfoDescription = styled.p`
  font-size: 15px;
  opacity: 0.56;
  line-height: 1.75em;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ({ project } = {} as any) => {
  const [currentNav, setCurrentNav] = useState(T_PROJECT.details[0].id);

  return (
    <Container>
      <Header>
        <Title>Project Details</Title>
      </Header>
      <Body>
        <Nav>
          {T_PROJECT.details.map((e) => (
            <NavItem
              className={currentNav === e.id && "active-nav"}
              onClick={() => {
                setCurrentNav(e.id);
                (
                  document.getElementById(`view-details-${e.id}`) as any
                ).scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {e.label}
            </NavItem>
          ))}
        </Nav>
        <Content>
          {T_PROJECT.details.map((e) => (
            <ContentItem
              key={`view-details-${e.id}`}
              id={`view-details-${e.id}`}
            >
              <Head>{e.label}</Head>
              <Headline>{e.title}</Headline>
              <Info>
                <InfoTitle>{e.info.title}</InfoTitle>
                <InfoDescription>{e.info.description}</InfoDescription>
              </Info>
              <ImageContainer>
                <Image src={e.img} />
              </ImageContainer>
            </ContentItem>
          ))}
        </Content>
      </Body>
    </Container>
  );
};
