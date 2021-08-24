import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import MelbCarousel from "./Carousel";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";

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
        <Footer style={{ textAlign: 'center' }}>Manan ©2021 Created via Ant UED</Footer>
      </Router>
    </Layout>
  );
}

export default App;