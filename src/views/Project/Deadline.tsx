import { startCase } from "lodash";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: inset 0 0 1.4rem #ff008073;
  -moz-box-shadow: inset 0 0 1.4rem #ff008073;
  box-shadow: inset 0 0 1.4rem #ff008073;
  border-radius: 1rem;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Items = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h3`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Label = styled.h5`
  opacity: 0.56;
  font-weight: 500;
  white-space: nowrap;
`;

const Value = styled.h1`
  white-space: nowrap;
  font-family: "Nasalization";
  font-weight: 400;
`;

const Colon = styled.h1`
  white-space: nowrap;
  font-family: "Nasalization";
  font-weight: 400;
  opacity: 0.56;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default ({ project } = {} as any) => {
  const deadline = moment(project.deadline, "DD-MM-YY");

  const duration = moment.duration(
    (moment().utc() as any) - deadline.unix(),
    "milliseconds"
  );

  return (
    <Container>
      <Title>Sale Ends in</Title>
      <Items>
        {["days", "hours", "minutes", "seconds"].map((e: any, i, a) => {
          const left = (duration as any)[e]();

          return (
            <Item key={`deadline-${e}`}>
              <Row>
                <Value>
                  {(() => {
                    return left < 10 ? `0${left}` : left;
                  })()}
                </Value>
                {i < a.length - 1 && <Colon>:</Colon>}
              </Row>
              <Label>{startCase(e)}</Label>
            </Item>
          );
        })}
      </Items>
    </Container>
  );
};
