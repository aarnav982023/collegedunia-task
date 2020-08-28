import { useEffect, useState } from "react";
const collegesData = require("../assets/colleges.json")["colleges"];

const useColleges = (pageNumber: any) => {
  const [colleges, setColleges] = useState([] as any);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    const start = pageNumber * 10;
    const end = start + 10;
    setHasMore(end < collegesData.length);
    const new_colleges = collegesData.slice(
      start,
      Math.min(end, collegesData.length)
    );
    let data: any[] = [];
    let idx = 1;
    while (idx < new_colleges.length) {
      data.push([new_colleges[idx - 1], new_colleges[idx]]);
      idx += 2;
    }
    if (idx % 2 === 0) {
      data.push([new_colleges[new_colleges.length - 1]]);
    }
    setColleges((colleges: any) => [...colleges, ...data]);
  }, [pageNumber]);

  return { colleges, hasMore };
};

export default useColleges;
