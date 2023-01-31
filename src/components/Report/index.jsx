import React from "react";
import { useState } from "react";
import Calendar from "../Generic/Calendar";
import { Title } from "../Generic/Styles";
import FlowReport from "../ReportSections/FlowReport";
import OTKReport from "../ReportSections/OTKReport";
import Store from "../Store";
import { Wrapper } from "./style";

const Report = () => {
  const [date, setDate] = useState(new Date().getTime());
  return (
    <Wrapper>
      <Title>Reports</Title>
      <Calendar
        date={new Date(date)}
        onDayChange={(prefixTime) => setDate(prefixTime)}
      />
      <FlowReport date={date} />
      <OTKReport date={date} />
      <Store disableFunction={true} />
    </Wrapper>
  );
};

export default Report;
