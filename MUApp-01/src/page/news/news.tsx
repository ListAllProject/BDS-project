import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import news_1 from "../../assets/images/news_1.png";
import BlogsAPI from "../../services/APIS/Blogs";
import { customTime } from "../../services/helper";
import { BlogObj, ResBlogs } from "../../services/models";
import "./news.scss";

type newsParams = {
  url: string;
};

export const News = () => {
  let { url } = useParams<newsParams>();
  let history = useHistory();
  const [newsContent, setNewsContent] = useState<BlogObj>();
  const [outstandingNews, setOutstandingNews] = useState<ResBlogs>();

  useEffect(() => {
    BlogsAPI.getBlogBySlug(url).then((res) => {
      console.log(res)
      setNewsContent(res.data.data[0]);
    });
  }, [url]);

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
console.log(newsContent)
  return (
    <div className="news-container">
      <Row>
        <Col span={20} className="main-content">
          <img
            alt={newsContent?.imgIcon}
            className="img-news"
            src={newsContent?.imgIcon}
          />
          <div className="content">
            <h2 className="news-title">{newsContent?.tieuDe}</h2>
            <p className="news-datetime">
              <i className="far fa-clock"></i>{" "}
              {customTime(newsContent?.ngayNhap, "HH:mm DD/MM/YYYY")}
            </p>
            <div
              className="long-content"
              dangerouslySetInnerHTML={{
                __html: newsContent?.noiDung as string,
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
                    onClick={() => history.push(`/tin-tuc/${item.url}`)}
                  />
                  <div className="news-item">
                    <p
                      className="sm-news-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item.url}`)}
                    >
                      {item.title}
                    </p>
                    <p className="news-datetime">
                      <i className="far fa-clock"></i>{" "}
                      {customTime(item.created_at, "HH:mm DD/MM/YYYY")}
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
