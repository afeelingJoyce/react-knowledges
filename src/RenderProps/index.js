import React, { Component } from 'react';
import { Card } from 'antd'



class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function Child(props) {

  return (
    <div>
      <p>横坐标:{props.mouse.x}</p>
      <p>纵坐标:{props.mouse.y}</p>
    </div>
  )

}

class Example extends Component {
  render() {
    return (
      <>
        <h1> Example Component</h1>
        <Card>这里就是通过render props的方式 实现复用Mouse组件的功能 需求描述:Example组件需要知道鼠标位置来处理一些特定的逻辑 通过定义一个Child子组件来实现这个逻辑 其他页面也可以通过同样方式来复用Mouse组件提供的鼠标位置的功能</Card>
        <Mouse render={mouse => <Child mouse={mouse} />}></Mouse>
      </>
    )
  }
}

export default Example