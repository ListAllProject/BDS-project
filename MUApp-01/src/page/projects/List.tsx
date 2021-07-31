import { Col, Row, Button } from "antd";
import lang_apec_golden_palaceson from "../../assets/images/lang_son_apec_golden_palace.png";
import pcti_bbch1 from "../../assets/images/pcti_bbch1.png";
import vincity_ocean_park_anh from "../../assets/images/vinCity.png";
import "./index.scss";


export const List = () => {
  return (
    <>
      <div className="homepage-container">

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
              {
                link: lang_apec_golden_palaceson,
                name: "Vinhomes Ocean Park",
                description: "TP Biển hồ - Thiên đường nghỉ dưỡng mỗi ngày",
              },
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
           
              {
                link: vincity_ocean_park_anh,
                name: "Vinhomes Symphony",
                description: "Khu căn hộ cao cấp liền kề Vinhomes Riverside",
              },
            ].map((item) => (
              <Col className="item-col" key={item.link}>
                <img alt="img"
                  src={item.link}
                  style={{ width: "100%", height: "200px" }}
                />
                <p className="item_title">{item.name}</p>
                <p className="item_description">{item.description}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop:20 }}>
          <Button className="primary-btn" size="large">
            XEM THÊM{" "}
            <i
              className="fas fa-sort-down"
              style={{ margin: "0px 0px 5px 10px" }}
            ></i>
          </Button>
        </div>
      </div>
    </>
  );
};
