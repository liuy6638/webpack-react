import React from "react";
import {
  ConfigProvider,
  Layout
} from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import PropTypes from 'prop-types';
import Header from "./header";

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children } = this.props;
    return (
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <Layout>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Content>
            {children}
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    )
  }
}

Index.propTypes = {
  children: PropTypes.element.isRequired
}

export default Index