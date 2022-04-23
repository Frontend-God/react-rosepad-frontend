import checkIcon from "assets/icons/check.svg";
import timeIcon from "assets/icons/time.svg";
import { PROJECT_MAP } from "constants/consts";
import { startCase } from "lodash";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #222325;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: 0.5fr 100%;
  padding: 1.75rem;
`;

const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.h3`
  font-family: "Nasalization";
`;

const Description = styled.p`
  opacity: 0.64;
  font-size: 15px;
  line-height: 1.5em;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeIcon = styled.img.attrs({ src: timeIcon })`
  width: 1rem;
  filter: ${({ theme }) => theme.iconFilter};
`;

const Deadline = styled.h4`
  font-family: "Nasalization";
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.56;
  font-size: 0.9rem;
`;

const Track = styled.div`
  width: 3px;
  height: calc(100% - 6rem);
  background: ${({ theme }) => theme.primary}40;
  transform: translate(1.5rem, 1rem);
`;

const Count = styled.div`
  border-radius: 100%;
  aspect-ratio: 1;
  width: 2.7rem;
  display: grid;
  place-content: center;
  padding: 1rem;
  font-size: 0.8rem;
  border: 1px solid transparent;
  backdrop-filter: blur(36px);
  z-index: 1;
  background-color: #000000;

  &.completed {
    background-color: #000000;
    border-color: ${({ theme }) => theme.primary}40;
  }

  &.current {
    background: radial-gradient(circle at center, #e100ff8d, transparent 40%),
      radial-gradient(circle at top left, #ff9900, transparent 12%),
      radial-gradient(circle at top right, #ff0073, transparent 15%),
      radial-gradient(circle at bottom right, #ffbb00, transparent 30%),
      radial-gradient(circle at bottom left, #ff0073, transparent 25%),
      linear-gradient(96deg, #e7175d 0%, #f81f4e 100%);
  }

  &.pending {
    background: ${({ theme }) => theme.primary}40;
  }
`;

const CheckIcon = styled.img.attrs({ src: checkIcon })`
  width: 0.72rem;
  filter: invert(21%) sepia(66%) saturate(3861%) hue-rotate(326deg)
    brightness(90%) contrast(102%);
`;

export default ({ project } = {} as any) => {
  return (
    <Container>
      <Track></Track>
      <Items>
        {PROJECT_MAP.map((e: any, inx) => {
          const map = project.map.map((el: any, _: any, arr: any[]) => {
            const time = moment(el.deadline, "DD-MM-YY");

            return {
              ...el,
              status: (() => {
                if (_ > 0 && _ < arr.length - 1) {
                  const currentIndex =
                    time?.isAfter(moment(arr[_ - 1]?.deadline, "DD-MM-YY")) &&
                    time?.isBefore(moment(arr[_ + 1]?.deadline, "DD-MM-YY"))
                      ? _
                      : 0;

                  console.log("currentIndex :", currentIndex);

                  if (
                    time?.isAfter(moment(arr[_ - 1]?.deadline, "DD-MM-YY")) &&
                    time?.isBefore(moment(arr[_ + 1]?.deadline, "DD-MM-YY"))
                  )
                    return "current";

                  if (time?.isBefore(moment())) return "completed";

                  if (time?.isAfter(moment())) return "pending";
                }
              })(),
            };
          });

          const match = map.find((i: any) => i.id.match(e.id));

          const time = match && moment(match.deadline, "DD-MM-YY");

          return (
            <Item key={`projectmap-${e.id}`}>
              <Row style={{ alignItems: "flex-start" }}>
                <Count className={match?.status}>
                  {match?.status?.match("completed") ? <CheckIcon /> : inx + 1}
                </Count>
                <Column>
                  <Row>
                    <Title>{startCase(e.id)}</Title>{" "}
                    {!time?.isBefore(moment()) && (
                      <Deadline>
                        <TimeIcon />
                        {time ? time.format("LLL") : "TBA"}
                      </Deadline>
                    )}
                  </Row>

                  <Description>{e.description}</Description>
                </Column>
              </Row>
            </Item>
          );
        })}
      </Items>
    </Container>
  );
};
