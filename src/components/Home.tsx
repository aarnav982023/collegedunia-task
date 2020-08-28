import React from "react";
import Card from "./Card";
const colleges = require("../assets/colleges.json")["colleges"];

const Home: React.FC = () => {
  let data: any[] = [];
  let idx = 1;
  while (idx < colleges.length) {
    data.push([colleges[idx - 1], colleges[idx]]);
    idx += 2;
  }
  if (idx % 2 === 0) {
    data.push([colleges[colleges.length - 1]]);
  }
  return (
    <div>
      {data.map((d: any, index: number) => {
        return (
          <div className="row" key={`row${index}`}>
            {d.map((college: any) => {
              return (
                <div className="col col-1-of-2" key={college.college_name}>
                  <Card college={college}></Card>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
