import React, { Component } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Divider, Input, Card, Button } from "antd";
import { OrderedListOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "../App.css";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddNeweTask = this.handleAddNeweTask.bind(this);
  }
  //
  //set value from event to state
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAddNeweTask(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      payload: { taskName: this.state.value },
    });
  }

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
                  <form onSubmit={this.handleAddNeweTask}>
                    <Row>
                      <Col span={18}>
                        <Input
                          type="text"
                          value={this.state.value}
                          onChange={this.handleChange}
                          placeholder="Your task"
                        />
                      </Col>
                      <Col offset={1} span={5}>
                        <div>
                          <Button
                            type="submit"
                            onClick={this.handleAddNeweTask}
                            style={{
                              width: "100%",
                              backgroundColor: "#1990FF",
                              color: "#fff",
                            }}
                          >
                            <PlusOutlined />
                            New Task
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
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
                  {this.props.todolist.map((task, index) => (
                    <Card
                      key={index}
                      style={{ width: "auto", marginTop: "10px" }}
                    >
                      <p>{task.taskName}</p>
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

const mapStateToProps = (state) => {
  return { todolist: state.todolist };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
