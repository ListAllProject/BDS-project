import React from "react";
import { Carousel, Layout, Form, Select, Row, Col, Slider, Button } from "antd";
import banner_1 from "../../assets/images/banner_1.png";
import "./home.scss";
import { SearchingForm } from "./SearchingForm";
// import { Seperate } from "../../components/seperate/seperate";
import { BestSell } from "./BestSell";
import { PopularItems } from "./PopularItems";
import { AboutUs } from "./AboutUs";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <Carousel autoplay>
          {[1, 2, 3, 4].map((item) => (
            <div>
              <h3
                style={{
                  // height: "500px",
                  color: "#fff",
                  lineHeight: "160px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <img src={banner_1} style={{ width: "100%" }}></img>
              </h3>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="home-container">
        <SearchingForm />

        <BestSell />

        <PopularItems />

        <AboutUs />
      </div>
    </div>
  );
};
