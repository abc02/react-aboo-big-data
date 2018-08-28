import React, { Component } from 'react';
import aboo from './assets/aboo.png'
import './App.css';
import 'antd/dist/antd.css';  
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme="dark"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>控制中心</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="environment" />
              <span>轨迹管理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span>运动数据</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="pie-chart" />
              <span>用户分析</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <img src={aboo} alt="aboo" className="aboo-logo" />
            <span>阿布跑跑大数据中心</span>
          </Header>
          <Content>
            <div>
              Bill is a cat.
            </div>
          </Content>
          <Footer>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
