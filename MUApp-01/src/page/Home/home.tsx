import React from 'react';
import { Layout } from 'antd';
import { HeaderWrap } from '../../layout/header/header';
import { FooterWrap } from '../../layout/footer/footer';
const { Header, Footer, Sider, Content } = Layout;

export const Home = () => {
    return (
        <>
            <HeaderWrap />
            <FooterWrap />
            {/* <Content>Content</Content>
                <Footer>Footer</Footer> */}

        </>
    );
}


