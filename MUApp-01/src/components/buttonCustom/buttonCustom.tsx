import { Button } from 'antd';
import { ButtonHTMLType } from 'antd/lib/button/button';
import { Component, CSSProperties } from 'react';

import './buttonCustom.scss';

interface Props {
    type?: ButtonHTMLType
    style?: CSSProperties;
    className?: string;
    text: string
    onClick :() =>  void
  }
  

class ButtonCustom extends Component<Props, any>{
    // constructor(props: Props){
    //     super(props)
    // }

    render() {
        const {text, style, className, type} = this.props
        return (
            <Button htmlType={type} onClick={this.props.onClick} style={{...style}} className={"btn-custom " + className}>
                {text}
            </Button>
        );
    }
}

export default ButtonCustom;
