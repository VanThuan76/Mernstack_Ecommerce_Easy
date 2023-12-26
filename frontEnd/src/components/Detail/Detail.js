import React, { useEffect } from "react";
import "./detail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductById } from "../../actions/product/ProductAction";
import DetailInfo from "./DetailInfo";
import Blog from "./Blog";
import RateStar from "./RateStar";
import Comment from "./Comment";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.getProductById.product);
  useEffect(() => {
    dispatch(getproductById(id));
  }, [id]);
  return (
    <section id="detail">
      {detailProduct ? (
        <div className="detail">
          <div className="detail-title">
            <h2>{detailProduct.name}</h2>
          </div>
          <div className="detail-info">
            <div className="detail-info-slide">
              <div className="detail-info-slide-image">
                <img src={detailProduct.image}></img>
              </div>
              <div>
                <ul className="text-description">
                  <li>Mặt hàng mới 100%</li>
                  <li>Nguồn gốc suất xứ từ Việt Nam</li>
                  <li>
                    Cam kết hạn sử dụng và chất lượng đảm bảo đi kèm
                  </li>
                </ul>
              </div>
            </div>
            <DetailInfo product={detailProduct}></DetailInfo>
          </div>
          <div>
            <Blog />
          </div>
          <div>
            <RateStar />
          </div>
          <div>
            <Comment productId={id} />
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Detail;
