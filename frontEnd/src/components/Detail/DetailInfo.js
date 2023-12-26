import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "../../actions/CartAction";
import { formatPrice } from "../../unitls";

function DetailInfo({ product }) {
  const dispatch = useDispatch();

  function handleAddProduct(product) {
    const action = AddToCart(product);
    dispatch(action);
  }
  return (
    <div className="detail-info-right">
      <div className="detail-info-right-price">
        <p className="price-box">
          <span className="saleprice">{formatPrice(product.salePrice)}</span>
          <span className="old-price">
            Giá niêm yết : <strong className="price">{formatPrice(product.price)}</strong>{" "}
          </span>
        </p>
        <p className="detail-info-sale">Sản phẩm nằm trong chương trình HOT SALE CUỐI TUẦN - Thanh toán nhanh chóng!</p>
      </div>

      <div className="detail-info-right-buy">
        <div className="detail-info-right-buy-now">
          <Link to="/cart" onClick={() => handleAddProduct(product)}>
            <strong>Mua ngay</strong>
            <br></br>
            <span>(Giao hàng tận nhà hoặc nhận hàng tại cửa hàng)</span>
          </Link>
        </div>
        <div className="detail-info-right-buy-installment">
          <a href="">
            <strong>0% Lãi suất</strong>
            <br></br>
            <span>(Review by ONLINE SHOP)</span>
          </a>
          <a href="">
            <strong>Thanh toán VIA CARD</strong>
            <br></br>
            <span>(Visa, Master, JCB)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
