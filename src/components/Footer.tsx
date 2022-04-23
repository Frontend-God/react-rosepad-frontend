import brandIcon from "assets/icons/brand.svg";
import logoIcon from "assets/icons/logo.svg";
import { FOOTER_LINKS } from "constants/consts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.dark};
  display: grid;
  place-content: center;
  padding-top: 4.5rem;
  margin-top: -1.6rem;

  @media (max-width: 1024px) {
    height: fit-content;
  } ;
`;

const Content = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  max-width: 1920px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100%;
  gap: 3rem;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    display: unset;
    height: unset;
    width: calc(100% - 5rem);
  }
`;
const Branding = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Brand = styled.img.attrs({ src: brandIcon })`
  width: 7rem;
  filter: ${({ theme }) => theme.primaryFilter};
`;

const Logo = styled.img.attrs({ src: logoIcon })`
  width: 2rem;
  filter: ${({ theme }) => theme.primaryFilter};
`;

const Descrpiton = styled.p`
  line-height: 1.9em;
  font-size: 14px;
  opacity: 0.64;
  max-width: 60%;

  @media (max-width: 1024px) {
    max-width: calc(100% - 2rem);
    text-align: center;
  }
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Routes = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const Links = styled.ul`
  list-style: none;
`;

const Link = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBG};
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Column>
          <Branding>
            <Logo />
            <Brand />
          </Branding>
          <Descrpiton>
            To help incubate and launch credible and successful projects on
            Oasis that brings real impact and value to the communities while
            bringing mass adoption to Oasis blockchain for long-term success.
          </Descrpiton>
        </Column>
        <Column>
          <Routes>
            <Links>
              {FOOTER_LINKS.slice(0, 4).map((e) => (
                <Link id={e.id} key={e.id}>
                  {" "}
                  {e.label}
                </Link>
              ))}
            </Links>
            <Links>
              {FOOTER_LINKS.slice(4).map((e) => (
                <Link id={e.id} key={e.id}>
                  {" "}
                  {e.label}
                </Link>
              ))}
            </Links>
          </Routes>
        </Column>
      </Content>
    </Container>
  );
};

export default Footer;
