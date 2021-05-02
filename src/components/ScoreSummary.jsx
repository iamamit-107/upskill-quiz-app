import React, { useEffect, useState } from "react";
import card from "../assets/card.png";

const ScoreSummary = ({ answer, setReview, setSubmit }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalQuestion = answer.map((ans) =>
      ans.answer.filter((an) => an.id === ans.selectedAns && an.correct)
    );
    let totalScore = totalQuestion.filter((a) => a.length !== 0);
    setTotal(totalScore);
  }, [answer]);

  return (
    <div className="score-div">
      <h5 className="medal">
        <i class="fas fa-medal"></i>Score
      </h5>
      <h1 className="score">
        {((total && total.length) / answer.length) * 100}%
      </h1>
      <h2>Congratulation</h2>
      <p>
        You got {total && total.length} out of {answer.length} questions
      </p>
      <div
        className={"btn submit-btn"}
        onClick={() => {
          setReview(true);
          setSubmit(false);
        }}
      >
        review
      </div>
      <div className="share-score">
        <p>Share score</p>
        <div className="icon">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <h4>You can attend this workshop to imporve your skil</h4>
      <div class="workshop-card">
        <div class="image">
          <img src={card} alt="" />
        </div>
        <div class="card-details">
          <div class="details-1">
            <h6>User Experience (UX) Design: From Ideation to Validation</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
