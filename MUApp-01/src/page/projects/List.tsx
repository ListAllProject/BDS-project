import { Col, Row, Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lang_apec_golden_palaceson from "../../assets/images/lang_son_apec_golden_palace.png";
import pcti_bbch1 from "../../assets/images/pcti_bbch1.png";
import vincity_ocean_park_anh from "../../assets/images/vinCity.png";
import ProjectsAPI from "../../services/APIS/Projects";
import { DetailProject } from "../../services/models";
import "./index.scss";

const { Paragraph } = Typography;

export const List = () => {
  const [pagination, setPagination] = useState({
    limit: 3,
    page: 1,
    total: 0,
    total_page: 1,
    reloadFlag: false,
  });
  const [filters, setFilters] = useState({
    city: "",
    investor: "",
    district: "",
  });
  const [data, setData] = useState<Array<DetailProject>>();

  useEffect(() => {
    handleLoadList();
  }, [filters, pagination.reloadFlag]);

  const handleLoadList = () => {
    const { city, investor, district } = filters;
    const { limit, page } = pagination;
    ProjectsAPI.getListProjects(limit, page, city, investor, district)
      .then((res) => {
        if (
          res.data.data &&
          res.data.data.list_projects &&
          res.data.data.list_projects.length !== 0
        ) {
          console.log(res.data.data.list_projects);
          setData(res.data.data.list_projects);
          setPagination((ele) => ({
            ...ele,
            limit: res.data.data.limit,
            page: res.data.data.page,
            total: res.data.data.count,
            total_page: res.data.data.total_page,
          }));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="homepage-container">
        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {data?.map((item) => (
              <Col className="item-col" key={item.id}>
                <Link to={`/chi-tiet-du-an/${item.id}`}>
                  <img
                    alt={item.detail_project.title}
                    src={item.detail_project.img}
                    style={{ width: "100%", height: "200px" }}
                  />
                  <p className="item_title">
                    {item.detail_project.title.toLowerCase()}
                  </p>
                  <Paragraph className="item_description" ellipsis={true}>
                    {item.introduction}
                  </Paragraph>
                </Link>
                {/* <p ></p> */}
              </Col>
            ))}
          </Row>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
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
