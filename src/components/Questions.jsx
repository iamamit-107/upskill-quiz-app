import React from "react";

const Questions = ({
  currentQuestion,
  quizes,
  handleNext,
  handleSubmit,
  handleOptionClick,
  clickOption,
}) => {
  return (
    <>
      <h5 className="question-no">
        Question {currentQuestion.id + 1} <span>/ 10</span>
      </h5>

      <h3 className="question">{currentQuestion.question}</h3>
      {currentQuestion.questionImg && (
        <div className="question-img">
          <img src={currentQuestion.questionImg} alt="" />
        </div>
      )}

      <div className={currentQuestion.imgOptions ? "img-options" : "options"}>
        {currentQuestion.answer.map((a) =>
          currentQuestion.imgOptions ? (
            <div
              className={a.id === clickOption ? "active-img" : ""}
              onClick={() => {
                handleOptionClick(a.id);
              }}
            >
              <img src={a.ans} alt="" />
            </div>
          ) : (
            <div
              className={
                a.id === clickOption ? "option active-option" : "option"
              }
              onClick={() => {
                handleOptionClick(a.id);
              }}
            >
              <p>{a.ans}</p>
            </div>
          )
        )}
      </div>

      <div
        className={
          currentQuestion.id === quizes.length - 1
            ? "btn submit-btn"
            : "btn submit-btn disabled"
        }
        onClick={() => handleSubmit()}
      >
        submit
      </div>
      <div
        className={
          currentQuestion.id === quizes.length - 1
            ? "btn next-btn disabled"
            : "btn next-btn "
        }
        onClick={() => handleNext()}
      >
        next <i class="fas fa-arrow-right"></i>
      </div>
    </>
  );
};

export default Questions;
