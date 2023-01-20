import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import Calendar from "../../Generic/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import Table from "./Table";
import axios from "axios";
import { Button } from "antd";
import Modal from "./Modal";

const Attandances = () => {
  const { flowDate, flowID } = useParams();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(Number(flowDate));
  const [data, setData] = useState({});
  const [dataChanger, setDataChanger] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const date = new Date(Number(currentDate));
  const [modalOpen, setModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: "",
    surname: "",
    middleName: "",
  });
  const dayChangeHandler = (time) => {
    setCurrentDate(time);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const getNewUserData = (e) => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
    console.log(newUserData);
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
  }, [currentDate, dataChanger]);

  const addNewUser = () => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/user/create`,
      data: {
        fullName: `${newUserData.surname} ${newUserData.name} ${newUserData.middleName}`,
        flowType: `${flowID}`,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setNewUserData({
        name: "",
        surname: "",
        middleName: "",
      });
      setModalOpen(false);
      setDataChanger(!dataChanger);
    });
  };

  return (
    <Wrapper>
      <Title>Attandances</Title>
      <Modal
        open={modalOpen}
        closeModalHandler={closeModal}
        getNewUserData={getNewUserData}
        addUserHandler={addNewUser}
        newUserData={newUserData}
      />
      <Calendar date={date} onDayChange={dayChangeHandler} />
      <Button
        style={{ margin: "35px 0" }}
        type="primary"
        onClick={() => setModalOpen(true)}>
        + Add worker
      </Button>
      {isLoading ? (
        "Loading..."
      ) : (
        <Table data={data} createDate={date} flowType={flowID} />
      )}
      <Button
        style={{ margin: "35px 0" }}
        onClick={() => navigate(`/flow/${flowID}/count-work/${flowDate}`)}>
        Go to Count work
      </Button>
    </Wrapper>
  );
};

export default Attandances;
