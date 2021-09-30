import { Dropdown, Spin, Table } from "antd";
import { Component, useEffect, useRef, useState } from "react";
import {
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHistory } from "react-router-dom";
import bgrTable from "../../assets/images/bgr-table-price.png";
import iconHome from "../../assets/images/icon-home.png";
import { Seperate } from "../../components/seperate/seperate";
import CustomSlider from "../../components/slider/slider";
import ProjectsBeelandAPI from "../../services/APIBEELAND/GetProject";
import ProductBeelandAPI from "../../services/APIBEELAND/Product";
import * as helper from "../../services/helper";
import { getHexColor } from "../../services/helper";
import { Block, DetailFloor, DetailMaTT, projectObj } from "../../services/models";
import "./tablePrice.scss";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  // autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: (
    <div>
      <i className="far fa-chevron-left"></i>
    </div>
  ),
  prevArrow: (
    <span style={{ color: "white" }}>
      <i className="far fa-chevron-right"></i>
    </span>
  ),
};

const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

interface Point {
  X: number,
  Y: number,
}

export const TablePrice = () => {
  const [numberSlider1, setNumberSlider1] = useState(4);
  const [numberSlider2, setNumberSlider2] = useState(5);
  const [selectedProjectId, setSelectedProjectId] = useState(-1);
  const [listProjects, setListProjects] = useState<projectObj[]>([]);
  const [listBlocks, setListBlocks] = useState<Block[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<Block>();
  const [pageLoading, setPageLoading] = useState(false);
  const [blockLoading, setBlockLoading] = useState(false);
  const history = useHistory();

  // Product detail model
  const [productDetailPosition, setProductDetailPosition] = useState<Point>({ X: 0, Y: 0 });
  const [productDetailDisplayStyle, setProductDetailDisplayStyle] = useState('none');
  const [productDetail, setProductDetail] = useState<DetailFloor>();
  const productDetailRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setNumberSlider1(3);
        setNumberSlider2(4);
      } else if (window.innerWidth < 670) {
        setNumberSlider1(2);
        setNumberSlider2(3);
      } else if (window.innerWidth < 480) {
        setNumberSlider1(1);
        setNumberSlider2(2);
      } else {
        setNumberSlider1(4);
        setNumberSlider2(5);
      }
    }

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setPageLoading(true);
    ProjectsBeelandAPI.getProjectFilter().then((res) => {
      setPageLoading(false);
      if (res.data.data && res.data.data.length !== 0) {
        setListProjects(res.data.data);
        handleChooseProject(res.data.data[0].MaDA);
      }
    }).catch(err => {
      console.log(err);
      setPageLoading(false);
    });
  }, [])

  const handleChooseProject = (id: number) => {
    if (id === selectedProjectId) {
      return
    }

    setSelectedProjectId(id)
    setBlockLoading(true)
    ProductBeelandAPI.getBlock(id).then((res) => {
      setBlockLoading(false);
      if (res.data.data && res.data.data.length !== 0) {
        setListBlocks(res.data.data.filter((e: Block) => e.maKhu > -1));
        setSelectedBlock(res.data.data[1]);
      }
    }).catch(err => {
      console.log(err);
      setBlockLoading(false);
    });;
  }

  const handleChooseBlock = (blockIndex: number) => {
    setSelectedBlock(listBlocks[blockIndex])
  }

  const getSliderSettings = (array: any[], maxShow: number, setting: any) => {
    if (array.length < maxShow) {
      setting.slidesToShow = array.length;
    }
    return setting;
  }

  const getProductDetailPosition = (point: Point): Point => {
    let x: number = point.X, y: number = point.Y;
    let windowWitdh = window.innerWidth;
    let windowHeight = window.innerHeight;
    let productDetailWidthStyle: string = productDetailRef?.current?.style?.width || "100px"
    let productDetailWidth: number = parseInt(productDetailWidthStyle.replaceAll("px", ""))
    // console.log("productDetailWidth", productDetailWidth)
    return { X: x, Y: y };
  }

  // Generate list project
  const projectListComponent: JSX.Element[] = listProjects.map(e => {
    if (e.MaDA === selectedProjectId) {
      return (
        <div className="box-selected" key={`${e.MaDA}`} onClick={() => { handleChooseProject(e.MaDA) }}>
          <img style={{ width: '155px' }} alt="img" src={e.icon} />
        </div>
      )
    } else {
      return (
        <div className="box" key={`${e.MaDA}`} onClick={() => { handleChooseProject(e.MaDA) }}>
          <img style={{ width: '155px' }} alt="img" src={e.icon} />
        </div>
      )
    }
  })
  // Generate 
  const blockListComponent: JSX.Element[] = [];
  for (let i = 0; i < listBlocks.length; i++) {
    const maKhu = listBlocks[i].maKhu;
    const soldProduct = listBlocks[i].detailKhu[0].DaBan;
    const totalProduct = listBlocks[i].detailKhu[0].Tong;
    const ratio = totalProduct !== 0 ? soldProduct / totalProduct * 100 : 0;

    if (maKhu === selectedBlock?.maKhu) {
      blockListComponent.push(
        <div key={maKhu} className="cirle-ratio-selected" onClick={() => handleChooseBlock(i)}>
          <CircularProgressbarWithChildren strokeWidth={2} value={ratio}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: -55,
                color: "#BB8E4C",
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              <span style={{ marginBottom: 2, textAlign: "center" }}>{listBlocks[i].tenKhu}</span>
              <img alt="img" src={iconHome} />
              <span style={{ marginTop: 2, textAlign: "center" }}>
                {soldProduct}<span style={{ color: "#E0E0E0" }}>/{totalProduct}</span>
              </span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      )
    } else {
      blockListComponent.push(<div key={maKhu} className="cirle-ratio" onClick={() => handleChooseBlock(i)}>
        <CircularProgressbarWithChildren strokeWidth={2} value={ratio}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -55,
              color: "#BB8E4C",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            <span style={{ marginBottom: 4, textAlign: "center" }}>{listBlocks[i].tenKhu}</span>
            <img alt="img" src={iconHome} />
            <span style={{ marginTop: 4, textAlign: "center" }}>
              {soldProduct}<span style={{ color: "#E0E0E0" }}>/{totalProduct}</span>
            </span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      );
    }
  }

  // Generate columns
  const columns = [];
  if (selectedBlock && selectedBlock.location) {
    for (let i = 0; i < selectedBlock.location.length; i++) {
      const element = selectedBlock.location[i];
      if (element.detailVT[0]
        && element.detailVT[0].TenViTri
        && element.detailVT[0].PhongNgu
        && element.detailVT[0].TenPhuongHuong
        && element.detailVT[0].DTThongThuy) {
        columns.push(
          {
            title: `${element.detailVT[0].TenViTri} ${element.detailVT[0].PhongNgu.replace(" ", "")} ${element.detailVT[0].TenPhuongHuong.replace(" ", "-")} ${element.detailVT[0].DTThongThuy}`,
            width: 100,
            dataIndex: `col${element.maVT}`,
            key: `col${element.maVT}`,
            render: (text: any, obj: any) => {
              if (text) {
                return {
                  props: {
                    style: {
                      background: Number(obj.index) % 2 === 0 ? "#FFF8EA" : "",
                      textAlign: "center",
                    },
                  },
                  children: <div>{text}</div>,
                };
              }
              return {
                props: {
                  style: {
                    background: Number(obj.index) % 2 === 0 ? "#FFF8EA" : "",
                    textAlign: "center",
                    userSelect: "none",
                  },
                },
                children: <i
                  style={{ color: "#C4C4C4", fontSize: 22 }}
                  className="fal fa-lock-alt"
                ></i>,
              }
            },
          }
        )
      }
    }
  }
  columns.unshift({
    title: "",
    width: 100,
    dataIndex: "title",
    fixed: "left",
    key: "  ",
    render: (text: string, obj: any) => {
      return {
        props: {
          style: {
            background: Number(obj.index) % 2 === 0 ? "#FFF8EA" : "",
            textAlign: "center",
            color: "#011769",
            fontWeight: "bold",
            lineHeight: "21px",
          },
        },
        children: <div>{text}</div>,
      };
    },
  })

  // Generate data cell
  const tableData = [];
  if (selectedBlock) {
    for (let i = 0; i < selectedBlock.floor.length; i++) {
      const rowData: any = {
        title: `${selectedBlock.floor[i].tenTang} còn 1 căn`,
        key: `${selectedBlock.floor[i].tenTang}`,
        index: i,
      };
      for (let j = 0; j < selectedBlock.floor[i].detailFloor.length; j++) {
        rowData[`col${selectedBlock.floor[i].detailFloor[j].MaVT}`] = (
          <Dropdown overlay={<ProductDetailModel product={selectedBlock.floor[i].detailFloor[j]} onClick={() => history.push(`chi-tiet-du-an/${selectedBlock.floor[i].detailFloor[j].MaSP}`)} />} trigger={['contextMenu', 'hover']}>
            <div
              onClick={() => history.push(`chi-tiet-du-an/${selectedBlock.floor[i].detailFloor[j].MaSP}`)}
              style={{ color: `${getHexColor(selectedBlock.floor[i].detailFloor[j].MauNen)}`, display: "flex", flexDirection: "column", cursor: "pointer" }}
            >
              <span>{selectedBlock.floor[i].detailFloor[j].TongGiaGomPBTView}</span>
              <div>
                <img style={{ height: '28px', textAlign: 'center' }} src={selectedBlock.floor[i].detailFloor[j].icon} alt="" />
              </div>
              {/* <span>
              <i className="fas fa-heart"></i> 1
            </span> */}
            </div>
          </Dropdown>
        )
      }
      tableData.push(rowData);
    }
  }

  if (pageLoading) {
    return (
      <div className="container-table-price" style={{ display: 'flex', justifyContent: 'center' }}>
        <Spin style={{ marginRight: '20px' }} /> Đang tải dữ liệu
      </div>
    )
  }


  return (
    <div className="container-table-price">
      <div
        style={{
          position: 'fixed',
          display: productDetailDisplayStyle,
          top: productDetailPosition.Y,
          left: productDetailPosition.X,
          height: 'fit-content',
          backgroundColor: 'white',
          zIndex: 1,
          border: '2px solid white',
          boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.4)'
        }}
        ref={productDetailRef}>
        <div style={{ display: 'flex', width: '200px', height: '100px' }}>
          <div style={{ width: '50%' }}>
            <div>Căn hộ</div>
            <div>{productDetail?.KyHieu}</div>
          </div>
          <div style={{ width: '50%' }}></div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgrTable})`,
          backgroundRepeat: "repeat-x",
          backgroundPositionY: "bottom",
        }}
      >
        <div className="title-page">
          <h2>BẢNG GIÁ</h2>
          <Seperate widthChil={80} widthPar={350} />
        </div>
        <div className="slide-container-1">
          <div className="wrap-slider">
            <div style={{ padding: "0px 20px" }}>
              <CustomSlider
                classPreviousArrow={"fal fa-chevron-left previous-arrow"}
                classNextArrow={"fal fa-chevron-right next-arrow"}
                components={projectListComponent}
                settings={getSliderSettings(listProjects, numberSlider1, settings)}
                showNum={numberSlider1}
              />
            </div>
          </div>
        </div>
        {!blockLoading && listBlocks.length > 0 ? <>
          <div className="slide-container-2">
            <div className="space-table-price"></div>
            <div className="content">
              <CustomSlider
                classPreviousArrow={"fal fa-chevron-left previous-arrow"}
                classNextArrow={"fal fa-chevron-right next-arrow"}
                components={blockListComponent}
                settings={getSliderSettings(listBlocks, 5, settings2)}
                showNum={numberSlider2}
              />
            </div>
            <div className="circle-note">
              <NoteInfor detailMaTT={selectedBlock ? selectedBlock.detailMaTT : []} />
            </div>


          </div>
        </> : ''}

        {blockLoading ? <div className="container-table-price" style={{ display: 'flex', justifyContent: 'center' }}>
          <Spin style={{ marginRight: '20px' }} /> Đang tải dữ liệu
        </div> : ''}
      </div>


      {!blockLoading && selectedBlock && columns.length > 1 && tableData.length > 0 ? <>
        <div className="wrap-table">
          <Table
            pagination={false}
            columns={columns as any}
            dataSource={tableData}
            scroll={{ x: 1300 }}
          />
        </div>
      </> : ''}

      {!blockLoading && (listBlocks.length === 0 || columns.length === 1 || tableData.length === 0) ?
        <div className="container-table-price" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <i style={{ fontSize: '30px', color: '#be9355' }} className="fas fa-database"></i>
          <div>Không có dữ liệu</div>
        </div> : ''}

    </div>
  );
};

interface state {
  show: boolean;
}

interface props {
  detailMaTT: DetailMaTT[]
}

class NoteInfor extends Component<props, state> {
  refss: HTMLElement | null = null;

  constructor(props: props) {
    super(props);
    const { detailMaTT } = this.props;
    this.state = {
      show: false
    };
  }

  onClick = () => {
    if (this.refss) {
      if (this.state.show) {
        this.refss.style.opacity = "0";
        this.refss.style.transition = "400ms";
        this.refss.style.display = "none";
      } else {
        this.refss.style.opacity = "1";
        this.refss.style.transition = "400ms";
        this.refss.style.display = "flex";
      }
    }

    this.setState({ show: !this.state.show });
  };

  render() {

    const ttComponent: any[] = [];
    const slComponent: any[] = [];
    this.props.detailMaTT.forEach(element => {
      ttComponent.push(
        <span className="st-item" key={element.STT}>
          <img style={{ height: '16px', marginRight: '5px' }} src={element.Icon} alt="" />
          <span>{element.TenTT}</span>
        </span>
      );

      slComponent.push(
        <span key={element.STT} className="st-item" style={{ alignSelf: 'center' }}>{element.SoLuong}</span>
      )
    });

    return (
      <div style={{ position: "relative" }}>
        <div className="wrap-btn-note">
          <div className="circle-child" onClick={this.onClick}>
            {!this.state.show ? (
              "Chú thích"
            ) : (
              <span style={{ fontSize: 25 }}>X</span>
            )}
          </div>
        </div>
        <div ref={(ref) => (this.refss = ref)} className="square-content">
          <div className="ct-status">
            <span className="st-title">Tình Trạng</span>
            {ttComponent}
          </div>
          <div className="space-div"></div>
          <div className="ct-amount">
            <span className="st-title">Số Lượng</span>
            {slComponent}
          </div>
        </div>
      </div>
    );
  }
}

interface ProductDetailModelProps {
  product: DetailFloor,
  onClick: () => void;
}
class ProductDetailModel extends Component<ProductDetailModelProps, state> {
  constructor(props: ProductDetailModelProps) {
    super(props);
  }

  render() {
    return (
      <div className="model-product-detail">
        <div className="model-product-detail-header" style={{ backgroundColor: helper.getHexColor(this.props.product.MauNen) }}>
          <div className="model-product-detail-header-sign">
            <div>
              <img width="32px" height="32px" style={{ marginRight: '10px' }} src={this.props.product.icon} alt="" />
            </div>
            <div>
              <div>Mã sản phẩm</div>
              <div className="model-product-detail-header-sign-value">{this.props.product.KyHieu}</div>
            </div>
          </div>
          <div className="model-product-detail-header-seperate"></div>
          <div className="model-product-detail-header-price">
            <div>Giá niêm yết</div>
            <div className="model-product-detail-header-price-value">{this.props.product.TongGiaGomPBTView}</div>
          </div>
        </div>
        <div className="model-product-detail-body">
          <div className="product-detail-row">
            <div className="icon-container">
              <i className="fas fa-bed-alt"></i>
            </div>
            {this.props.product.PhongNgu}
          </div>
          <div className="model-product-detail-body-seperate" />
          <div className="product-detail-row">
            <div className="icon-container">
              <i className="fal fa-clone"></i>
            </div>
            {this.props.product.DTThongThuy}m2
          </div>
          <div className="model-product-detail-body-seperate" />
          <div className="product-detail-row">
            <div className="icon-container">
              <i className="fas fa-bath"></i>
            </div>
            {this.props.product.SoPhongVS}
          </div>
          <div className="model-product-detail-body-seperate" />
          <div className="product-detail-row">
            <div className="icon-container">
              <i className="far fa-compass"></i>
            </div>
            {this.props.product.TenPhuongHuong}
          </div>
          <div className="model-product-detail-body-seperate" />
          <div className="product-detail-row">
            <div className="icon-container">
              <i className="fas fa-male"></i>
            </div>
            {this.props.product.SoLuongQT}
          </div>
        </div>
        <div className="model-product-detail-footer">
          {this.props.product.MuaNgay === 0 ?
            <div className="model-product-detail-footer-content">
              <div style={{ marginRight: '10px' }}>Thời hạn đặt mua:</div>
              <div style={{ fontWeight: 700 }}>{helper.customTime(this.props.product.ThoiHanMua)}</div>
            </div>
            :
            <div style={{ width: '100%', height: '100%', padding: '5px' }}>
              <div style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#be9355',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
                onClick={this.props.onClick}>
                Mua ngay
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}