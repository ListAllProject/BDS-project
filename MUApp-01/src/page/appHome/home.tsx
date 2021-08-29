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
import loadding from "../../assets/images/loadding.gif"
import DoorDashFavorite from "../../components/loadBanner/loadBanner";

export const Home = () => {
  const [banners, setBanners] = useState<Array<BannerObj>>();
  useEffect(() => {
    HomeAPI.getBanners(1, 6).then((res) => {
      if (res.data.data && res.data.data.length !== 0) {
        setBanners(res.data.data);
      } else return;
    });

    // HomeAPI.getProvince().then((res) => console.log(res));
  }, []);

  return (
    <div className="home">
      <div>
        {banners ?
          <Carousel autoplay swipeToSlide draggable>
            {
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
          : <DoorDashFavorite />
        }
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
