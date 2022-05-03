import { useState, useImperativeHandle, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./data";
function searchAll(str, val) {
  var arr = str.split(val);
  arr = arr.slice(1, arr.length);
  return arr.map((data) => {
    if (data) {
      return (val + data).slice(0, 200) + "...";
    } else {
      return val;
    }
  });
}
function SearchList(props) {
  let [list, setList] = useState([]);
  let [searchVal, setSearchVal] = useState([]);

  useEffect(() => {
    if (props.SearchVal) {
      setSearchVal(props.SearchVal);
      updateList();
    }
  });

  function updateList() {
    let filterData = [];
    data.forEach((val) => {
      var a = searchAll(val.data, searchVal);
      if (a.length > 0) {
        var obj = {
          ...val,
          content: a.slice(0, 20),
        };
        filterData.push(obj);
      }
    });
    setList(filterData);
  }

  return (
    <div>
      搜索关键词：<span>{searchVal}</span>
      {list.map((val) => {
        return (
          <div key={val.url}>
            <h2 className="text-color-primary">{val.title}</h2>
            {val.content.map((data, idx) => {
              return (
                <div key={idx}>
                  <Link to={val.url}>{data}</Link>
                </div>
              );
            })}
          </div>
        );
      })}
      {list.length<=0?(<div className="noData">No data, please change the keyword search</div>):null
      }
    </div>
  );
}

export default SearchList;
