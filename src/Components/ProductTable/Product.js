import React, { useEffect, useState } from "react";
import { Space, Table, Image } from "antd";
import Column from "antd/lib/table/Column";
import { useSelector } from "react-redux";

function Product({ setTitle, setDeletId, setAdd }) {
  const store = useSelector((state) => state.data);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Categores",
      dataIndex: "select",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => <img src={image} alt="" />,
    },
  ];

  return (
    <>
      <Table
        rowSelection={{
          type: "radio",
          onChange: (e) => {
            setDeletId(e);
            setTitle(false);
            setAdd(true);
          },
        }}
        className="table"
        dataSource={store}
        columns={columns}
      />
    </>
  );
}

export default Product;
