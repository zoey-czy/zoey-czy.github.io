import { useState, useEffect } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
function domToString(node) {
  let tmpNode = document.createElement("div");
  tmpNode.appendChild(node);
  let str = tmpNode.innerHTML;
  tmpNode = node = null; // 解除引用，以便于垃圾回收
  return str;
}
function Research() {
  const [communityXml, setCommunityXml] = useState("");
  const [DeepXml, setDeepHtmlHtml] = useState("");
  const [SoftwareXml, setSoftwareHtml] = useState("");
  useEffect(() => {
    initCommunity();
  });
  const initCommunity = () => {
    return fetch("https://zoey-czy.github.io/liuhui/data/community.xml")
      .then((res) => res.text())
      .then((html) => {
        setCommunityXml(html);
        var box = document.createElement("div");
        box.innerHTML = html;
        let DeepXml = domToString(box.querySelector(".Seg_Deep"));
        let SoftwareXml = domToString(box.querySelector(".Seg_Software"));
        setDeepHtmlHtml(DeepXml);
        setSoftwareHtml(SoftwareXml);
      });
  };
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header="Research" key="1">
          <h2>
            Research (<a href="https://dblp.dagstuhl.de/pid/93/4010-3.html">Full publication list available at DBLP</a>)
          </h2> 
            <Collapse bordered={false} defaultActiveKey={["1",'2']}>
              <Panel header="Deep Learning-based Software Engineering （中国计算机学会推荐A类顶级国际期刊/会议）" key="1">
                <div dangerouslySetInnerHTML={{ __html: DeepXml }} />
              </Panel>
              <Panel header="Software Evolution and Software Quality （中国计算机学会推荐A类顶级国际期刊/会议）" key="2">
                <div dangerouslySetInnerHTML={{ __html: SoftwareXml }} />
              </Panel>
            </Collapse>
        </Panel>
      </Collapse>
    </div>
  );
}
export default Research;
