import React from "react";
import { Modal, Form, Input, Avatar } from "antd";
import { useAuthUser } from "react-auth-kit";
import { Wrapper } from "./style";

const UserModal = ({ open, onCancel }) => {
  const user = useAuthUser();
  return (
    <Wrapper>
      <Modal
        title="Profile"
        open={open}
        onCancel={onCancel}
        okButtonProps={{
          disabled: true,
        }}
        okText="Save"
      >
        <Wrapper.Container>
          <Avatar
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
              margin: "0 auto",
            }}
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          >
            {user().fullName[0].toUpperCase()}
          </Avatar>
        </Wrapper.Container>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item label="Name">
            <Input disabled={true} value={user().fullName.split(" ")[0]} />
          </Form.Item>

          <Form.Item label="Surname">
            <Input disabled={true} value={user().fullName.split(" ")[1]} />
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default UserModal;
