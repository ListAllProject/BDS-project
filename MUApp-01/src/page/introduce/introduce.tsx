import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import iconHome from "../../assets/images/icon-home-introduce.png";
import iconTextTop from "../../assets/images/icon-text-top.png";
import num1 from "../../assets/images/num1.png";
import num2 from "../../assets/images/num2.png";
import num3 from "../../assets/images/num3.png";
import num4 from "../../assets/images/num4.png";
import num5 from "../../assets/images/num5.png";
import num6 from "../../assets/images/num6.png";
import num7 from "../../assets/images/num7.png";
import num8 from "../../assets/images/num8.png";
import vector5 from "../../assets/images/Vector5.png";
import { Seperate } from "../../components/seperate/seperate";
import CustomSlider from "../../components/slider/slider";
import BannersAPI from "../../services/APIS/Banner";
import ImagesAPI from "../../services/APIS/Images";
import ProjectsAPI from "../../services/APIS/Projects";
import ReasonsAPI from "../../services/APIS/Reason";
import { BannerObj, DetailProject, ImageObj, ReasonObj } from "../../services/models";
import "./introduce.scss";


const ordinalNumbers = [num1, num2, num3, num4, num5, num6, num7, num8]

const settings = {
  infinite: true,
};

const settings2 = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // focusOnSelect: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

type introduceParams = {
  id: string;
  url: string
}

export const Introduce = () => {
  const { id, url } = useParams<introduceParams>();

  const [reasons, setReasons] = useState<ReasonObj[]>([]);
  const [images, setImages] = useState<ImageObj[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [bigImage, setBigImage] = useState<string>("");
  const [banners, setBanners] = useState<BannerObj[]>([]);
  const [relativeProjects, setRelativeProjects] = useState<DetailProject[]>([]);
  const [data, setData] = useState<DetailProject>({
    city: "",
    created_at: "",
    detail_project: {
      building_density: "",
      img: "",
      size: "",
      sub_title: "",
      title: "",
    },
    district: "",
    id: 0,
    introduction: "",
    investor: "",
    main_title: "",
    is_active: 0,
    slogan: "",
    url: ""
  })

  useEffect(() => {
    fetchData();
  }, [id]);

  function fetchData() {
    let projectId = parseInt(id)
    ProjectsAPI.getProjectBySlug(url)
      .then((res) => {
        let result = { ...res.data.data };
        let dataTemp = { ...data };

        dataTemp.id = projectId;
        dataTemp.introduction = result.introduction;
        dataTemp.investor = result.investor;
        dataTemp.slogan = result.slogan;
        dataTemp.detail_project = {
          img: result.detail_project.img,
          size: result.detail_project.size,
          title: result.detail_project.title,
          sub_title: result.detail_project.sub_title,
          building_density: result.detail_project.building_density,
        }
        dataTemp.main_title = result.main_title
        dataTemp.city = result.city
        dataTemp.district = result.district
        dataTemp.created_at = result.created_at
        dataTemp.is_active = result.is_active


        setData(dataTemp);
      })
      .catch((err) => console.log(err));

    BannersAPI.getList({ project_id: projectId })
      .then(res => {
        let result = res.data.data;
        setBanners(result);
      })
      .catch(err => console.log(err))

    ReasonsAPI.getListByProjectId(projectId)
      .then(res => {
        let result = res.data.data;
        setReasons(result);
      })
      .catch(err => console.log(err))

    ImagesAPI.getList({ project_id: projectId })
      .then(res => {
        let result = res.data.data;
        setImages(result);
        setBigImage(result[0].value)
      })
      .catch(err => console.log(err))

    let limit = 4;
    let page = 1;
    let city = data.city;
    ProjectsAPI.getListProjects(limit, page, city)
      .then(res => {
        let result = res.data.data.list_projects;
        setRelativeProjects(result);
      })
  }

  const bannerList: JSX.Element[] = [];
  banners.forEach((b, i) => {
    bannerList.push(<img key={i} src={b.value} alt="Room 01" />)
  });

  const reasonComponents: JSX.Element[] = [];
  reasons.forEach((e, i) => {
    let style: React.CSSProperties = {
      flexDirection: "row",
    }
    if (i % 2 === 0) {
      style.flexDirection = "row-reverse"
    }

    reasonComponents.push(
      <div
        className="reason-item-container"
        style={style}
        key={i}
      >
        <div className="wrap-image">
          <img alt="img1" src={e.img} className="big_img" />
        </div>
        <div className="content">
          <div>
            <img alt="img2" src={ordinalNumbers[i]} className="small_img" />
          </div>

          <div className="content_title">
            {e.title}
          </div>
          <div className="content_small_content">
            {e.sub_title}
          </div>
        </div>
      </div>
    )
  })

  const galleryComponents: JSX.Element[] = [];
  images.forEach((e, i) => {
    if (i === selectedImageIndex) {
      galleryComponents.push(
        <div key={i} className="aaaa" style={{ width: "92%", margin: "auto" }}>
          <img style={{ width: "100%" }} alt="libary-small8" src={e.value} />
          <div className="image-selected-background"></div>
          <div className="image-selected-border"></div>
        </div>
      )
    } else {
      galleryComponents.push(
        <div key={i} className="aaaa aaaa-hover" style={{ width: "92%", margin: "auto" }} onClick={() => { setBigImage(e.value); setSelectedImageIndex(i); }}>
          <img style={{ width: "100%" }} alt="libary-small8" src={e.value} />
        </div>
      )
    }
  })

  let history = useHistory();
  function onClickRelativeProject(project_id: number, url: string) {
    history.push("/gioi-thieu-du-an/" + url + '/' + project_id.toString());
    window.scrollTo(0, 0)
  }
  const relativeProjectComponents: JSX.Element[] = [];
  for (let i = 0; i < relativeProjects.length; i++) {
    if (relativeProjects[i].id.toString() !== id) {
      relativeProjectComponents.push(
        <div key={i} className="square-pj" onClick={() => { onClickRelativeProject(relativeProjects[i].id, relativeProjects[i].url) }}>
          <span>
            <img
              style={{ width: "100%" }}
              src={relativeProjects[i].detail_project.img}
              alt="oder-imag1"
            />
          </span>
          <div className="title-pj">{relativeProjects[i].main_title}</div>
          <div className="description-pj">
            {relativeProjects[i].introduction}
          </div>
        </div>
      )
    }
    if (relativeProjectComponents.length === 3) {
      break
    }
  }
  return (
    <div className="container-introduce">
      <div className="wrap-content-banner">
        <CustomSlider
          classNextArrow="fal fa-chevron-right next-arrow"
          components={bannerList}
          classPreviousArrow="fal fa-chevron-left previous-arrow"
          showNum={0}
          settings={settings}
        ></CustomSlider>
      </div>

      <div className="wrap-content-introduce">
        <div className="text-top">
          {data.introduction}
        </div>
        <div className="iconTextTop">
          <span>
            <img alt="img-icon1" src={iconTextTop} />
          </span>
          <div className="space-div-icon"></div>
        </div>
        <div className="text-title">{data.investor}</div>
        <div className="text-slogan">
          {data.slogan}
        </div>
        <div style={{ width: "100%", height: "4px" }}>
          <Seperate widthPar={350} widthChil={80} style={{ marginTop: 16 }} />
        </div>
        <div className="container-map-content">
          <div className="wrap-map">
            <img style={{ width: "100%" }} alt="image111" src={data.detail_project.img} />
          </div>
          <div className="wrap-right-content">
            <div className="top-text">{data.detail_project.title}</div>
            <div className="middle-text">
              {data.detail_project.sub_title}
            </div>
            <div className="bottom-content">
              <div className="wrap-bottom">
                <span>
                  <img alt="icon1" src={iconHome} />
                </span>
                <span style={{ fontWeight: 600 }}>Quy mô</span>
                <span
                  style={{
                    color: "rgba(190, 147, 85, 1)",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {data.detail_project.size}ha
                </span>
              </div>

              <div className="wrap-bottom">
                <span>
                  <img alt="icon2" src={vector5} />
                </span>

                <span style={{ fontWeight: 600 }}>Mật độ xây dựng</span>
                <span
                  style={{
                    color: "rgba(190, 147, 85, 1)",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Gần {data.detail_project.building_density}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* make by An */}
      <div className="reasons-container">
        <div className="wrap-reasons-container">
          <div className="title-container">
            <p className="small-title">{reasons.length} LÝ DO LỰA CHỌN</p>
            <p className="big-title">{data.main_title}</p>
            <Seperate widthPar={350} widthChil={80} />
          </div>

          {reasonComponents}
        </div>
      </div>

      <div className="wrap-content-introduce">
        <div className="container-libary">
          <div className="title-libary">{data.detail_project.title}</div>
          <div className="title-name-libary">THƯ VIỆN</div>
          <div style={{ width: "100%", height: "4px" }}>
            <Seperate widthPar={350} widthChil={80} style={{ marginTop: 16 }} />
          </div>
          <div className="content-libary">
            <div>
              <img style={{ width: "100%" }} alt="libary-big" src={bigImage} />
            </div>
            <div className="wrap-image-small">
              <CustomSlider
                classNextArrow="fal fa-chevron-right next-arrow"
                components={galleryComponents}
                classPreviousArrow="fal fa-chevron-left previous-arrow"
                showNum={0}
                settings={settings2}
              ></CustomSlider>
            </div>
          </div>
        </div>
      </div>

      <div className="container-oder-project">
        <div className="wrap-content-oder-project">
          <div className="title-libary">TÌM HIỂU</div>
          <div className="title-name-libary">CÁC DỰ ÁN KHÁC</div>
          <Seperate widthPar={350} widthChil={80} />
          <div className="content-oder-prj">
            {relativeProjectComponents}
          </div>
        </div>
      </div>
    </div>
  );
};
