import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./slider.scss";

interface Props {

}

interface State {

}

export class Slider extends React.PureComponent<Props, State> {
    render() {
        return (
            <div className="container-slider">
                <div >
                    a
                </div>
                <div>
                Slider
                </div>                <div >
                    b
                </div>
            </div>

        );
    }
}
