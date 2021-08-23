import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import { Typography, Divider } from 'antd';
import PositionCarouselDemo from "./Carousel";
const { Title, Paragraph, Text, Link } = Typography;

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <PositionCarouselDemo />
      <Content className="site-layout" style={{ padding: '0 80px', marginTop: 64 }}>
        <Typography>
          <Title>Introduction</Title>
          <Paragraph>
            After massive project practice and summaries, <Text code>Ant Design</Text>, a design language for background
            applications, is refined by Ant UED Team, which aims to
            <Text strong>
              uniform the user interface specs for internal background projects, lower the unnecessary
              cost of design differences and implementation and liberate the resources of design and
              front-end development
            </Text>.
          </Paragraph>
        </Typography>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;