import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FadingLoaderStading from "../../components/loadBlogStading/loadBlogStading";
import BlogsAPI from "../../services/APIS/Blogs";
import { customTime } from "../../services/helper";
import { ResBlogs } from "../../services/models";
import loadding from "../../assets/images/loadding.gif";
import ReactHtmlParser from "react-html-parser";

import "./blogs.scss";

export const Blog = () => {
  // const [data, setData] = useState<ResBlogs>({
  //   page: 1,
  //   limit: 6,
  //   search: "",
  //   list_blog: [],
  //   total_page: 0,
  // });
  const [data, setData] = useState<any[]>([])

  const [outstandingBlogs, setOutstandingBlogs] = useState<any[]>([]);
  const [catBlogs, setCatBlogs] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  let history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);
     useEffect(() => {
       if (catBlogs.length != 0) {
         BlogsAPI.getListById(catBlogs[0].MaLoai)
           .then((res) => {
             let result1 = res.data.data;
             setData(result1);
                
               
              BlogsAPI.getListById(catBlogs[1].MaLoai)
                .then((res) => {
                  let result = res.data.data;
                  let array = result.concat(result1)
                  setData(array);
                })
                .catch((err) => console.log(err));
             
           })
           .catch((err) => console.log(err));
       }
  }, [catBlogs]);


  useEffect(() => {
     BlogsAPI.getCatBlog()
      .then((res) => {
        let result = res.data.data;
        let array = []
        result.map((i: { MaLoai: any; }) => {
          array.push(i.MaLoai)
        })
        setCatBlogs(result);
      })
       .catch((err) => console.log(err));

   
  }, []);

  function fetchData() {
    setLoading(false);

    // BlogsAPI.getList(data)
    BlogsAPI.getListNew()
      .then((res) => {
        // let respon = { ...res.data.data };
        // let dataTemp = data;

        // dataTemp.page += 1;
        // dataTemp.count = respon.count;
        // dataTemp.total_page = respon.total_page;
        // dataTemp.list_blog.push(...respon.list_blog);

        setOutstandingBlogs(res.data.data);

        setLoading(true);
      })
      .catch((err) => console.log(err));
  }

  function onLoadMore() {
    // if (data.total_page && data.page <= data.total_page) {
    //   fetchData();
    // }
  }
  return (
    <div className="container-blog">
      <div className="wrap-content-list-blog">
        <div className="top-content">
          <div
            className="top-left-content"
            onClick={() => history.push(`/tin-tuc/${outstandingBlogs[0]?.maTin}`)}
            style={{ cursor: "pointer" }}
          >
            <span style={{ width: "100%" }}>
              <img
                alt="image3"
                style={{
                  borderRadius: 8,
                  width: "100%",
                  // objectFit: "scale-down",
                  minHeight: 400,
                }}
                src={outstandingBlogs?.[0]?.imgIcon || loadding}

                // src={data?.list_blog[0]?.url}
              ></img>
            </span>

            <div className="tille-top1"> {outstandingBlogs?.[0]?.tieuDe}</div>

            <div className="time">
              {outstandingBlogs?.[0]?.ngayNhap && (
                <>
                  <i className="fal fa-clock"></i>{" "}
                  {customTime(outstandingBlogs?.[0]?.ngayNhap, "HH:mm DD/MM/YYYY")}
                </>
              )}
            </div>
          </div>
          <div className="top-right-content">
            <div style={{ fontSize: 24, fontWeight: 700 }}>Tin tức nổi bật</div>
            {outstandingBlogs ? (
              outstandingBlogs.length !== 0 ? (
                outstandingBlogs.map((item, index) => {
                  if (index !== 0) {
                    return (
                      <div
                        key={index}
                        className="content-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push(`/tin-tuc/${item.maTin}`)}
                      >
                        <div>
                          <img
                            alt="image1"
                            style={{
                              width: 117,
                            }}
                            // src={item.url}
                            src={item.imgIcon}
                          ></img>
                        </div>
                        <div
                          style={{
                            marginLeft: 16,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span className="title-blog">{item.tieuDe}</span>
                          <span className="time-blog">
                            <i className="fal fa-clock"></i>{" "}
                            {customTime(item.ngayNhap, "HH:mm DD/MM/YYYY")}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              ) : null
            ) : (
              <FadingLoaderStading />
            )}
          </div>
        </div>

        <div className="list-blog">
          {data?.map((item, index) => {
            // {data2.map((item, index) => {
            if (index >= 0) {
              return (
                <div key={index} className="wrap-blog">
                  <div style={{ width: "95%", margin: "auto" }}>
                    <div>
                      <img
                        alt="image2"
                        className={"thumbnail"}
                        onClick={() => history.push(`/tin-tuc/${item?.maTin}`)}
                        src={item?.imgIcon}
                      />
                    </div>
                    <div
                      className="title-blog"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push(`/tin-tuc/${item?.maTin}`)}
                    >
                      {item.tieuDe}
                    </div>
                    <div className="time-blog">
                      {/* <i className="fal fa-clock"></i>{" "} */}
                      {customTime(item.ngayNhap, "HH:mm DD/MM/YYYY")}
                    </div>
                    <div className="description">{ReactHtmlParser(item.noiDung)}</div>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>

        {/* {data.total_page !== undefined && data.page <= data.total_page && (
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
        )} */}
      </div>
    </div>
  );
};
