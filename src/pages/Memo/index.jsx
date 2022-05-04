import React, { useState, useRef } from "react";
import "./index.less";
import { Form, Input, Button, Row, Col } from "antd";

function Memo() {
  var listCache = (localStorage.getItem("list") && JSON.parse(localStorage.getItem("list"))) || [];
  let [list, setList] = useState(listCache);
  const formRef = useRef(null);
  const onDelete = (index) => {
    list.splice(index, 1); //删除数据
    setList([...list]); //更新页面
    updateCache(); //更新缓存
  };
  const onFinish = (values) => {
    list.push({
      content: values.content || "",
    });
    formRef.current.setFieldsValue({
      content: "",
    });
    updateCache();
    setList([...list]);
  };

  const updateCache = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div>
        {list.map((val, index) => {
          return (
            <div key={index} className="content">
              <Row>
                <Col span={8}>
                  {index + 1}. {val.content}
                </Col>
                <Col span={8} offset={8}>
                  <Button
                    size="small"
                    danger
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    delete
                  </Button>
                </Col>
              </Row>
            </div>
          );
        })}
        {list.length <= 0 ? <div className="noData">No data available, please click the button below to add</div> : null}
      </div>
      <Form
        ref={formRef}
        name="basic"
        labelCol={{
          span: 0,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="content"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your content!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Memo;
