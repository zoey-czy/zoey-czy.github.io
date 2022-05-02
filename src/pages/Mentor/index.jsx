import { useState, useEffect } from "react";
import { Collapse,Divider  } from "antd";
const { Panel } = Collapse;
import "./index.less"

import ajax from "ajax";
function Mentor() {
  const [personal, setPersonal] = useState({ school: [] });
  useEffect(() => {
    initPersonal();
  }, []);
  const initPersonal = () => {
    ajax.get("https://zoey-czy.github.io/liuhui/data/personal.json", {}, (res) => {
      setPersonal(res);
    });
  };
  return (
    <div className="app">
      <Collapse defaultActiveKey={["1","2","3"]} ghost>
        <Panel header="Introduce" key="1">
          {/* 个人信息 */}
          <div className="personal">
            <div className="per_info">
              <div className="info_l">
                <img className="info_img" src={personal.image} />
              </div>
              <div className="info_r">
                <div>
                  <h2>{personal.username}</h2>
                  <p>{personal.education}</p>
                  {personal.school.map((item) => (
                    <p key={item.name}>
                      <a href={item.url}>{item.name}</a>
                    </p>
                  ))}
                  <p>{personal.location}</p>
                </div>
                <div className="bottom">
                  <p>
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </p>
                  <p>{personal.officeLocation}</p>
                </div>
              </div>
            </div>
            <Divider />

            <div className="per_des">
              <p>
                I am a Professor in the <a href="http://www.cs.bit.edu.cn/">School of Computer Science and Technology</a> at the{" "}
                <a href="https://english.bit.edu.cn/">Beijing Institute of Technology</a> . I was formerly a graduate student at the{" "}
                <a href="http://www.sei.pku.edu.cn/">Software Engineering Institute</a> ,<a href="https://english.pku.edu.cn/">Peking University</a> . I defended my PhD thesis in June 2008.
              </p>
              <p>
                My research interests include deep learning based software engineering, in particular: deep learning based program generation; software refactoring; automatic program repair; software
                quality; machine learning based code complete; automatic construction of software engineering datasets. My work is funded in part by the National Natural Science Foundation of China,
                and the National Key Research and Development Program of China.
              </p>
              <p>
                I am a recipient of the RE'2021 best research paper award (2021), IET Software Premium Award (2018), New Century Excellent Talents in University (2013), and Beijing Higher Education
                Young Elite Teacher (2013). I am also a distinguished member of China Computer Federation (中国计算机学会杰出会员)
              </p>
              <p>
                <span className="weight">I am always looking for self-motivated students to work with me</span> . Contact me by eMail if you are interested in{" "}
                <span className="strong">deep learning</span> ,<span className="strong">software engineering</span> ,<span className="strong">natural language processing</span> , or{" "}
                <span className="strong">data mining</span> .
              </p>
            </div>
          </div>
          <Divider />

        </Panel>
        <Panel header="Teaching" key="2">
          {/* Teaching */}
          <div className="teaching">
            <ul>
              <li>
                <h3>Graduate Course</h3>
                <ul>
                  <li>Frontiers of Computer Science, 2014-</li>
                  <li>Software Architecture, 2008-2015</li>
                </ul>
              </li>
              <li>
                <h3>Undergraduate Courses</h3>
                <ul>
                  <li>Software Testing, 2010-</li>
                  <li>Object-Oriented Software Design, 2013</li>
                </ul>
              </li>
            </ul>
          </div>
        </Panel>
        <Panel header="Community (Since 2020)" key="3">
          {/* Community */}
          <ul  >
            <li>
              2022: <a href="https://conf.researchr.org/home/ase-2022">ASE</a> PC, <a href="https://cyprusconferences.org/icsme2022/">ICSME</a> PC, <a href="https://saner2022.uom.gr/">SANER</a> PC{" "}
              <a href="https://digital-library.theiet.org/content/journals/iet-sen">IET Software</a> AE
            </li>
            <li>
              2021: <a href="https://icsme2021.github.io/">ICSME</a> PC, <a href="https://saner2021.shidler.hawaii.edu/">SANER</a> PC, <a href="https://internetware2020.github.io/">Internetware</a>{" "}
              PC, <a href="https://ieeecompsac.computer.org/2021/">COMPSAC</a> PC, <a href="https://digital-library.theiet.org/content/journals/iet-sen">IET Software</a> AE,{" "}
              <a href="https://ieeeaccess.ieee.org/">IEEE Access</a> AE
            </li>
            <li>
              2020: <a href="https://icsme2020.github.io/">ICSME</a> PC, <a href="http://conf.saner2021.site/">SANER</a> PC, <a href="https://www.re20.org/">RE</a> Posters and Demos Track PC,{" "}
              <a href="http://compsac.org/">COMPSAC</a> PC, <a href="https://internetware2020.github.io/">Internetware</a> PC,{" "}
              <a href="https://digital-library.theiet.org/content/journals/iet-sen">IET Software</a> AE, <a href="https://www.springer.com/journal/10664">EMSE</a> Guest AE,{" "}
              <a href="https://www.journals.elsevier.com/journal-of-systems-and-software">JSS</a> Guest AE
            </li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}
export default Mentor;
