import { startCase } from "lodash";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
`;

const Items = styled.div`
  display: flex;
  gap: 0.25rem;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;
`;

const Label = styled.h5`
  opacity: 0.56;
  font-weight: 600;
  white-space: nowrap;
`;

const Value = styled.h3`
  white-space: nowrap;
  font-family: "Nasalization";
  font-weight: 400;
`;

export default ({ project } = {} as any) => {
  return (
    <Container>
      <Title>Token Sale</Title>

      <Items>
        {["poolSize", "hardCap", "tokenPrice", "launchType"].map((e: any) => {
          return (
            <Item key={`stats-${e}`}>
              <Label>{startCase(e)}</Label>
              <Value>
                {project.stats.find((i: any) => i.id.match(e)).value}
              </Value>
            </Item>
          );
        })}
      </Items>
    </Container>
  );
};
