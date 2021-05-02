import React from "react";

const LeftSide = ({ currentQuestion, quizes }) => {
  return (
    <>
      <div className="progress-line"></div>
      <div
        className="progress-line2"
        style={{
          width: `${((currentQuestion.id + 1) / quizes.length) * 100}%`,
        }}
      ></div>
      <div className="text-box">
        <div className="upper-text">
          <h5 className="tag">graphic design</h5>
          <h3>photoshop quiz</h3>
          <h3>quesntions and answer</h3>
          <p>A short quiz to test how well you know adobe photoshop</p>
        </div>
        <div className="down-text">
          <div className="name">
            <h5>by bappi ashraf</h5>
            <p>oct 9th, 06:30:11 pm</p>
          </div>
          <div className="icon">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
