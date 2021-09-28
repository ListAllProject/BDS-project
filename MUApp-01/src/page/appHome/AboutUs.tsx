import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import gift from "../../assets/images/gift.png";
import info from "../../assets/images/info.png";
import time_saving from "../../assets/images/time_saving.png";
import { Seperate } from "../../components/seperate/seperate";
import InfoAPI from "../../services/APIS/Info";
import "./home.scss";
import ReactHtmlParser from "react-html-parser";

export const AboutUs = () => {
  const [infor, setInfo] = useState<any>({});


  useEffect(() => {
    fetchDataHeader()
  }, []);

  const fetchDataHeader = () => {
    InfoAPI.getList()
      .then((res) => {
        let result = res.data.data;
        setInfo(result.list_company[0]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="homepage-container">
        <h1>{infor?.intro_main?.title}</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />
        <p className="intro-line">
          {ReactHtmlParser(infor?.intro_main?.sub_title)}
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
                <img alt="img"
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
            marginTop: 60,
          }}
        >
          <Button className="primary-btn" size="large" style={{}}>
            TÌM HIỂU THÊM
          </Button>
        </Row>
      </div>
    </>
  );
};
