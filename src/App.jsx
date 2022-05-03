import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Mentor from "./pages/Mentor";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import SearchList from "./pages/SearchList";
import Memo from "./pages/Memo";
import { Menu, Row, Col, Input, Divider } from "antd";

import "./App.less";
const { Search } = Input;
let ChildRef = React.createRef();
function App() {
  let menuDefaultSelectedKeys = useLocation().pathname.slice(1) || "Homepage";
  const navigate = useNavigate();
  const items = [
    { label: "Homepage", key: "Homepage" },
    { label: "Mentor", key: "Mentor" },
    { label: "Students", key: "Students" },
    { label: "Research", key: "Research" },
    { label: "Contact", key: "Contact" },
    { label: "Memo", key: "Memo" },
    
  ];
  var [SearchVal, setSearchVal] = useState("");
  const onSearch = (v) => {
    navigate("/Search");
    setSearchVal(v);
  };
  return (
    <div className="app">
      <Row justify="space-between" align="middle">
        <Col flex="100px">
          <img style={{ width: 88 }} src={require("../src/image/cslogo2.jpg")} alt="" />
        </Col>
        <Col flex="calc(100% - 400px)" className="title">
          <div className="text-color-primary">Institute of Software Intelligence </div>
          <div className="text-color-primary">and Software Engineering</div>
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
        <Route path="/Memo" element={<Memo />} />
        <Route path="/Search" element={<SearchList SearchVal={SearchVal} onRef={ChildRef} />} />
      </Routes>
    </div>
  );
}
export default App;
