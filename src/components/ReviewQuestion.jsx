import React from "react";

const ReviewQuestion = (answeredQuestion) => {
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Review Answer</h1>
      {answeredQuestion.answeredQuestion.map((q) => (
        <div style={{ marginBottom: "30px" }}>
          <h5 className="question-no">
            Question {q.id + 1} <span>/ 10</span>
          </h5>
          <h3 className="question">{q.question}</h3>
          {q.questionImg && (
            <div className="question-img">
              <img src={q.questionImg} alt="" />
            </div>
          )}

          <div className={q.imgOptions ? "img-options" : "options"}>
            {q.answer.map((a) =>
              q.imgOptions ? (
                <div
                  className={
                    a.correct
                      ? "active-img"
                      : a.id === q.selectedAns
                      ? "red-img"
                      : ""
                  }
                >
                  <img src={a.ans} alt="" />
                  {a.correct ? (
                    <i class="fas fa-check-circle"></i>
                  ) : a.id === q.selectedAns ? (
                    <i class="fas fa-times-circle"></i>
                  ) : (
                    <i></i>
                  )}
                </div>
              ) : (
                <div
                  className={
                    a.correct
                      ? "option active-option"
                      : a.id === q.selectedAns
                      ? "option red-option"
                      : "option"
                  }
                >
                  <p>{a.ans}</p>
                  {a.correct ? (
                    <i class="fas fa-check-circle"></i>
                  ) : a.id === q.selectedAns ? (
                    <i class="fas fa-times-circle"></i>
                  ) : (
                    <i></i>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewQuestion;
