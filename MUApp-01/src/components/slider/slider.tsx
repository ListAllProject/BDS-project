import { settings } from "cluster";
import { Component } from "react";
import Slider, { Settings } from "react-slick";
import "./slider.scss";

interface state {
  indexBox: number;
}
interface props {
  settings?: Settings;
  components?: JSX.Element[];
  className?: string;
  classNextArrow: string;
  classPreviousArrow: string;
}

export default class CustomArrows extends Component<props, state> {
  slider: Slider | undefined | null;
  element!: JSX.Element[];
  setting: Settings;

  constructor(props: props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.setting = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    this.state = {
      indexBox: 0,
    };
  }

  next() {
    this.slider?.slickGoTo(this.state.indexBox + 1);
  }

  previous() {
    this.slider?.slickGoTo(this.state.indexBox - 1);
  }
  render() {
    // const settings = {
    //   dots: this.props?.dots || false,
    //   infinite: this.props?.infinite || true,
    //   speed: this.props?.speed || 500,
    //   slidesToShow: this.props?.slidesToShow || 1,
    //   slidesToScroll: this.props?.slidesToScroll || 1,
    // };
    const {
      className,
      components,
      classNextArrow,
      classPreviousArrow,
      settings,
    } = this.props;

    return (
      <div className="container-slider">
        <i
          style={{ cursor: "pointer" }}
          className={classPreviousArrow}
          onClick={this.previous}
        ></i>
        <span className="component-list">
          <Slider
            // onReInit={() => console.log(11)}
            // onEdge={(e) => {
            //   console.log(e);
            // }}
            beforeChange={(cur, next) => {
              this.setState({
                indexBox: next,
              });
            }}
            {...{ ...this.setting, ...settings }}
            ref={(c) => (this.slider = c)}
          >
            {this.props.components?.map((e) => {
              return e;
            })}
          </Slider>
        </span>
        <i
          style={{ cursor: "pointer" }}
          className={classNextArrow}
          onClick={this.next}
        ></i>
      </div>
    );
  }
}
