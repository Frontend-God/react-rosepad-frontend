import caretIcon from "assets/icons/caret.svg";
import glassIcon from "assets/icons/glass.svg";
import tileIcon from "assets/icons/tile.svg";
import IconBtn from "components/IconBtn";
import Input from "components/Input";
import useOutsideListener from "hooks/useOutsideListener";
import { range } from "lodash";
import moment from "moment";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CalendarCard from "./CalendarCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  background: ${({ theme }) => theme.bg};
  padding-bottom: 5rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  margin: 2rem auto 0 auto;
  max-width: min(1920px, calc(100% - 16rem));
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 10rem;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-auto-rows: 7rem;
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 0;
  width: 100%;
  gap: 1rem;
`;

const WeekDay = styled.h5`
  font-family: "Nasalization";
  opacity: 0.56;
  gap: 1rem;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const CurrentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CurrentSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const Caret = styled.button`
  display: grid;
  place-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 0.64rem;
  border-radius: 0.5rem;
  width: fit-content;
  height: fit-content;

  &:first-child {
    transform: rotate(90deg);
  }

  &:last-child {
    transform: rotate(-90deg);
  }

  &:hover {
    background-color: ${({ theme }) => theme.inputBG};
  }
`;

const CaretIcon = styled.img.attrs({ src: caretIcon })`
  width: 0.7rem;
  filter: invert(1);
`;

const YearDropdown: any = styled.div`
  display: grid;
  place-content: center;
  position: relative;
`;

const SelectedYear = styled.div`
  text-align: center;
  font-family: "Nasalization";
  opacity: 0.56;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 0.36rem;
  cursor: pointer;
  width: fit-content;

  &:hover {
    opacity: 0.9;

    &:hover {
      background-color: #8b8a8a13;
    }
  }
`;

const Years = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: absolute;
  z-index: 10;
  background-color: black;
  border-radius: 0.5rem;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: 12rem;
  overflow: auto;
`;

const Year: any = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.36rem;
  text-align: center;
  opacity: 0.56;
  font-family: "Nasalization";
  text-transform: uppercase;

  &:hover {
    background-color: #8b8a8a13;
  }

  &.selected {
    opacity: 0.9;
  }
`;

const MonthDropdown: any = styled.div`
  display: grid;
  place-content: center;
  position: relative;
`;

const SelectedMonth = styled.div`
  text-align: center;
  font-family: "Nasalization";
  opacity: 0.72;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 0.36rem;
  cursor: pointer;
  width: fit-content;

  &:hover {
    opacity: 0.97;

    &:hover {
      background-color: #8b8a8a13;
    }
  }
`;

const Months = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: absolute;
  z-index: 10;
  background-color: black;
  border-radius: 0.5rem;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: 12rem;
  overflow: auto;
`;

const Month: any = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.36rem;
  text-align: center;
  opacity: 0.56;
  font-family: "Nasalization";
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    background-color: #8b8a8a13;
  }

  &.selected {
    opacity: 0.9;
  }
`;

export default () => {
  const navigate = useNavigate();

  const weekdays = moment.weekdaysShort();
  const months = moment.months();
  const years = range(2021, 2031);

  const [currentMonth, setCurrentMonth] = useState(months[moment().month()]);
  const [currentYear, setCurrentYear] = useState(moment().year());

  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);

  const yearRef = useRef();
  const monthRef = useRef();

  useOutsideListener(monthRef, setIsMonthOpen);
  useOutsideListener(yearRef, setIsYearOpen);

  const daysCount = moment(currentMonth, "MMMM YYYY").daysInMonth();

  const [calendar, setCalendar]: any = useState([]);

  useMemo(() => {
    const items = [];
    for (let i = 0; i < daysCount; i++) {
      items.push(
        moment()
          .set("year", currentYear)
          .set("month", months.indexOf(currentMonth))
          .date(i + 1)
      );
    }

    setCalendar(items);
  }, [currentMonth, currentYear, daysCount, months]);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Project Calendar</Title>
          <More>
            <Input icon={glassIcon} placeholder="Search Calendar" />
            <IconBtn
              icon={tileIcon}
              label="List View"
              onClick={() => navigate("/projects")}
            />
          </More>
        </Header>
        <Body>
          <CurrentWrapper>
            <Caret
              onClick={() => {
                if (0 < months.indexOf(currentMonth)) {
                  setCurrentMonth(months[months.indexOf(currentMonth) - 1]);
                } else {
                  setCurrentYear(currentYear - 1);
                  setCurrentMonth(months.pop() as any);
                }
              }}
            >
              <CaretIcon />
            </Caret>
            <CurrentSelection>
              <MonthDropdown ref={monthRef}>
                <SelectedMonth onClick={() => setIsMonthOpen(!isMonthOpen)}>
                  {currentMonth}
                </SelectedMonth>
                {isMonthOpen && (
                  <Months>
                    {months.map((e) => (
                      <Month
                        id={`months-${e}`}
                        className={currentMonth === e && "selected"}
                        onClick={() => (
                          setCurrentMonth(e), setIsMonthOpen(!isMonthOpen)
                        )}
                      >
                        {e}
                      </Month>
                    ))}
                  </Months>
                )}
              </MonthDropdown>

              <YearDropdown ref={yearRef}>
                <SelectedYear onClick={() => setIsYearOpen(!isYearOpen)}>
                  {currentYear}
                </SelectedYear>
                {isYearOpen && (
                  <Years>
                    {years.map((e) => (
                      <Year
                        id={`years-${e}`}
                        className={currentYear === e && "selected"}
                        onClick={() => (
                          setCurrentYear(e), setIsYearOpen(!isYearOpen)
                        )}
                      >
                        {e}
                      </Year>
                    ))}
                  </Years>
                )}
              </YearDropdown>
            </CurrentSelection>
            <Caret
              onClick={() => {
                if (months.indexOf(currentMonth) < months.length - 1) {
                  setCurrentMonth(months[months.indexOf(currentMonth) + 1]);
                } else {
                  setCurrentYear(currentYear + 1);
                  setCurrentMonth(months[0] as any);
                }
              }}
            >
              <CaretIcon />
            </Caret>
          </CurrentWrapper>
          <WeekDays>
            {weekdays.map((d) => (
              <WeekDay key={`wday-${d}`}>{d}</WeekDay>
            ))}
          </WeekDays>
          <Days>
            {calendar.map((d: any) => (
              <CalendarCard key={`day-${d}`} date={d} />
            ))}
          </Days>
        </Body>
      </Container>
    </Wrapper>
  );
};
