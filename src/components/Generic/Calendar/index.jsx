import React, { useState } from "react";
import { DatePicker } from "antd";
import { Wrapper } from "./style";
import { Title } from "../Styles";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Calendar = ({ date }) => {
  const startDate = 1668970800000;
  const [paramsDate, setParamsDate] = useState(date.getTime());
  const [showDate, setShowDate] = useState(true);
  const setUpDate = new Date();
  const visibleDate = new Date(
    `${setUpDate.getMonth() + 1}/${
      setUpDate.getDate() + 1
    }/${setUpDate.getFullYear()}`
  );

  const currentDate = new Date(paramsDate);

  const minusDay = () =>
    setParamsDate(currentDate.setDate(currentDate.getDate() - 1));

  const plusDay = () =>
    setParamsDate(currentDate.setDate(currentDate.getDate() + 1));

  return (
    <Wrapper>
      <BsFillCaretLeftFill
        onClick={minusDay}
        style={{ fontSize: "25px", cursor: "pointer" }}
      />
      <Title onClick={() => setShowDate(false)}>
        {showDate ? (
          currentDate.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        ) : (
          <DatePicker
            disabledDate={(value) => {
              const antdDate = new Date(value.$d);

              if (
                startDate < antdDate.getTime() &&
                visibleDate.getTime() > antdDate.getTime()
              ) {
                return false;
              }
              return true;
            }}
            open={!showDate}
            onOpenChange={(e) => {
              setShowDate(true);
            }}
            onSelect={(e) => {
              setShowDate(true);
              setParamsDate(new Date(e.$d).getTime());
            }}
          />
        )}
      </Title>
      {Number(
        `${setUpDate.getDate()}.${
          setUpDate.getMonth() + 1
        }${setUpDate.getFullYear()}`
      ) >
      Number(
        `${currentDate.getDate()}.${
          currentDate.getMonth() + 1
        }${currentDate.getFullYear()}`
      ) ? (
        <BsFillCaretRightFill
          onClick={plusDay}
          style={{ fontSize: "25px", cursor: "pointer" }}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Calendar;
