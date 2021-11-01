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
       MaTinh: number; MaHuyen: number; MaTT: number; isHome: number;
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleLoadList();
    setLoading(false);
  }, [filterResult, pagination.reloadFlag]);

  const handleLoadList = () => {
    const { limit, page } = pagination;
    ProjectsAPI.getListProjects(
      filterResult
    ).then((res) => {

      if (
        res.data.data &&
        res.data.data.length !== 0
      ) {
        setData(res.data.data);
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
    setLoading(true);
    setPagination((ele) => ({
      ...ele,
      limit: ele.total > ele.limit ? ele.limit + 9 : ele.limit,
      reloadFlag: !ele.reloadFlag,
    }));
  };
  console.log(data,98)
  return (
    <>
      <div className="homepage-container">
        <div className="project-container">
          <Row className="item-row" gutter={0}>
            {data && data.length !== 0 ? (
              data.map((item) => (
                <Col className="item-col" key={item.MaDA}>
                  <Link to={`/gioi-thieu-du-an/${item.MaDA}`}>
                    <img
                      alt={item.TenDA}
                      src={item.icon}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <p className="item_title">
                      {item?.TenDA ? item.TenDA.toLowerCase() : "" }
                    </p>
                    <Paragraph className="item_description" ellipsis={true}>
                      {item.sub_title}
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
          {/* <Button
            className="primary-btn"
            size="large"
            onClick={handleAddMore}
            loading={loading}
          >
            XEM THÊM{" "}
            <i
              className="fas fa-sort-down"
              style={{ margin: "0px 0px 5px 10px" }}
            ></i>
          </Button> */}
        </div>
      </div>
    </>
  );
};
