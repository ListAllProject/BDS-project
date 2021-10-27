import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BlogsAPI from "../../services/APIS/Blogs";
import { customTime } from "../../services/helper";
import { ResBlogs } from "../../services/models";
import ReactHtmlParser from "react-html-parser";

import "./blogs.scss";
type newsParams = {
  url: string;
};

export const BlogCategory = () => {
  let { url } = useParams<newsParams>();
  const defaultValue = {
    page: 1,
    limit: 6,
    url: url,
    search: "",
    list_blog: [],
    total_page: 0,
  }
  const [name, setName] = useState('')
  const [data, setData] = useState<ResBlogs>(defaultValue);
  const [loading, setLoading] = useState<boolean>(false);

  let history = useHistory();

  useEffect(() => {
    fetchData(defaultValue);
  }, [url]);

  function fetchData(d: any) {
    setLoading(false);
    BlogsAPI.getListBySlug(d)
      .then((res) => {
        let respon = res.data.data;
        let dataTemp = d;

        dataTemp.page += 1;
        dataTemp.count = respon.count;
        dataTemp.total_page = respon.total_page;
        dataTemp.list_blog = respon;
        setName(respon[0].tenLoai || '')
        setData(dataTemp);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }

  function onLoadMore() {
    if (data.total_page && data.page <= data.total_page) {
      fetchData(data);
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
                      alt="image-blog"
                      style={{ width: "100%", cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item.maTin}`)}
                      src={item.imgIcon}
                    />
                  </div>
                  <div
                    className="title-blog"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push(`/tin-tuc/${item.maTin}`)}
                  >
                    {item.tieuDe}
                  </div>
                  <div className="time-blog">
                    <i className="fal fa-clock"></i>{" "}
                    {customTime(item.ngayNhap, "HH:mm DD/MM/YYYY")}
                  </div>
                  <div className="description">{ReactHtmlParser(item?.noiDung || "")}</div>
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
