import React from "react";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import { HeaderWrap } from "../../layout/header/header";
import { FooterWrap } from "../../layout/footer/footer";
import lang_apec_golden_palaceson from "../../assets/images/lang_son_apec_golden_palace.png";
import pcti_bbch1 from "../../assets/images/pcti_bbch1.png";
import vincity_ocean_park_anh from "../../assets/images/vinCity.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";

export const BestSell = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="container">
        <h1>Các dự án đang bán tại BeeSky</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />

        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {[
              {
                link: lang_apec_golden_palaceson,
                name: "Vinhomes Ocean Park",
                description: "TP Biển hồ - Thiên đường nghỉ dưỡng mỗi ngày",
              },
              {
                link: pcti_bbch1,
                name: "Vinhomes Smart City",
                description:
                  "TP Thông minh đẳng cấp quốc tế năng động, hiện đại",
              },
              {
                link: vincity_ocean_park_anh,
                name: "Vinhomes Symphony",
                description: "Khu căn hộ cao cấp liền kề Vinhomes Riverside",
              },
            ].map((item) => (
              <Col className="item-col" span={7} key={item.link}>
                <img src={item.link} style={{ width: "100%" }} />
                <p className="item_title">{item.name}</p>
                <p className="item_description">{item.description}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
