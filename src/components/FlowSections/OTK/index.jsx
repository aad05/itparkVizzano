import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
import TableLoading from "../../Generic/TableLoading";
import AddModal from "./AddModal";
const OTK = () => {
  const { flowDate, flowID } = useParams();
  const date = new Date(Number(flowDate));
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otks`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
      },
    }).then((res) => {
      setLoading(false);
      const { data } = res;
      setData(data?.data[0]);
    });
  }, [currentDate]);

  const onDayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };

  const onAdd = (value) => {
    setData({ ...data, data: [...data.data, value] });
  };

  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} onDayChange={onDayChangeHandler} />
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table data={data} currentDate={currentDate} />
      )}
      <AddModal
        isLoading={isLoading}
        open={addModalOpen}
        onOpen={() => setAddModalOpen(true)}
        onCancel={() => setAddModalOpen(false)}
        createDate={currentDate}
        onAdd={onAdd}
      />
    </Wrapper>
  );
};

export default OTK;
