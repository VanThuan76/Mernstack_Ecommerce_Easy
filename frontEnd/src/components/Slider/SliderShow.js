import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "./slider.css";
// import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className}`} style={{ display: "none" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className}`} style={{ display: "none" }} onClick={onClick} />;
}

function SliderShow(props) {
  let { slider, slider1, slider2 } = props;
  const [nav, setNav] = useState({ nav1: null, nav2: null });

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  const settings = {
    loop: true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    slider1.slickNext();
  };
  const previous = () => {
    slider2.slickNext();
  };
  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2} ref={(slider) => (slider1 = slider)} {...settings}>
              <div className="img-item-slider" key={1}>
                <img
                  src="/images/qc1.jpg"
                  alt=""
                />
              </div>
              <div className="img-item-slider" key={2}>
                <img src="/images/qc2.jpg" alt="" />
              </div>
              <div className="img-item-slider" key={3}>
                <img src="/images/qc3.jpg" alt="" />
              </div>
              <div className="img-item-slider" key={4}>
                <img src="/images/qc4.jpg" alt="" />
              </div>
              <div className="img-item-slider" key={5}>
                <img src="/images/qc5.jpg" alt="" />
              </div>
            </Slider>
            <div className="carousel-left-move" onClick={() => previous()}>
              <div className="prev">
                <HiOutlineChevronLeft />
              </div>
              <div className="next" onClick={() => next()}>
                <HiOutlineChevronRight />
              </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider
              asNavFor={nav.nav1}
              ref={(slider) => (slider2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div className="des-item-slider">
                Giảm giá sập sàn <br></br> Ưu đãi ngập tràn
              </div>
              <div className="des-item-slider">
                Càng mua <br></br> Càng rẻ
              </div>
              <div className="des-item-slider">
                Ưu đãi trả góp <br></br> Nhân dịp cuối năm
              </div>
              <div className="des-item-slider">
                Chính sách bảo hành <br></br> Siêu ưu đãi
              </div>
              <div className="des-item-slider">
                Giảm giá shock <br></br> Toàn bộ mặt hàng
              </div>
            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="/images/sale1.jpg" alt="" />
          </div>
          <div className="carousel-right-item">
            <img src="/images/sale2.jpg" alt="" />
          </div>
          <div className="carousel-right-item">
            <img src="/images/sale3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderShow;
