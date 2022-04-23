import linkedin from "assets/icons/linkedin.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  padding: 3rem 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const LinkedIcon = styled.img.attrs({ src: linkedin })`
  width: 100%;
  object-fit: contain;
  height: 100%;
  filter: ${({ theme }) => theme.primaryFilter} opacity(0.64);
`;

const Linkedin = styled.button`
  width: 2.7rem;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.primary}29;
  padding: 0.72rem;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(56px);
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary}40;

    ${LinkedIcon} {
      filter: ${({ theme }) => theme.primaryFilter} opacity(0.8);
    }
  }
`;

const Avatar = styled.div`
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Name = styled.h3`
  font-family: "Nasalization";
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 1rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.primary}16;
  width: fit-content;
  font-family: "Nasalization";
`;

const Items = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const Item = styled.li`
  opacity: 0.72;
  padding: 0.36rem 0;
  font-family: "Nasalization";
`;

const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TeamMember = ({ name, title, link, extras, image, index }: any) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 300}>
      <Container>
        <AvatarContainer>
          <Avatar>
            <Image src={image} />
          </Avatar>
          <Linkedin
            onClick={() => (window.open(link, "_blank") as any).focus()}
          >
            <LinkedIcon />
          </Linkedin>
        </AvatarContainer>
        <Info>
          <Name>{name}</Name>
          <Subtitle>{title}</Subtitle>
          <Items>
            {extras.map((e: any) => (
              <Item key={e}>{e}</Item>
            ))}
          </Items>
        </Info>
      </Container>
    </div>
  );
};

export default TeamMember;
