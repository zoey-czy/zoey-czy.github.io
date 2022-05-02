import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Mentor from "./pages/Mentor";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import { Menu, Row, Col, Input, Divider } from "antd";
import "./App.less";
const { Search } = Input;

function App() {
  const menuDefaultSelectedKeys = useLocation().pathname.slice(1) || "Homepage";
  const navigate = useNavigate();
  const items = [
    { label: "Homepage", key: "Homepage" },
    { label: "Mentor", key: "Mentor" },
    { label: "Students", key: "Students" },
    { label: "Research", key: "Research" },
    { label: "Contact", key: "Contact" },
  ];
  const onSearch = () => {
    console.log("x");
  };
  return (
    <div className="app">
      <Row justify="space-between" align="bottom">
        <Col flex="120px">
          <img style={{ width: 88 }} src={require("../src/image/cslogo2.jpg")} alt="" />
        </Col>
        <Col flex="auto">
          <h2 className="text-color-primary">Institute of Software Intelligence </h2>
          <h2 className="text-color-primary">and Software Engineering</h2>
        </Col>
        <Col flex="300px">
          <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 }} />
        </Col>
      </Row>
      <Divider />
      <Menu
        onClick={(e) => {
          navigate(e.key);
        }}
        items={items}
        mode="horizontal"
        defaultSelectedKeys={[menuDefaultSelectedKeys]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homepage" element={<Home />} />
        <Route path="/Mentor" element={<Mentor />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
