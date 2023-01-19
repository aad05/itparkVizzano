import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import axios from "axios";

const Table = ({ data: propData, createDate, flowType }) => {
  const [data, setData] = useState(propData);
  const [toggleChange, setToggleChange] = useState(false);
  const updateById = (shouldUpdateDate) => {
    setData({
      ...data,
      data: data.data.map((value) =>
        value._id === shouldUpdateDate._id
          ? { ...value, isCome: !value.isCome }
          : value
      ),
    });

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      data: {
        flowType,
        createDate: createDate.getTime(),
        _id: data?._id,
        shoudUpdateData: shouldUpdateDate,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  const updateAll = (isAllCome) => {
    setData({
      ...data,
      data: data.data.map((value) => {
        return { ...value, isCome: isAllCome };
      }),
      isAllCome,
    });

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      data: {
        flowType,
        createDate: createDate.getTime(),
        isAllCome: isAllCome,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  useEffect(() => {
    setData({ ...data, isAllCome: data?.data?.every((value) => value.isCome) });
  }, [toggleChange]);

  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>
              <OrderedListOutlined />
            </Wrapper.Th>
            <Wrapper.Th>
              <Checkbox
                onChange={(e) => {
                  updateAll(e.target.checked);
                }}
                checked={data?.isAllCome}
              />
            </Wrapper.Th>
            <Wrapper.Th>Full Name</Wrapper.Th>
            <Wrapper.Th isEnd>Action</Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.TBody>
          {data?.data?.map((value, index) => (
            <Wrapper.Tr key={value._id}>
              <Wrapper.Td>{index + 1}</Wrapper.Td>
              <Wrapper.Td>
                <Checkbox
                  onChange={() => {
                    setToggleChange(!toggleChange);
                    updateById({ ...value, isCome: !value.isCome });
                  }}
                  checked={value.isCome}
                />
              </Wrapper.Td>
              <Wrapper.Td>{value.fullName}</Wrapper.Td>
              <Wrapper.Td isEnd>
                <Button danger>Delete</Button>
              </Wrapper.Td>
            </Wrapper.Tr>
          ))}
        </Wrapper.TBody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export default Table;
