import { Button } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Wrapper } from "../style";
import { useState } from "react";
import { Title } from "../../../Generic/Styles";
import { useNavigate } from "react-router-dom";

const exampleData = [
  {
    name: "Fake",
    statistics: 0,
  },
  {
    name: "Things",
    statistics: 0,
  },
];

const Table = ({ data, date }) => {
  const navigate = useNavigate();
  const [showBar, setShowBar] = useState({ show: false, active: null });
  return (
    <Wrapper>
      <TableContainer>
        <TableContainer.Table>
          <TableContainer.Thead>
            <TableContainer.Tr>
              <TableContainer.Th>
                <OrderedListOutlined />
              </TableContainer.Th>
              <TableContainer.Th>Name</TableContainer.Th>
              <TableContainer.Th count>Fake</TableContainer.Th>
              <TableContainer.Th defect>Total Price</TableContainer.Th>
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            </TableContainer.Tr>
          </TableContainer.Thead>
          <TableContainer.Tbody>
            {data.map((value, index) => {
              return (
                <TableContainer.Tr key={value.id}>
                  <TableContainer.Td>{index + 1}</TableContainer.Td>
                  <TableContainer.Td>{value.name}</TableContainer.Td>
                  <TableContainer.Td count>{value.data.fake}</TableContainer.Td>
                  <TableContainer.Td defect>
                    {" "}
                    {value.data.price}
                  </TableContainer.Td>
                  <TableContainer.Td isEnd>
                    <Button
                      style={{ marginRight: "10px" }}
                      onClick={() =>
                        setShowBar({
                          ...showBar,
                          show: showBar.active === index ? false : true,
                          active: showBar.active === index ? null : index,
                        })
                      }
                      type={showBar.active === index ? "primary" : "default"}
                    >
                      Show diagram
                    </Button>
                    <Button
                      type="text"
                      onClick={() =>
                        navigate(`/flow/${index + 1}/count-work/${date}`)
                      }
                    >
                      See with details
                    </Button>
                  </TableContainer.Td>
                </TableContainer.Tr>
              );
            })}
          </TableContainer.Tbody>
        </TableContainer.Table>
      </TableContainer>
      {!!showBar.show && (
        <>
          <Title>Flow {showBar.active + 1} diagram</Title>
          <BarChart
            width={350}
            height={300}
            data={exampleData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 50, right: 50 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="statistics"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </>
      )}
    </Wrapper>
  );
};

export default Table;

// button active type
//
