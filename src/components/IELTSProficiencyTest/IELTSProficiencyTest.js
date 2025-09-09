import React, { useState } from 'react';
import '../IELTSProficiencyTest/IELTSProficiencyTest.css';
import { Link } from 'react-router-dom';

function IELTSProficiencyTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testStarted, setTestStarted] = useState(false);

  const questions = [
    {
      part: 'Listening',
      question: 'Choose the synonym for "significant":',
      options: ['Minor', 'Trivial', 'Important', 'Negligible'],
      correctAnswer: 'Important',
    },
    {
      part: 'Reading',
      question: 'Read the sentence and choose the best word to fill in the blank: "The company decided to ______ its operations."',
      options: ['contract', 'expand', 'limit', 'reduce'],
      correctAnswer: 'expand',
    },
    {
      part: 'Writing',
      question: 'Write a short answer to the following question: What is one benefit of learning a new language?',
      answerType: 'shortText',
    },
    {
      part: 'Speaking',
      question: 'Please tell me about your hobbies.',
      answerType: 'verbal',
    },
    {
      part: 'Listening',
      question: 'Choose the antonym for "optimistic":',
      options: ['Hopeful', 'Positive', 'Pessimistic', 'Cheerful'],
      correctAnswer: 'Pessimistic',
    },
  ];

  const handleAnswerChange = (event, questionIndex) => {
    const newAnswers = { ...answers, [questionIndex]: event.target.value };
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
  };
  
  const handleSubmitTest = () => {
    alert('End of the test! (Scoring functionality will be added later)');
    console.log('Answers:', answers);
    setTestStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
  };

  if (!testStarted) {
    return (
      <div className="proficiency-test-container">
        <h1 className="test-title">Free IELTS Proficiency Test</h1>
        <p className="test-description">
          Answer the following questions to assess your IELTS level.
        </p>
        <button className="start-test-button" onClick={handleStartTest}>
          Start Test Now
        </button>
        <Link to="/courses" className="cancel-test-button">
          Cancel
        </Link>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="proficiency-test-container">
      <h2 className="part-title">{currentQ.part}</h2>
      <p className="question-text">{currentQ.question}</p>

      {currentQ.options && (
        <div className="options">
          {currentQ.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                onChange={(event) => handleAnswerChange(event, currentQuestion)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}

      {currentQ.answerType === 'shortText' && (
        <div className="writing-prompt">
          <textarea
            rows="2"
            cols="50"
            placeholder="Enter your answer"
            onChange={(event) => handleAnswerChange(event, currentQuestion)}
          ></textarea>
        </div>
      )}

      {currentQ.part === 'Speaking' && (
        <div className="speaking-section">
          <div className="speaking-icon">🗣️</div>
          <p className="speaking-instruction-title">Speaking Part</p>
          <p className="speaking-instruction-text">{currentQ.question}</p>
          <div className="voice-prompt">
            <p className="voice-prompt-text">(Voice Prompt: Describe a memorable journey you have taken.)</p>
          </div>
          <p className="speaking-instruction-hint">Please think about your answer and be ready to speak.</p>
        </div>
      )}

      {currentQuestion < questions.length - 1 ? (
        <button className="next-button" onClick={handleNextQuestion}>
          Next Question
        </button>
      ) : (
        <button className="submit-button" onClick={handleSubmitTest}>
          Submit Test
        </button>
      )}
    </div>
  );
}

export default IELTSProficiencyTest;