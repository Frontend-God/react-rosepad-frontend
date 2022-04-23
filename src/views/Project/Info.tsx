import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const Title = styled.h3`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
`;

const Description = styled.p`
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

const Column = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

export default ({ project } = {} as any) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={project.info.img} />
      </ImageContainer>
      <Column>
        <Title>{project.info.title}</Title>
        <Description>{project.info.description}</Description>
      </Column>
    </Container>
  );
};
