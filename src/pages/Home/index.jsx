import { Carousel, Divider, Row, Col, Typography, Space } from "antd";
import "./index.less";
import ResearchTextLoop from "./text-loop.jsx";
const { Text, Link } = Typography;

function App() {
  return (
    <div>
      <div>
        <Row>
          <Col  xl={18}  >
            <Carousel autoplay dots={{ otsClass: "xxx" }} otsClass="xxx">
              <div>
                <h3 className="contentStyle">
                  <a href="https://liuhuigmail.github.io/">
                    <img className="img" src={require("../../image/b1.jpg")} alt="" />
                  </a>
                </h3>
              </div>
              <div>
                <h3 className="contentStyle">
                  <a href="https://liuhuigmail.github.io/publishedPappers/RE2021.pdf" target="_blank">
                    <img className="img" src={require("../../image/b2.jpg")} alt="" />
                  </a>
                </h3>
              </div>
              <div>
                <h3 className="contentStyle">
                  <a href="https://ieeexplore.ieee.org/document/9720157" target="_blank">
                    <img className="img" src={require("../../image/b3.jpg")} alt="" />
                  </a>
                </h3>
              </div>
            </Carousel>
          </Col>
          <Col xl={6}  >
            <div className="right-content" style={{ paddingLeft: 10 }}>
              <h2 className="text-color-primary">Welcome to the lab</h2>
              <div>Research Direction</div>
              <div>Deep learning </div>
              <div>Software engineering </div>
              <div>Natural language </div>
              <div>processing </div>
              <div>Date mining</div>

              <h2 className="text-color-primary">Contact us</h2>
              <div>Office location:R1206,Central Building</div>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />

      <div className="links-warp">
        <Row>
          <Col span={18}>
            <h1 className="text-color-primary">Links</h1>
            <div className="link">
              <Link target="_blank" href="https://www.bit.edu.cn/">
                - Beijing Institute of Technology
              </Link>
            </div>
            <div className="link">
              <Link target="_blank" href="https://cs.bit.edu.cn/">
                - School of Science Technology
              </Link>
            </div>
            <div className="link">
              <Link target="_blank" href="https://liuhuigmail.github.io/">
                - Personal Website{" "}
              </Link>
            </div>
            <div className="link">
              <Link target="_blank" href="http://lib.bit.edu.cn/">
                - Beijing Institute of Technology Library
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ height: 250 }}>
              <ResearchTextLoop />
              <div style={{ textAlign: "right" }}>
                <Link>more</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
