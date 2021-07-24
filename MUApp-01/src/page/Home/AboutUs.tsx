import React from "react";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import info from "../../assets/images/info.png";
import time_saving from "../../assets/images/time_saving.png";
import gift from "../../assets/images/gift.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";

export const AboutUs = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="container">
        <h1>Về BeeSky Online</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />
        <p className="intro-line">
          Beesky Online - Sàn giao dịch Thương mại điện tử Bất động sản hàng đầu
          Việt.
          <br />
          MUA NHÀ TỪ XA, ƯU ĐÃI THẢ GA
        </p>

        <div className="project-container">
          <Row gutter={34} style={{ marginTop: "3%" }}>
            {[
              {
                link: info,
                name: "Thông tin minh bạch",
              },
              {
                link: time_saving,
                name: "Tiết kiệm thời gian, tiền bạc",
              },
              {
                link: gift,
                name: "Ưu đãi hấp dẫn",
              },
            ].map((item) => (
              <Col span={8} key={item.link}>
                <img
                  src={item.link}
                  //   style={{ width: "50px", height: "60px" }}
                />
                <p className="about_us_details">{item.name}</p>
              </Col>
            ))}
          </Row>
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <Button className="submit-btn" size="large" style={{}}>
            TÌM HIỂU THÊM
          </Button>
        </Row>
      </div>
    </>
  );
};
