import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import news from "../../assets/images/news.png";
import news_1 from "../../assets/images/news_1.png";
import BlogsAPI from "../../services/APIS/Blogs";
import "./news.scss";

export const News = () => {
  let params = useParams().id;
  useEffect(() => {
    // BlogsAPI.getBlogByID(id).then((res) => {
    //   console.log(res);
    // });

    console.log(params);
  }, []);

  return (
    <div className="news-container">
      <Row>
        <Col span={20} className="main-content">
          <img alt="img-news" src={news} />
          <p className="content">
            Là toà căn hộ mở bán cuối cùng tại "phân khu trái tim" của đại đô
            thị Vinhomes Ocean Park, S1.02 tiên phong ứng dụng công nghệ Smart
            Home với sứ mệnh nâng cao chuẩn mực sống cho cư dân. Không chỉ thừa
            hưởng hệ sinh thái hoàn hảo và đẳng cấp của thành phố biển hồ
            Vinhomes Ocean Park, S1.02 còn là tâm điểm kết nối mọi tiện ích, hội
            tụ đầy đủ các yếu tố nhằm phát triển toàn diện cả tinh thần - thể
            chất - giáo dục cho cư dân, hứa hẹn là điểm sáng văn minh, sôi động
            bậc nhất tại trung tâm phía Đông Hà Nội.
          </p>
        </Col>
        <Col span={4} className="popuplar-news">
          <p className="popuplar-news__title">Tin tức nổi bật</p>

          <Row className="popuplar-news__container">
            {[1, 2, 3, 4].map((item) => (
              <Col span={24} className="popuplar-news__item">
                <img src={news_1} alt="sm-imageaa" className="news-sm-image" />
                <div className="news-item">
                  <p className="sm-news-title">
                    Vinhomes Ocean Park - Nơi mọi ô cửa đều nhìn ra miền xanh
                    bao la
                  </p>
                  <p className="news-datetime">
                    <i className="far fa-clock"></i> Thứ 2, 08/07/2019
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
