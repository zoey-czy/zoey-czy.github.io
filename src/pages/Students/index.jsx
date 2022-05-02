import { Collapse, Divider } from "antd";
const { Panel } = Collapse;
import { useState, useEffect } from "react";
import "./index.less";
function domToString(node) {
  let tmpNode = document.createElement("div");
  tmpNode.appendChild(node);
  let str = tmpNode.innerHTML;
  tmpNode = node = null; // 解除引用，以便于垃圾回收
  return str;
}

function Students() {
  const [studentsHtml, setStudentsHtml] = useState("");

  const [doctoralHtml, setDoctoralHtml] = useState("");
  const [masterHtml, setMasterHtml] = useState("");
  const [formerDoctoralHtml, setFormerDoctoralHtml] = useState("");
  const [formerMasterHtml, setFormerMasterHtml] = useState("");
  useEffect(() => {
    initStudents();
  });

  const initStudents = () => {
    return fetch("https://zoey-czy.github.io/liuhui/data/students.html")
      .then((res) => res.text())
      .then((html) => {
        setStudentsHtml(html);
        var box = document.createElement("div");
        box.innerHTML = html;
        let doctoralHtml = domToString(box.querySelector(".Seg_DoctoralStudents"));
        let masterHtml = domToString(box.querySelector(".Seg_MasterStudents"));
        let formerDoctoralHtml = domToString(box.querySelector(".Seg_FormerDoctoral"));
        let formerMasterHtml = domToString(box.querySelector(".Seg_FormerMaster"));
        setDoctoralHtml(doctoralHtml);
        setMasterHtml(masterHtml);
        setFormerDoctoralHtml(formerDoctoralHtml);
        setFormerMasterHtml(formerMasterHtml);
      });
  };

  return (
    <div className="students">
      {/* 学生信息 */}
      <Collapse bordered={false} defaultActiveKey={["1", "2", "3"]}>
        <Panel header="Doctoral Students" key="1">
          <div className="Seg_DoctoralStudents" dangerouslySetInnerHTML={{ __html: doctoralHtml }} />
        </Panel>
        <Panel header="Master Students" key="2">
          <div className="Seg_MasterStudents" dangerouslySetInnerHTML={{ __html: masterHtml }} />
        </Panel>
        <Panel header="Former Students" key="3">
          <div className="former_students">
          <Collapse bordered={false} defaultActiveKey={["1", "2"]}>
            <Panel header="Doctoral" key="1">
              <div dangerouslySetInnerHTML={{ __html: formerDoctoralHtml }} />
            </Panel>
            <Panel header="Master" key="2">
              <div dangerouslySetInnerHTML={{ __html: formerMasterHtml }} />
            </Panel>
          </Collapse>
          </div>
         
        </Panel>
      </Collapse>
    </div>
  );
}
export default Students;
