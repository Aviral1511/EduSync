import React from 'react';
import './Quiz.css';

const WordPage = () => {
  return (
    <form action="">
        <div className="heading">Post Your Word</div>
      <div className="quiz-container">
        <div className="question-section">
          <p>Type Your Word</p>
          <input type="text" placeholder='Enter Your Question'/>
        </div>
        <div className="options-section">
          <p>Enter Your Hints</p>
          <div className="option-row">
            <input type="text" placeholder='Hint 1'/>
            <input type="text" placeholder='Hint2 2'/>
          </div>
          <div className="option-row">
            <input type="text" placeholder='Hint 3'/>
            <input type="text" placeholder='Hint 4'/>
          </div>
          <div className="option-row">
            <input type="text" placeholder='Hint 3'/>
            <input type="text" placeholder='Hint 4'/>
          </div>
        </div>
        <button className="btn" type='button'>Submit</button>
      </div>
      
    </form>
  )
}

export default WordPage