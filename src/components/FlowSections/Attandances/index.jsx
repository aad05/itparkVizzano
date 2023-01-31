import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import Calendar from "../../Generic/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import { Button } from "antd";
import AddModal from "./AddModal";
import TableLoading from "../../Generic/TableLoading";

const Attandances = () => {
  const { flowDate, flowID } = useParams();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const date = new Date(Number(currentDate));

  const dayChangeHandler = (prefixTime) => {
    setCurrentDate(prefixTime);
  };

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants`,
      method: "POST",
      data: { flowType: flowID, createDate: currentDate },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setLoading(false);
      setData(res?.data?.data[0]);
    });
  }, [currentDate]);

  const addHandler = (propData) => {
    console.log(data, "Testing");
    setData({ ...data, data: [...data?.data, propData] });
  };

  return (
    <Wrapper>
      <AddModal
        onAdd={addHandler}
        open={addModalOpen}
        onCancel={() => setAddModalOpen(false)}
      />
      <Title>Attandances</Title>
      <Calendar date={date} onDayChange={dayChangeHandler} />
      <Button
        style={{ margin: "35px 0" }}
        type="primary"
        onClick={() => setAddModalOpen(true)}
      >
        + Add worker
      </Button>
      {isLoading ? (
        <TableLoading count={10} />
      ) : (
        <Table data={data} createDate={date} flowType={flowID} />
      )}
      <Button
        style={{ margin: "35px 0" }}
        onClick={() => navigate(`/flow/${flowID}/count-work/${flowDate}`)}
      >
        Go to Count work
      </Button>
    </Wrapper>
  );
};

export default Attandances;
