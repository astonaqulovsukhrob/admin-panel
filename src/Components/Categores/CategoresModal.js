import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Categores from "./Categores";

const CategoresModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [delet, setDelet] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Item);
  const id = products.length + 1;

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    if (!name) {
      toast.warning("Please enter something");
    }

    const data = {
      key: id,
      id: id,
      name,
    };
    dispatch({ type: "Add-categores", payload: data });
    toast.success("Add Categores");
    setIsModalVisible(false);
    setName("");
  };

  const Delete = () => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch({ type: "Delete-categores", payload: delet });
        toast.warning("Delete categores");
      },
    });
  };

  return (
    <>
      <Button type="primary" className="mx-2" onClick={showModal}>
        <i class="bi bi-send-plus-fill me-2"></i>Add
      </Button>
      <Button type="danger" className="mx-2" onClick={Delete}>
        <i class="bi bi-pencil-square me-2"></i> Delete
      </Button>
      <Modal
        title="Add Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
      >
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 45 }}
          autoComplete="off"
        >
          <Form.Item>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Categores setDelet={setDelet} />
    </>
  );
};

export default CategoresModal;
