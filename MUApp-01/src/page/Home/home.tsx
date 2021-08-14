import { Carousel } from "antd";
import { useEffect, useState } from "react";
import HomeAPI from "../../services/APIS/Home";
import { BannerObj } from "../../services/models";
import { AboutUs } from "./AboutUs";
// import { Seperate } from "../../components/seperate/seperate";
import { BestSell } from "./BestSell";
import "./home.scss";
import { PopularItems } from "./PopularItems";
import { SearchingForm } from "./SearchingForm";

export const Home = () => {
  const [banners, setBanners] = useState<Array<BannerObj>>();
  useEffect(() => {
    HomeAPI.getBanners(1, 4).then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setBanners(res.data.data);
      } else return;
    });
  }, []);

  return (
    <div className="home">
      <div>
        <Carousel autoplay>
          {banners &&
            banners.length !== 0 &&
            banners.map((item) => (
              <div
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt={item.project_title}
                  src={item.value}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "500px",
                    margin: "auto",
                    objectFit: "cover",
                    objectPosition: "0 60%",
                  }}
                ></img>
              </div>
            ))}
        </Carousel>
      </div>

      <div className="home-container">
        <SearchingForm />

        <BestSell />

        <PopularItems />

        <AboutUs />
      </div>
    </div>
  );
};
