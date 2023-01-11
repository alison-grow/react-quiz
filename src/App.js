import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of California?',
			answerOptions: [
				{ answerText: 'San Francisco', isCorrect: false },
				{ answerText: 'Los Angeles', isCorrect: false },
				{ answerText: 'Sacramento', isCorrect: true },
				{ answerText: 'San Diego', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Florida?',
			answerOptions: [
				{ answerText: 'Miami', isCorrect: false },
				{ answerText: 'Tallahassee', isCorrect: true },
				{ answerText: 'Orlando', isCorrect: false },
				{ answerText: 'Jacksonville', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Nevada?',
			answerOptions: [
				{ answerText: 'Carson City', isCorrect: true },
				{ answerText: 'Las Vegas', isCorrect: false },
				{ answerText: 'Reno', isCorrect: false },
				{ answerText: 'Henderson', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of New York?',
			answerOptions: [
				{ answerText: 'Brooklyn', isCorrect: false },
				{ answerText: 'New York City', isCorrect: false },
				{ answerText: 'Buffalo', isCorrect: false },
				{ answerText: 'Albany', isCorrect: true },
			],
		},
    {
			questionText: 'What is the capital of Alaska?',
			answerOptions: [
				{ answerText: 'Anchorage', isCorrect: false },
				{ answerText: 'Juneau', isCorrect: true },
				{ answerText: 'Fairbanks', isCorrect: false },
				{ answerText: 'Kodiak', isCorrect: false },
			],
		},
    {
			questionText: 'What is the capital of Wyoming?',
			answerOptions: [
				{ answerText: 'Cheyenne', isCorrect: true },
				{ answerText: 'Jackson', isCorrect: false },
				{ answerText: 'Casper', isCorrect: false },
				{ answerText: 'Rock Springs', isCorrect: false },
			],
		},
    {
			questionText: 'What is the capital of Pennsylvania?',
			answerOptions: [
				{ answerText: 'Philadelphia', isCorrect: false },
				{ answerText: 'Pittsburgh', isCorrect: false },
				{ answerText: 'Harrisburg', isCorrect: true },
				{ answerText: 'Scranton', isCorrect: false },
			],
		},
    {
			questionText: 'What is the capital of Oregon?',
			answerOptions: [
				{ answerText: 'Eugene', isCorrect: false },
				{ answerText: 'Portland', isCorrect: false },
				{ answerText: 'Medford', isCorrect: false },
				{ answerText: 'Salem', isCorrect: true },
			],
		},
    {
			questionText: 'What is the capital of West Virginia?',
			answerOptions: [
				{ answerText: 'Huntington', isCorrect: false },
				{ answerText: 'Wheeling', isCorrect: false },
				{ answerText: 'Charleston', isCorrect: true },
				{ answerText: 'Morgantown', isCorrect: false },
			],
		},
    {
			questionText: 'What is the capital of New Mexico?',
			answerOptions: [
				{ answerText: 'Santa Fe', isCorrect: true },
				{ answerText: 'Roswell', isCorrect: false },
				{ answerText: 'Las Cruces', isCorrect: false },
				{ answerText: 'Albuquerque', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
        <>
          <div className='score-section'>
            <img src="https://dl.glitter-graphics.com/pub/1401/1401811yho44c9apr.gif" alt="stars" className="banner" />
            You scored {score} out of {questions.length}!
            <img src="https://dl.glitter-graphics.com/pub/1401/1401811yho44c9apr.gif" alt="stars" className="banner" />
          </div>
          <div className='btn-section'>
            <button className="refresh-btn" onClick={() => window.location.reload(false)}>Try Again!</button>
          </div>
        </>
			) : (
				<>
					<div className='question-section'>
            <div className='header'>
              <h1>Do you know your state capitals?</h1>
            </div>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span> of {questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="answer-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}