import React from "react";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import { HeaderWrap } from "../../layout/header/header";
import { FooterWrap } from "../../layout/footer/footer";
import banner_1 from "../../assets/images/banner_1.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";
import { SearchingForm } from "./SearchingForm";
import { BestSell } from "./BestSell.tsx";
import { PopularItems } from "./PopularItems";

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

export const Home = () => {
  const [form] = Form.useForm();
  return (
    <>
      <HeaderWrap />

      <Content>
        <Carousel autoplay>
          {[1, 2, 3, 4].map((item) => (
            <div>
              <h3
                style={{
                  height: "500px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                }}
              >
                <img src={banner_1} style={{ width: "100%" }}></img>
              </h3>
            </div>
          ))}
        </Carousel>

        <SearchingForm />

        <BestSell />

        <PopularItems />
      </Content>

      <FooterWrap />
      {/* <Content>Content</Content>
                <Footer>Footer</Footer> */}
    </>
  );
};
