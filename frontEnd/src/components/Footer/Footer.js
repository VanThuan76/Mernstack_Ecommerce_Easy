import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-about">
            <h2>Về chúng tôi</h2>
            <ul>
              <li>
                <a>Giới thiệu</a>
              </li>
              <li>
                <a>Tin tức</a>
              </li>
              <li>
                <a>Cơ hội nghề nghiệp</a>
              </li>
              <li>
                <a>Cửa hàng</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-sp">
            <h2>Luôn sẵn sàng hỗ trợ</h2>
            <ul>
              <li>
                <a>Hỗ trợ 028.71.087.088 (07:00-21:00)</a>
              </li>
              <li>
                <a>Vận chuyển 1800 6936 (07:00-21:00)</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-delivery">
            <h2>Vận chuyển</h2>
            <ul>
              <li>
                <a>Phương thức vận chuyển</a>
              </li>
              <li>
                <a>Thanh toán</a>
              </li>
              <li>
                <a>Mã giảm giá</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-delivery-image">
              <img src="https://theme.hstatic.net/1000075078/1000610097/14/gov.png?v=664"></img>
          </div>
        </div>
        <div className="footer-bot">
          <p>Copyright © 2020 Tmart. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
