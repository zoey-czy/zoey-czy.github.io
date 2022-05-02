import { TextLoop  } from "react-text-loop-next";

function ResearchTextLoop() {
  return (
    <div style={{ wordBreak: "break-all" }}>
      <TextLoop noWrap={false} interval={5000}>
        <div>
          [1].  Hui Liu*, Mingzhu Shen, Jiaqi Zhu, Nan Niu, Ge Li and Lu Zhang, "Deep Learning Based Program Generation from Requirements Text: Are We There Yet?" in IEEE Transactions on Software
          Engineering (IEEE TSE), vol. 48, no. 4, pp. 1268-1289, 1 April 2022, doi: 10.1109/TSE.2020.3018481
        </div>
        <div>
          [2].  Lin Jiang, Hui Liu*, He Jiang, Lu Zhang and Hong Mei, "Heuristic and Neural Network based Prediction of Project-Specific API Member Access," in IEEE Transactions on Software
          Engineering (IEEE TSE), vol. 48, no. 4, pp. 1249-1267, 1 April 2022, doi: 10.1109/TSE.2020.3017794
        </div>
        <div>
          [3].  Li Leping, Liu Hui*, Li Kejun, Jiang Yanjie and Sun, Rui. "Generating Concise Patches for Newly Released Programming Assignments," in IEEE Transactions on Software Engineering, Online
          2022, doi: 10.1109/TSE.2022.3153522.
        </div>
        <div>[4]. Yinchen Tian, Yuxia Zhang*, Klaas-Jan Stol, Lin Jiang, Hui Liu*. What makes a Good Commit Message. 44th International Conference on Software Engineering (ICSE 2022), to appear.</div>

        <div>
          [5]. Yuxia Zhang, Hui Liu, Xin Tan, Minghui Zhou, Zhi Jin, and Jiaxin Zhu. 2022. Turnover of Companies in OpenStack: Prevalence and Rationale. ACM Transactions on Software Engineering and
          Methodology (TOSEM), to appear
        </div>
      </TextLoop>
    </div>
  );
}

export default ResearchTextLoop;
