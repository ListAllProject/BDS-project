import { Row, Col, Typography } from "antd";

import lang_apec_golden_palaceson from "../../assets/images/lang_son_apec_golden_palace.png";
import pcti_bbch1 from "../../assets/images/pcti_bbch1.png";
import vincity_ocean_park_anh from "../../assets/images/vinCity.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";
import { FC, useEffect, useState } from "react";
import { DetailProject } from "services/models";
import ProjectsAPI from "services/APIS/Projects";
import { Link } from "react-router-dom";

const { Paragraph } = Typography;

export const BestSell: FC<{
  filterResult:
    | {
        city: string;
        district: string;
        investor: string;
      }
    | undefined;
}> = ({ filterResult }) => {
  // const [form] = Form.useForm();
  const [data, setData] = useState<Array<DetailProject>>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoadList();
    setLoading(false);
  }, [filterResult]);

  const handleLoadList = () => {
    ProjectsAPI.getListProjects(
      3,
      1,
      filterResult?.city as string,
      filterResult?.investor as string,
      filterResult?.district as string
    ).then((res) => {
      if (
        res.data.data &&
        res.data.data.list_projects &&
        res.data.data.list_projects.length !== 0
      ) {
        setData(res.data.data.list_projects);
      } else {
        setData([]);
      }
    });
  };

  return (
    <>
      <div className="homepage-container">
        <h1>Các dự án đang bán tại BeeSky</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />

        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {data && data.length !== 0 ? (
              data.map((item) => (
                <Col className="item-col" key={item.id}>
                  <Link to={`/gioi-thieu-du-an/${item.url}/${item.id}`}>
                    <img
                      alt={item.detail_project.title}
                      src={item.detail_project.img}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <p className="item_title">
                      {item.main_title.toLowerCase()}
                    </p>
                    <Paragraph className="item_description" ellipsis={true}>
                      {item.introduction}
                    </Paragraph>
                  </Link>
                  {/* <p ></p> */}
                </Col>
              ))
            ) : (
              <i>Không có dữ liệu</i>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};
