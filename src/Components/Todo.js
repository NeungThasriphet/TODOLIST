import React, { Component } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Divider, Input, Card } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";
import "../App.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["Work out at home", "Go to super market", "Have Breakfast"],
    };
    this.addTodo.bind(this);
  }

  addTodo = (e) => {
    if (e.key === "Enter") {
      this.setState({ notes: [...this.state.notes, e.target.value] });
    }
  };

  render() {
    const { Title } = Typography;
    return (
      <>
        <div style={{ margin: "10px" }}>
          <Row>
            <Col span={6}></Col>
            <Col span={12} style={{ backgroundColor: "#fff" }}>
              <Title>
                <OrderedListOutlined /> TODO LIST
              </Title>
              <Divider
                orientation="left"
                style={{ color: "#333", fontWeight: "normal" }}
              ></Divider>
              <Row>
                <Col span={24}>
                  <Input
                    placeholder="New task name"
                    type="type"
                    onKeyUp={this.addTodo}
                  />
                </Col>
              </Row>

              <Divider
                orientation="left"
                style={{ color: "#333", fontWeight: "normal" }}
              >
                Tasks
              </Divider>
              <Row style={{ marginTop: "10px" }}>
                <Col span={21}>
                  {this.state.notes.map((note, index) => (
                    <Card
                      key={index}
                      style={{ width: "auto", marginTop: "10px" }}
                    >
                      <p>{note}</p>
                    </Card>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col span={6}></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Todo;
