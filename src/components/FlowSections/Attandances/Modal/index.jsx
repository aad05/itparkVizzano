import React from "react";
import { Wrapper } from "../Table/style";
import { Button, Form, Input, Modal } from "antd";
const ModalAddUser = ({
  open,
  closeModalHandler,
  getNewUserData,
  addUserHandler,
}) => {
  return (
    <Wrapper>
      <Modal
        title="Add Worker"
        open={open}
        onCancel={closeModalHandler}
        footer={null}>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 17,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input name="name" onChange={(e) => getNewUserData(e)} />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input name="surname" onChange={(e) => getNewUserData(e)} />
          </Form.Item>
          <Form.Item
            label="Middle Name"
            name="password"
            rules={[
              {
                message: "Please input your password!",
              },
            ]}>
            <Input name="middleName" onChange={(e) => getNewUserData(e)} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 2,
            }}>
            <Button type="primary" htmlType="submit" onClick={addUserHandler}>
              Add user
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default ModalAddUser;
