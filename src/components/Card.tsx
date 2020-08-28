import React from "react";

const Card: React.FC<{ college: any }> = ({ college }) => {
  console.log(college);
  return (
    <div className="card">
      <div className="college_img">
        <div className="rating">
          <div className="rating-text">{college.rating}/5</div>
          <div className="rating-remarks">{college.rating_remarks}</div>
        </div>
        <div className="ranking">#{college.ranking}</div>
        <div className="tags">
          {college.tags.map((tag: any) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
      </div>
      <div className="container">
        <div className="first-row">
          <div className="college-name">{college.college_name}</div>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((i) => {
              if (i <= college.rating) {
                return <span className="star-fill">★</span>;
              } else {
                return <span className="star-light">★</span>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
