import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Form, Input, Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { UploadOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

const FormItem = ({ setVisible, title, deletId, add }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("");

  const [storeData, setStoreData] = useState([]);
  const products = useSelector((state) => state.data);
  const store = useSelector((state) => state.Item);
  const dispatch = useDispatch();
  const id = products.length + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      toast.warning("Please enter something");
    }

    const data = {
      key: id,
      id: id,
      name,
      price,
      image,
      select,
    };

    const dataItem = {
      key: deletId,
      id: deletId,
      name,
      price,
      image,
      select,
    };
    setVisible(false);
    if (title) {
      dispatch({ type: "Add-product", payload: data });
      toast.success("Added product");
    } else {
      storeData.splice(dataItem.id - 1, 1, dataItem);
      dispatch({
        type: "Edit-product",
        payload: storeData,
      });
      setName("");
      setPrice("");
      setImage("");
      toast.success("Edit product");
    }
    setName("");
    setPrice("");
    setImage("");
  };

  const ediData = () => {
    const id = deletId[0];
    const [newData] = products.filter((item) => item.key === id);
    setStoreData([...products]);
    if (newData) {
      setName(newData.name);
      setPrice(newData.price);
      setImage(newData.image);
    }
  };

  useEffect(() => {
    if (add) {
      ediData();
    }
  }, [deletId]);

  // image
  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 45 }}
      autoComplete="off"
    >
      <Form.Item>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Select placeholder="Categores" onChange={(e) => setSelect(e)}>
          {store.map((item) => (
            <Option value={item.name} Select>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item htmlFor="img" name={"img"} label={<UploadOutlined />}>
        <Input
          type="file"
          id="img"
          onChange={handleChange}
          style={{ display: "none", visibility: "none" }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="mx-2"
          onClick={handleSubmit}
        >
          <i class="bi bi-send-plus-fill me-2"></i> Submit
        </Button>
        <Button type="primary" htmlType="submit" className="mx-2">
          <i class="bi bi-save me-2"></i>Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormItem;
