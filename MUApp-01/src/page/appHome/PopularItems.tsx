import { Row, Col, Spin } from "antd";
import room1 from "../../assets/images/room_1.png";
import room2 from "../../assets/images/room-2.png";
import room3 from "../../assets/images/room-3.png";
import "./home.scss";
import { Seperate } from "../../components/seperate/seperate";
import { ProductItem } from "../../components/product";
import { useEffect, useState } from "react";
import ProjectsBeelandAPI from "services/APIBEELAND/GetProject";
import { productsObj } from "services/models";
import { useHistory } from "react-router";
import { getCodeBody } from "services/helper";

export const PopularItems = () => {
  const [listProducts, setListProducts] = useState<productsObj[]>();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const tenCTDKVT = window.location.href.split(".");
    ProjectsBeelandAPI.getListProducts({
      TenCTDKVT: getCodeBody(),
      MaDA: 0,
      MaTN: 0,
      MaHuong: 0,
      MaLM: 0,
      MinFloor: 1,
      MaxFloor: 40,
      Price: 0,
      MinDT: 1,
      MaxDT: 400,
      Offset: 1,
      Limit: 6,
    }).then((res) => {
      if (res.data.data) {
        setListProducts(res.data.data);
      }
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="homepage-container">
        <h1>Bất động sản nổi bật</h1>
        <Seperate
          widthPar={350}
          widthChil={80}
          style={{ marginBottom: "3%" }}
        />

        <div className="project-container popular-items">
          <Row className="popular-items__row">
            {listProducts ? (
              listProducts.length !== 0 ? (
                listProducts.map((item, index) => (
                  <Col
                    span={7}
                    key={index}
                    className="col-contain-item"
                    style={{ marginBottom: 60 }}
                  >
                    <ProductItem
                      img_url={item.HinhAnh}
                      product_name={`${item.KyHieu}`}
                      product_kind={item.TenDA}
                      bedrooms={item.SoPhongNgu}
                      square_meters={item.DTThongThuy}
                      bathrooms={parseInt(item.SoPhongVS?.replace(" VS", ""))}
                      direct={item.TenPhuongHuong}
                      price={item.TongGiaTriHDMB}
                      onClick={() => {
                        history.push(`/chi-tiet-du-an/${item.MaSP}`);
                      }}
                    />
                  </Col>
                ))
              ) : (
                <div className="spinner-contain">
                  <p>Không có dữ liệu !</p>
                </div>
              )
            ) : (
              <div className="spinner-contain">
                <Spin />
                <p style={{ marginLeft: 10 }}>Đang load dữ liệu...</p>
              </div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};
