import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import TableLoading from "../../Generic/TableLoading";
import { Wrapper } from "./style";
import Table from "./Table";

const Count_Work = () => {
  const { flowDate, flowID } = useParams();
  let navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [isLoading, setLoading] = useState(false);
  const date = new Date(Number(flowDate));
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
      },
    }).then((res) => {
      setLoading(false);
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);

  const dayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };

  return (
    <Wrapper>
      <Title>Count Work</Title>
      <Calendar date={date} onDayChange={dayChangeHandler} />
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table data={data} currentDate={currentDate} />
      )}

      <Button
        style={{ margin: "35px 0" }}
        onClick={() => navigate(`/flow/${flowID}/attandances/${flowDate}`)}
      >
        Go to attendances
      </Button>
    </Wrapper>
  );
};

export default Count_Work;
