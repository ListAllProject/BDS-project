import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import news from "../../assets/images/news.png";
import news_1 from "../../assets/images/news_1.png";
import BlogsAPI from "../../services/APIS/Blogs";
import "./news.scss";
import { BlogObj, ResBlogs } from "../../services/models";
import { customTime } from "../../services/helper";
import { useHistory } from "react-router-dom";

type newsParams = {
  id: string;
};

export const News = () => {
  let { id } = useParams<newsParams>();
  let history = useHistory();
  const [newsContent, setNewsContent] = useState<BlogObj>();
  const [outstandingNews, setOutstandingNews] = useState<ResBlogs>();

  useEffect(() => {
    BlogsAPI.getBlogByID(parseInt(id)).then((res) => {
      setNewsContent(res.data.data);
    });
  }, [id]);

  useEffect(() => {
    BlogsAPI.getList({
      page: 1,
      limit: 4,
      is_outstanding: true,
      list_blog: [],
      search: "",
    })
      .then((res) => {
        setOutstandingNews(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="news-container">
      <Row>
        <Col span={20} className="main-content">
          <img
            alt={newsContent?.thumbnail}
            className="img-news"
            src={newsContent?.thumbnail}
          />
          <div className="content">
            <h2 className="news-title">{newsContent?.title}</h2>
            <p className="news-datetime">
              <i className="far fa-clock"></i>{" "}
              {customTime(newsContent?.created_at, "HH:mm DD/MM/YYY")}
            </p>
            <div
              className="long-content"
              dangerouslySetInnerHTML={{
                __html: newsContent?.content_detail as string,
              }}
            />
          </div>
          {/* <p>{}</p> */}
        </Col>
        <Col span={4} className="popuplar-news">
          <p className="popuplar-news__title">Tin tức nổi bật</p>

          <Row className="popuplar-news__container">
            {outstandingNews?.list_blog &&
              outstandingNews?.list_blog.length !== 0 &&
              outstandingNews?.list_blog.map((item) => (
                <Col span={24} className="popuplar-news__item" key={item.id}>
                  <img
                    src={item.thumbnail ? item.thumbnail : news_1}
                    alt={item.url}
                    className="news-sm-image"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push(`/tin-tuc/${item.id}`)}
                  />
                  <div className="news-item">
                    <p
                      className="sm-news-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item.id}`)}
                    >
                      {item.title}
                    </p>
                    <p className="news-datetime">
                      <i className="far fa-clock"></i>{" "}
                      {customTime(item.created_at, "HH:mm DD/MM/YYY")}
                    </p>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
