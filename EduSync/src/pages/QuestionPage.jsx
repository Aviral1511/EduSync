import React from 'react';
import './Quiz.css'; // Import CSS file for styling

const QuestionPage = () => {
  return (
    <form  >
      <div className="heading">Post Your Question</div>
      <div className="quiz-container">
        <div className="question-section">
          <p>Ask Your Question</p>
          <input type="text" placeholder='Enter Your Question'/>
        </div>
        <div className="options-section">
          <p>Enter Your Options</p>
          <div className="option-row">
            <input type="text" placeholder='Option 1'/>
            <input type="text" placeholder='Option 2'/>
          </div>
          <div className="option-row">
            <input type="text" placeholder='Option 3'/>
            <input type="text" placeholder='Option 4'/>
          </div>
        </div>
        <button className="btn" type='button'>Submit</button>
      </div>
      
    </form>
    
  );
};

export default QuestionPage;
