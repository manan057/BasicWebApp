import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './App.css';
import MelbCarousel from "./Carousel";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Team from "./Team";
import { HashRouter as Router, Route, Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>About Us</span>
              <Link to="/about-us" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Team</span>
              <Link to="/team" />
            </Menu.Item>
          </Menu>
        </Header>
        <MelbCarousel />
        <Content className="site-layout" style={{ padding: '0 300px', marginTop: 64 }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/team" component={Team} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Router>
    </Layout>
  );
}

export default App;