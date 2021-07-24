import React, { Component, useRef, useState } from "react";
import "./tablePrice.scss";
import { Button, Carousel, Progress, Table } from "antd";
import imgSlider1 from "../../assets/images/5.png";
import imgSlider2 from "../../assets/images/6.png";
import imgSlider3 from "../../assets/images/4.png";

import iconHome from "../../assets/images/icon-home.png";

import bgrTable from "../../assets/images/bgr-table-price.png";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";
import { Seperate } from "../../components/seperate/seperate";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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

let arr = [10, 20, 30, 40, 50, 60, 70, 80];

const settings2 = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  accessibility: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
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

interface objData {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns = [
  {
    title: "",
    width: "calc(100% / 12)",
    dataIndex: "title",
    fixed: "left",
    key: "name",
    render: (text: string, obj: objData) => {
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "01 2PN+1 DN-TN 62,4",
    width: "calc(100% / 12)",
    dataIndex: "name",
    key: "name",

    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },

    // fixed: "left",
  },
  {
    title: "02 1PN+1 TN   42,9",
    width: "calc(100% / 12)",
    dataIndex: "age",
    key: "age",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
    // fixed: "left",
  },
  {
    title: "03 Studio TN 30,6",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "1",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "2",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "3",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "06 3PN TB-TN 75,6 (75,1)",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "4",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "8A 2PN+1 ĐB-TB 63,3 (62,9)",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "5",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "08 2PN+1 ĐB 54,1 (53,7)",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "6",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "9 2PN+1 ĐB 54,8 (54,3)",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "7",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "8",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: "11 2PN+1 ĐB-TB 63,4 (63)",
    dataIndex: "address",
    width: "calc(100% / 12)",
    key: "9",
    render: (text: string, obj: objData) => {
      console.log(text, obj);
      return {
        props: {
          style: {
            background: Number(obj.key) % 2 == 0 ? "#FFF8EA" : "",
            textAlign: "center",
          },
        },
        children: text,
      };
    },
  },
];

const data = [
  {
    title: "T5A số căn còn 1",
    key: "1",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    age: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    name: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "2",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "3",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "4",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "5",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "6",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
  {
    title: "T5 số căn còn 1",
    key: "7",
    address: (
      <i
        style={{ color: "#C4C4C4", fontSize: 22 }}
        className="fal fa-lock-alt"
      ></i>
    ),
    name: (
      <div
        style={{ color: "#DA0000", display: "flex", flexDirection: "column" }}
      >
        <span>Đã bán</span>
        <i style={{ fontSize: 22 }} className="fal fa-check-circle"></i>
      </div>
    ),
    age: (
      <div
        style={{ color: "#03A000", display: "flex", flexDirection: "column" }}
      >
        <span>1,775 tỷ</span>
        <i style={{ fontSize: 22 }} className="fal fa-shopping-cart"></i>
        <span>
          <i className="fas fa-heart"></i> 1
        </span>
      </div>
    ),
  },
];

export const TablePrice = () => {
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
                  <img src={imgSlider1} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider3} />
                </div>
                <div className="box-selected">
                  <img src={imgSlider1} />
                </div>
                <div className="box">
                  <img src={imgSlider2} />
                </div>
                <div className="box">
                  <img src={imgSlider3} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="slide-container-2">
          <div className="space-table-price"></div>
          <div className="content">
            <Slider {...settings2}>
              <div className="cirle-ratio-selected">
                <CircularProgressbarWithChildren strokeWidth={2} value={50}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: -55,
                      color: "#BB8E4C",
                      fontWeight: 500,
                      fontSize: 13,
                    }}
                  >
                    <span style={{ marginBottom: 2 }}>S1.01</span>
                    <img src={iconHome} />
                    <span style={{ marginTop: 2 }}>
                      22<span style={{ color: "#E0E0E0" }}>/38</span>
                    </span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              {arr.map((e) => {
                return (
                  <div className="cirle-ratio">
                    <CircularProgressbarWithChildren strokeWidth={2} value={e}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: -55,
                          color: "#BB8E4C",
                          fontWeight: 500,
                          fontSize: 13,
                        }}
                      >
                        <span style={{ marginBottom: 4 }}>S1.01</span>
                        <img src={iconHome} />
                        <span style={{ marginTop: 4 }}>
                          22<span style={{ color: "#E0E0E0" }}>/38</span>
                        </span>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="circle-note">
            <NoteInfor />
          </div>
        </div>
      </div>
      <div className="wrap-table">
        <Table
          pagination={false}
          columns={columns as any}
          dataSource={data}
          scroll={{ x: 1300 }}
        />
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
