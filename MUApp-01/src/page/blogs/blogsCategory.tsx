import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BlogsAPI from "../../services/APIS/Blogs";
import { customTime } from "../../services/helper";
import { ResBlogs } from "../../services/models";
import "./blogs.scss";
type newsParams = {
  url: string;
};

export const BlogCategory = () => {
  let { url } = useParams<newsParams>();
  const [name, setName] = useState('')
  const [data, setData] = useState<ResBlogs>({
    page: 1,
    limit: 6,
    url: url,
    search: "",
    list_blog: [],
    total_page: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  let history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(false);

    BlogsAPI.getListBySlug(data)
      .then((res) => {
        let respon = { ...res.data.data };
        let dataTemp = data;
        console.log(res, respon, 88)

        dataTemp.page += 1;
        dataTemp.count = respon.count;
        dataTemp.total_page = respon.total_page;
        dataTemp.list_blog.push(...respon.list_blog);
        setName(respon.list_blog[0].category_name || '')
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
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }} > {name}</h2>
        <div className="list-blog">
          {data ? data.list_blog.map((item, index) => {
            return (
              <div key={index} className="wrap-blog">
                <div style={{ width: "95%", margin: "auto" }}>
                  <div>
                    <img
                      alt="image2"
                      style={{ width: "100%", cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item.url}`)}
                      src={item.thumbnail}
                    />
                  </div>
                  <div
                    className="title-blog"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push(`/tin-tuc/${item.url}`)}
                  >
                    {item.title}
                  </div>
                  <div className="time-blog">
                    <i className="fal fa-clock"></i>{" "}
                    {customTime(item.created_at, "HH:mm DD/MM/YYYY")}
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              </div>
            );
          }) : <></>}
        </div>

        {data.total_page && data.page <= data.total_page ? (
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
        ) : null}
      </div>
    </div>
  );
};
