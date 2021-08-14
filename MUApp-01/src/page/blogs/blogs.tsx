import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import topimg from "../../assets/images/bgr-blog.jpg";
import BlogsAPI from "../../services/APIS/Blogs";
import { customTime } from "../../services/helper";
import { ResBlogs } from "../../services/models";
import "./blogs.scss";

export const Blog = () => {
  const [data, setData] = useState<ResBlogs>({
    page: 1,
    limit: 6,
    search: "",
    list_blog: [],
    total_page: 0,
  });
  const [outstandingBlogs, setOutstandingBlogs] = useState<ResBlogs>();
  const [loading, setLoading] = useState<boolean>(false);
  let history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    BlogsAPI.getList({
      page: 1,
      limit: 4,
      is_outstanding: true,
      list_blog: [],
      search: "",
    })
      .then((res) => {
        setOutstandingBlogs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function fetchData() {
    setLoading(false);

    BlogsAPI.getList(data)
      .then((res) => {
        let respon = { ...res.data.data };
        let dataTemp = data;

        dataTemp.page += 1;
        dataTemp.count = respon.count;
        dataTemp.total_page = respon.total_page;
        dataTemp.list_blog.push(...respon.list_blog);

        setData(dataTemp);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }

  function onLoadMore() {
    if (data.total_page && data.page <= data.total_page) {
      fetchData();
    }
  }

  return (
    <div className="container-blog">
      <div className="wrap-content-list-blog">
        <div className="top-content">
          <div
            className="top-left-content"
            onClick={() => history.push(`/tin-tuc/${data?.list_blog[0]?.id}`)}
            style={{ cursor: "pointer" }}
          >
            <span style={{ width: "100%" }}>
              <img
                alt="image3"
                style={{
                  borderRadius: 8,
                  width: "100%",
                  objectFit: "scale-down",
                  minHeight: 400,
                }}
                src={topimg}

              // src={data?.list_blog[0]?.url}
              ></img>
            </span>

            <div className="tille-top1"> {data?.list_blog[0]?.title}</div>

            <div className="time">
              <i className="fal fa-clock"></i> Thứ 2 ,08/07/2019
            </div>
          </div>
          <div className="top-right-content">
            <div style={{ fontSize: 24, fontWeight: 700 }}>Tin tức nổi bật</div>
            {outstandingBlogs?.list_blog?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="content-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push(`/tin-tuc/${item.id}`)}
                >
                  <div>
                    <img
                      alt="image1"
                      style={{
                        width: 117,
                      }}
                      // src={item.url}
                      src={item.thumbnail}
                    ></img>
                  </div>
                  <div
                    style={{
                      marginLeft: 16,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="title-blog">{item.title}</span>
                    <span className="time-blog">
                      <i className="fal fa-clock"></i> Thứ 2 ,08/07/2019
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="list-blog">
          {data?.list_blog.map((item, index) => {
            // {data2.map((item, index) => {
            if (index > 0) {
              return (
                <div key={index} className="wrap-blog">
                  <div style={{ width: "95%", margin: "auto" }}>
                    <div>
                      <img
                        alt="image2"
                        style={{ width: "100%", cursor: "pointer" }}
                        // src={`http://localhost:3000/${item.url}`}
                        onClick={() => history.push(`/tin-tuc/${item.id}`)}
                        src={item.thumbnail}
                      />
                    </div>
                    <div
                      className="title-blog"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item.id}`)}
                    >
                      {item.title}
                    </div>
                    <div className="time-blog">
                      <i className="fal fa-clock"></i>{" "}
                      {customTime("2021-07-30 14:10:33", "HH:mm DD/MM/YYY")}
                    </div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>

        {data.total_page && data.page <= data.total_page && (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <span onClick={onLoadMore} className="btn-loadmore">
              <span style={{ marginRight: 5 }}>Xem Thêm</span>
              {loading ? (
                <i style={{ marginBottom: 4 }} className="fas fa-sort-down"></i>
              ) : (
                <i className="fal fa-spinner fa-spin"></i>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
