import { Col, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsAPI from "services/APIS/Projects";
import { DetailProject } from "services/models";
import { Seperate } from "../../components/seperate/seperate";
import "./home.scss";


const { Paragraph } = Typography;

export const BestSell: FC<{
  filterResult:
  | {
    MaTinh: number;
    MaHuyen: number;
    MaTT: number;
    isHome: number
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
      filterResult
    ).then((res) => {

      if (
        res.data.data &&
        res.data.data.length !== 0
      ) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    });
  };

  return (
    <>
      <div className="homepage-container">
        <h1>Các dự án đang mở bán</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />

        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {data && data.length !== 0 ? (
              data.slice(0, 3).map((item) => (
                <Col className="item-col" key={item.MaDA}>
                  <Link to={`/gioi-thieu-du-an/${item.MaDA}`}>
                    <img
                      alt={item.TenDA}
                      src={item.icon}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <p className="item_title">
                      {item.TenDA?.toLowerCase() || "title"} 
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
