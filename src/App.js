import React, { Component } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Divider, Button, Input, Card } from "antd";
import { OrderedListOutlined, PlusOutlined } from "@ant-design/icons";
import "./App.css";

class App extends Component {
  render() {
    const { Title } = Typography;
    return (
      <>
        <div>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col span={6}></Col>
            <Col span={12}>
              <Title>
                <OrderedListOutlined /> TODO LIST
              </Title>
              <Divider
                orientation="left"
                style={{ color: "#333", fontWeight: "normal" }}
              ></Divider>
              <Row>
                <Col span={19}>
                  <Input placeholder="New task name" />
                </Col>
                <Col span={1}></Col>
                <Col span={4}>
                  <Button type="primary" icon={<PlusOutlined />}>
                    Add new task
                  </Button>
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
                  <Card style={{ width: "auto", marginTop: "10px" }}>
                    <p>Task 1</p>
                  </Card>
                  <Card style={{ width: "auto", marginTop: "10px" }}>
                    <p>Task 2</p>
                  </Card>
                  <Card style={{ width: "auto", marginTop: "10px" }}>
                    <p>Task 3</p>
                  </Card>
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

export default App;
