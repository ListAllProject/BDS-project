import React, { Component } from "react";
import PropTypes from "prop-types";
import "./seperate.scss";

interface Props {
  widthPar: number;
  widthChil: number;
}

export class Seperate extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="seperate">
        <div
          style={{
            width: this.props.widthPar,
            left: `calc(50% - ${this.props.widthPar / 2}px)`,
          }}
          className="space-title-div"
        ></div>
        <div
          style={{
            width: this.props.widthChil,
            left: `calc(50% - ${this.props.widthChil / 2}px)`,
          }}
          className="space-title-div-child"
        ></div>
      </div>
    );
  }
}
