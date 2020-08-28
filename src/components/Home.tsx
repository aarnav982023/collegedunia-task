import React, { useState, useRef, useCallback } from "react";
import Card from "./Card";
import useColleges from "../hooks/useColleges";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { colleges, hasMore } = useColleges(pageNumber);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastRow = useCallback(
    (row) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (row) {
        observer.current.observe(row);
      }
    },
    [hasMore]
  );
  return (
    <div>
      {colleges.map((d: any, index: number) => {
        if (index + 1 === colleges.length) {
          return (
            <div className="row" key={`row${index}`}>
              {d.map((college: any) => {
                return (
                  <div
                    className="col col-1-of-2"
                    key={college.college_name}
                    ref={lastRow}
                  >
                    <Card college={college}></Card>
                  </div>
                );
              })}
            </div>
          );
        } else {
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
        }
      })}
    </div>
  );
};

export default Home;
