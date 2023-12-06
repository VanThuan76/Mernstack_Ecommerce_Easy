import React from "react";
import AllTypeProduct from "./AllTypeProduct";
import CreateInfoFilter from "./CreateInfoFilter";
import CreateNewType from "./CreateNewType";
import FilterMenu from "./FilterMenu";
import "./style.css";

function DataFilterProduct() {
  return (
    <div className="update-filter">
      <div className="update-filter-title">
        <span>Quản lý nhóm thể loại/thể loại</span>
      </div>
      <FilterMenu />
      <CreateInfoFilter />
      <AllTypeProduct />
      <CreateNewType />
    </div>
  );
}

export default DataFilterProduct;
