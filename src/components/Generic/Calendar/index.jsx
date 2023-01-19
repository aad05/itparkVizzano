import React, { useState } from "react";
import { DatePicker } from "antd";
import { Wrapper } from "./style";
import { Title } from "../Styles";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
const Calendar = ({ date, onDayChange }) => {
  const startDate = process.env.REACT_APP_START_DATE;
  const setUpDate = new Date();
  const [paramsDate, setParamsDate] = useState(date.getTime());
  const [showDate, setShowDate] = useState(true);
  const visibleDate = new Date(
    `${setUpDate.getMonth() + 1}/${
      setUpDate.getDate() + 1
    }/${setUpDate.getFullYear()}`
  );

  const currentDate = new Date(paramsDate);

  const minusDay = () => {
    const minusDayChange = currentDate.setDate(currentDate.getDate() - 1);
    setParamsDate(minusDayChange);
    onDayChange(minusDayChange);
  };
  const plusDay = () => {
    const plusDayChange = currentDate.setDate(currentDate.getDate() + 1);
    setParamsDate(plusDayChange);
    onDayChange(plusDayChange);
  };
  return (
    <Wrapper>
      {startDate <
      new Date(
        `${
          currentDate.getMonth() + 1
        }/${currentDate.getDate()}/${currentDate.getFullYear()}`
      ).getTime() ? (
        <ArrowLeftOutlined
          onClick={minusDay}
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      ) : (
        ""
      )}
      <Title onClick={() => setShowDate(false)}>
        {showDate ? (
          currentDate.toLocaleDateString(`ru-RU`, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
        ) : (
          <DatePicker
            open={!showDate}
            onOpenChange={() => {
              setShowDate(true);
            }}
            onSelect={(e) => {
              const selectedDate = e.$d.getTime();
              setParamsDate(selectedDate);
              onDayChange(selectedDate);
            }}
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
          />
        )}{" "}
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
        <ArrowRightOutlined
          onClick={plusDay}
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Calendar;
