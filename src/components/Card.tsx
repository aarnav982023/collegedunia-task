import React from "react";

const Card: React.FC<{ college: any }> = ({ college }) => {
  console.log(college);
  return (
    <div className="card">
      <div className="college_img">
        <div className="promoted">PROMOTED</div>
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
        <div className="original-fees-div">
          <span className="original-fees">₹{college.original_fees}</span>
          <div className="discount">•{college.discount}</div>
        </div>
        <div className="nearby-div">
          {college.nearest_place.map((nearBy: any) => {
            return <span className="nearby">{nearBy}</span>;
          })}
        </div>
        <div className="fees">
          <div className="discounted-fees">₹{college.discounted_fees}</div>
          <div className="fees_cycle">{college.fees_cycle}</div>
        </div>
        <div className="match-div">
          <span className="match">93% match :</span>
          <span className="famous-nearby">{college.famous_nearest_places}</span>
        </div>
        <div className="offer-div">{college.offertext}</div>
        <div className="cancellation">Free Cancellation • Free Wifi</div>
      </div>
    </div>
  );
};

export default Card;
