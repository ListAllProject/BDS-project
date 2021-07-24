import React, { Component, useRef, useState } from "react";
import "./tablePrice.scss";
import { Carousel, Progress, Table } from "antd";
import imgSlider1 from "../../assets/images/5.png";
import imgSlider2 from "../../assets/images/6.png";
import bgrTable from "../../assets/images/bgr-table-price.png";

import Slider from "react-slick";
import { Seperate } from "../../components/seperate/seperate";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: (
    <div>
      <i className="far fa-chevron-left"></i>
    </div>
  ),
  prevArrow: (
    <span style={{ color: "white" }}>
      <i className="far fa-chevron-right"></i>
    </span>
  ),
};

const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  nextArrow: (
    <span>
      <i className="far fa-chevron-left"></i>
    </span>
  ),
  prevArrow: (
    <span style={{ color: "white" }}>
      <i className="far fa-chevron-right"></i>
    </span>
  ),
};

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];

export const TablePrice = () => {
  let refss = useRef(null);

  let [showNote, setShowNote] = useState(false);

  function setShowNotefunc() {
    setShowNote(true);
  }

  return (
    <div className="container-table-price">
      <div
        style={{
          backgroundImage: `url(${bgrTable})`,
          backgroundRepeat: "repeat-x",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="title-page">
          <h2>BẢNG GIÁ</h2>
          <Seperate widthChil={80} widthPar={350} />
        </div>
        <div className="slide-container-1">
          <div className="wrap-slider">
            <div style={{ padding: 20, marginTop: 20 }}>
              <Slider {...settings}>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="slide-container-2">
          <div className="space-table-price"></div>
          <div style={{ padding: 20, marginTop: 20 }}>
            <Slider {...settings2}>
              <div className="box">
                <img src={imgSlider2} />
              </div>
              <div className="box">
                <img src={imgSlider2} />
              </div>
              <div className="box">
                <img src={imgSlider2} />
              </div>
              <div className="box">
                <img src={imgSlider2} />
              </div>
              <div className="box">
                <img src={imgSlider2} />
              </div>
              <div className="box">
                <img src={imgSlider2} />
              </div>
            </Slider>
          </div>
          <div className="circle-note">
            <NoteInfor />
          </div>
        </div>
      </div>
      <div>
        {/* <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} /> */}
      </div>
    </div>
  );
};

interface state {
  show: boolean;
}

class NoteInfor extends Component<any, state> {
  refss: HTMLElement | null = null;

  constructor(props: any) {
    super(props);

    this.state = { show: false };
  }

  onClick = () => {
    if (this.refss) {
      if (this.state.show) {
        this.refss.style.opacity = "0";
        this.refss.style.transition = "400ms";
      } else {
        this.refss.style.opacity = "1";
        this.refss.style.transition = "400ms";
      }
    }

    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="wrap-btn-note">
          <div className="circle-child" onClick={this.onClick}>
            {!this.state.show ? (
              "Chú thích"
            ) : (
              <span style={{ fontSize: 25 }}>X</span>
            )}
          </div>
        </div>
        <div ref={(ref) => (this.refss = ref)} className="square-content">
          <div className="ct-status">
            <span className="st-title">Tình Trạng</span>
            <span className="st-item" style={{ marginTop: 5 }}>
              <i
                style={{ color: "#03A000", width: 30 }}
                className="far fa-shopping-cart"
              ></i>
              <span>Còn hàng</span>
            </span>
            <span className="st-item">
              <i
                style={{ color: "#3C79E6", width: 30 }}
                className="far fa-cart-arrow-down"
              ></i>
              <span>Đặt mua bán</span>
            </span>
            <span className="st-item">
              <i
                style={{ color: "#C4C4C4", width: 30 }}
                className="far fa-lock-alt"
              ></i>
              <span>Không mở bán</span>
            </span>
            <span className="st-item">
              <i
                style={{ color: "#DA0000", width: 30 }}
                className="far fa-check-circle"
              ></i>
              <span>Đã bán</span>
            </span>
          </div>
          <div className="space-div"></div>
          <div className="ct-amount">
            <span className="st-title">Số Lượng</span>
            <span className="st-item" style={{ marginTop: 5 }}>
              8
            </span>
            <span className="st-item">0</span>
            <span className="st-item">105</span>
            <span className="st-item">2</span>
          </div>
        </div>
      </div>
    );
  }
}
