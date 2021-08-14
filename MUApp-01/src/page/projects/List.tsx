import { Button, Col, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsAPI from "../../services/APIS/Projects";
import { DetailProject } from "../../services/models";
import "./index.scss";

const { Paragraph } = Typography;

export const List: FC<{
  filterResult:
  | {
    city: string;
    district: string;
    investor: string;
  }
  | undefined;
}> = ({ filterResult }) => {
  const [pagination, setPagination] = useState({
    limit: 9,
    page: 1,
    total: 0,
    total_page: 1,
    reloadFlag: false,
  });

  const [data, setData] = useState<Array<DetailProject>>();

  useEffect(() => {
    handleLoadList();
  }, [filterResult, pagination.reloadFlag]);

  const handleLoadList = () => {
    const { limit, page } = pagination;
    ProjectsAPI.getListProjects(
      limit,
      page,
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
        setPagination((ele) => ({
          ...ele,
          limit: res.data.data.limit,
          page: res.data.data.page,
          total: res.data.data.count,
          total_page: res.data.data.total_page,
        }));
      } else {
        setData([]);
        setPagination((ele) => ({
          ...ele,
          limit: 9,
          page: 1,
          total: 0,
          total_page: 1,
        }));
      }
    });
  };

  const handleAddMore = () => {
    setPagination((ele) => ({
      ...ele,
      limit: ele.total > ele.limit ? ele.limit + 9 : ele.limit,
      reloadFlag: !ele.reloadFlag,
    }));
  };

  return (
    <>
      <div className="homepage-container">
        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {data && data.length !== 0 ? (
              data.map((item) => (
                <Col className="item-col" key={item.id}>
                  <Link to={`/gioi-thieu-du-an/${item.id}`}>
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
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button className="primary-btn" size="large" onClick={handleAddMore}>
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
