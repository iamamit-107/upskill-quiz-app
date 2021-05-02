import React, { useState } from "react";
import bg from "../assets/bg.jpg";

import Questions from "./Questions";
import ReviewQuestion from "./ReviewQuestion";
import ScoreSummary from "./ScoreSummary";

import quizes from "../data";
import LeftSide from "./LeftSide";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(quizes[0]);
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  const [selectOption, setSelectOption] = useState(null);
  const [clickOption, setClickOption] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [review, setReview] = useState(false);

  const handleSubmit = () => {
    setAnsweredQuestion([
      ...answeredQuestion,
      { ...currentQuestion, selectedAns: selectOption },
    ]);
    setSubmit(true);
  };

  const handleNext = () => {
    if (quizes.length > currentQuestion.id + 1) {
      setAnsweredQuestion([
        ...answeredQuestion,
        { ...currentQuestion, selectedAns: selectOption },
      ]);
      setCurrentQuestion(quizes[currentQuestion.id + 1]);
      setClickOption(null);
    } else {
      setAnsweredQuestion([
        ...answeredQuestion,
        { ...currentQuestion, selectedAns: selectOption },
      ]);
    }
  };

  const handleOptionClick = (id) => {
    setClickOption(id);
    setSelectOption(id);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="left-div" style={{ backgroundImage: `url(${bg})` }}>
          <LeftSide quizes={quizes} currentQuestion={currentQuestion} />
        </div>
        <div className="right-div">
          {!submit && !review && (
            <Questions
              currentQuestion={currentQuestion}
              quizes={quizes}
              clickOption={clickOption}
              handleNext={handleNext}
              handleSubmit={handleSubmit}
              handleOptionClick={handleOptionClick}
            />
          )}

          {/* Review Question and answer */}
          {review && <ReviewQuestion answeredQuestion={answeredQuestion} />}

          {/* Score summary */}
          {submit && (
            <ScoreSummary
              answer={answeredQuestion}
              setReview={setReview}
              setSubmit={setSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
