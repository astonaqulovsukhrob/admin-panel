import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const pagesData = [
  {
    key: 1,
    text: "Dashboard",
    path: "/",
  },
  {
    key: 2,
    text: "Products",
    path: "/products",
  },
  {
    key: 3,
    text: "Categores",
    path: "/categores",
  },
];

function Pages() {
  const tabs = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  const handlePages = (item) => {
    dispatch({ type: "pages", payload: item });
  };

  return (
    <>
      {pagesData.map((item) => (
        <Link
          to={item.path}
          onClick={() => handlePages(item)}
          className="btn btn-dark mx-3"
        >
          {item.text}
        </Link>
      ))}
    </>
  );
}

export default Pages;
