import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductByPrice, getAllProduct } from "../../../actions/product/ProductAction";
import FilterMenu from "../FilterMenu/FilterMenu";
import Slider from "@mui/material/Slider";
import "../FilterProduct/index.css";
function FilterProduct() {
  const dispatch = useDispatch();
  // const [startPrice, setStartPrice] = useState(0);
  // const [endPrice, setEndPrice] = useState(0);
  const [values, setValues] = useState([0, 1000000]);

  const FilterProductByPrice = (values) => {
    if(values[0] === 0){
      dispatch(getAllProduct());
    }
    let startPrice = parseInt(values?.[0]) || 0;
    let endPrice = parseInt(values?.[1]) || 1000000;
    dispatch(filterProductByPrice(startPrice, endPrice));
  };

  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formatter.format(amount);
  };

  return (
    <div className="filter">
      <FilterMenu />
      <div className="options-price">
        <h3>Lọc giá</h3>
        <div className="list-max-min">
          <div>{formatCurrency(values?.[0])}</div>
          <div>{formatCurrency(values?.[1])}</div>
        </div>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={values}
          onChange={(_, value) => {
            setValues(value);
          }}
          min={0}
          max={1000000}
          sx={{
            width: "100%",
            margin: "0 auto",
            color: "#265073",
          }}
        />
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 10 }}>
          <button onClick={() => FilterProductByPrice(values)} className="btn-search">
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
