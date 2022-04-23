import { random, range, sample } from "lodash";
import { T_PROJECT_LOGOS } from "mock";
import styled from "styled-components";

const Container: any = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  border-bottom: 1px solid #222325;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  grid-column: ${({ column }: any) => column};
  cursor: pointer;
  position: relative;
`;

const Date = styled.h3`
  font-family: "Nasalization";
  padding: 1.5rem 2rem;

  @media (max-width: 1024px) {
    padding: 0.5rem 0.7rem;
    font-size: 15px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  bottom: 2rem;
  right: 3rem;

  @media (max-width: 1024px) {
    bottom: 2rem;
    right: 1.5rem;
    flex-direction: column;
  }
`;

const Icon: any = styled.div`
  width: 2rem;
  background-color: black;
  display: grid;
  place-content: center;
  font-size: 12px;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 1px solid #2c2936;
  background-image: ${({ img }: any) => `url(${img})`};
  z-index: ${({ index }: any) => -index};
  position: absolute;
  left: ${({ index }: any) => `${-index * 0.96}rem`};
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    width: 1.5rem;
    left: unset;
    top: ${({ index }: any) => `${-index * 0.96}rem`};
  }
`;

export default ({ date }: any) => {
  const projects = range(random(5, false)).map(() => sample(T_PROJECT_LOGOS));

  return (
    <Container column={date.weekday()}>
      <Icons>
        {(projects || []).slice(0, 3).map((e, i) => (
          <Icon key={`p-logo${e}-${random(0, 100)}`} img={e} index={i} />
        ))}
        {projects.length >= 3 ? (
          projects.length - 3 ? (
            <Icon>+{projects.length - 3}</Icon>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </Icons>
      <Date>{date.date()}</Date>
    </Container>
  );
};
