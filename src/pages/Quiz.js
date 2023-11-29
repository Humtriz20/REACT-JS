import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState('');

  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Venus',
    },
    {
      question: 'What is the Capital of Nigeria?',
      options: ['Zamfara', 'London', 'Abuja', 'Lagos'],
      correctAnswer: 'Abuja',
    },
    {
      question: 'Who is the President of the US?',
      options: ['Buhari', 'Putin', 'Elon Musk', 'Biden'],
      correctAnswer: 'Biden',
    },
    {
      question: 'Who is the President of Russia?',
      options: ['Vince', 'Muhhamed', 'Putin', 'Elon Musk'],
      correctAnswer: 'Putin',
    },
  ];

  const select = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }
  };

  const back = () => {
    setCurrentQuestion(currentQuestion - 1);
    setAnswerStatus('');
  };

  const next = () => {
    setUserAnswer('');
    setAnswerStatus('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer('');
    setAnswerStatus('');
  };
const renderQuizResult = () => {
    if (score === quizData.length) {
      return (
        <div className="text-center h-72">
          <p><FontAwesomeIcon icon={faCircleCheck} className='text-theme-900 text-7xl mt-4 mb-4 ' /></p>
          <h2 className="text-2xl">Congratulations!</h2>
          <p className="text-lg mt-2">You scored {score} out of {quizData.length} questions.</p>
          <button
            className="bg-theme-300 text-theme-100 w-24 h-10 mt-5 rounded"
            onClick={restart}
          >
            Restart
          </button>
          {/* Add your content for the separate page when the user scores 5/5 */}
        </div>
      );
    } else {
      return (
        <div className="text-center h-40">
          <h2 className="text-2xl">Quiz Completed</h2>
          <p className="text-lg mt-2">Your Scored {score} out of {quizData.length} questions</p>
          <button
            className="bg-theme-300 text-theme-100 w-24 h-10 mt-5 rounded"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      );
    }
  };

  return (
   
      <>
      <div className="shadow-theme-700 w-96 shadow-lg bg-theme-200 rounded-lg mx-auto mt-10">
        {currentQuestion > 0 && currentQuestion < quizData.length && (
          <button
            onClick={back}
            className="w-16 text-2xl"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {currentQuestion < quizData.length ? (
          <div className="">
            <h2 className="ml-6 text-xl h-12 p-2">{quizData[currentQuestion].question}</h2>
            <ul className="optionslist">
              {quizData[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <li
                    className={`${
                      userAnswer !== '' &&
                      (answerStatus === 'correct' && option === quizData[currentQuestion].correctAnswer
                        ? 'bg-theme-900'
                        : answerStatus === 'wrong' && option === userAnswer
                        ? 'bg-theme-600'
                        : 'bg-theme-100')
                    } rounded-full p-2 ml-6 mt-2 text-xl text-center bg-theme-100 w-80 cursor-pointer shadow-md shadow-theme-700`}
                    onClick={() => select(option)}
                  >
                    {option}
                  </li>
                  {index !== quizData[currentQuestion].options.length - 1 && <br />}
                </div>
              ))}
            </ul>
            <button
              onClick={next}
              className="bg-theme-300 text-theme-100 text-xl w-80 ml-6 h-10 mt-6 mb-4 rounded-full"
            >
              Next
            </button>
          </div>
        ) : (
          renderQuizResult()
        )}
      </div>
    </>
  
  );
};

export default Quiz;
