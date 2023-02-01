import { Button, Input, Modal } from "antd";
import React from "react";
import { Wrapper } from "./style";

const WarningModal = ({ product, open, onOk, onCancel }) => {
  return (
    <Modal
      title="Warning"
      footer={null}
      width="400px"
      open={open}
      onCancel={onCancel}
      onOk={onOk}>
      <Wrapper>
        <p>Are you sure to delete this product ?</p>
        <Wrapper.Input status="error" value={product} />
        <Wrapper.Buttons>
          <Button onClick={onCancel}>Cancel</Button>
          <Button danger type="primary" onClick={onOk}>
            Delete
          </Button>
        </Wrapper.Buttons>
      </Wrapper>
    </Modal>
  );
};

export default WarningModal;
