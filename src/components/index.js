import React from "react";
// 导入hot函数
import { hot } from "react-hot-loader/root";

class Index extends React.Component {
  render() {
    return (
      <>hello react</>
    )
  }
}

export default hot(Index)