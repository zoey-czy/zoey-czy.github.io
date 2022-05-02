import { Divider, Row, Col } from "antd";

function Contact() {
  return (
    <div>
      <Divider />
      <Row>
        <Col xl={14}>
          <img style={{ width: "90%" }} src={require("../../image/map.jpg")} alt="" />
        </Col>
        <Col xl={10}>
          <div style={{ margin: "0 10px" }}>
            <h2>office:location R1206 contact building</h2>
            <h2>Email:liuhui08@bit.edu.cn</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
