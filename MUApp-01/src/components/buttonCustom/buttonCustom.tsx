import { Component, CSSProperties } from "react";

import "./buttonCustom.scss";

interface Props {
  style?: CSSProperties;
  className?: string;
  text: string;
  onClick: () => void;
}

class ButtonCustom extends Component<Props, any> {
  // constructor(props: Props){
  //     super(props)
  // }

  render() {
    const { text, style, className } = this.props;
    return (
      <span
        onClick={this.props.onClick}
        style={{ ...style }}
        className={"btn-custom " + className}
      >
        {text}
      </span>
    );
  }
}

export default ButtonCustom;
