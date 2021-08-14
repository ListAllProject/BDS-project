import { useEffect, useState } from "react";
import { Carousel } from "antd";
import banner_1 from "../../assets/images/banner_1.png";
import "./home.scss";
import { SearchingForm } from "./SearchingForm";
// import { Seperate } from "../../components/seperate/seperate";
import { BestSell } from "./BestSell";
import { PopularItems } from "./PopularItems";
import { AboutUs } from "./AboutUs";
import HomeAPI from "../../services/APIS/Home";
import { BannerObj } from "../../services/models";

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
        <Carousel autoplay swipeToSlide draggable>
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
                    // objectFit: "cover",
                    // objectPosition: "0 50%",
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
