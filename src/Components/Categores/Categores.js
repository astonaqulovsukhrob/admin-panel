import React from "react";
import { Table } from "antd";
import Column from "antd/lib/table/Column";
import { useSelector, useDispatch } from "react-redux";

const data = [
  {
    key: 1,
    name: `Edward King ${1}`,
    age: 32,
    address: `London, Park Lane no.`,
  },
];

function Categores({ setDelet }) {
  const store = useSelector((store) => store.Item);

  return (
    <>
      <Table
        rowSelection={{
          type: "radio",
          onChange: (e) => {
            setDelet(e);
          },
        }}
        className="table"
        dataSource={store}
      >
        <Column title="#" dataIndex="id" />
        <Column title="Name" dataIndex="name" />
      </Table>
    </>
  );
}

export default Categores;
