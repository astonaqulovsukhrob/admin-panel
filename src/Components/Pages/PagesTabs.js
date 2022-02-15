import React, { useState } from "react";
import { Tabs, Button } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const { TabPane } = Tabs;

const PagesTabs = () => {
  const Panes = useSelector((state) => state?.tabs);
  const [panes, setPanes] = useState(Panes);
  const [activeKey, setActiveKey] = useState(panes && panes[0]?.key);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...Panes]);
    setPanes(Panes);
  }, [Panes]);

  const onChange = (activeKey) => {
    navigate(Panes[activeKey].path);
    setActiveKey(activeKey);
  };

  const onEdit = (action) => {
    data?.splice(action - 1, action);
    dispatch({ type: "remov-tab", payload: data });
  };

  return (
    <div>
      <Tabs hideAdd type="editable-card" activeKey={activeKey} onEdit={onEdit}>
        {Panes?.map((item, i) => (
          <TabPane
            tab={
              <div onClick={() => onChange(i)}>
                <span>{item?.text}</span>
              </div>
            }
            key={item.key}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default PagesTabs;
