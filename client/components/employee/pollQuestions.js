import React from 'react';
import CheckBoxes from './checkBoxes';
import { useState } from 'react';
import NextButton from './nextButton';

export default function PollQuestion() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultPoll, setResults] = useState({});
  const questions = [
    'I am pleased to work with the current version of this technology.',
    'I experience few limitations with this technology.',
    'I find this technology integrates into exist codebases with relative ease.',
    'I feel there are necessary improvements to be made for the next version of this technology.',
    'I often find myself researching solutions to issues that occurred in this technology.',
    'I would recommend this technology for others to use.',
  ];

  const displayQuestion = [];
  const resultPoll = {};
  questions.forEach((question) => {
    setResults((resultPoll[question] = 0));
    displayQuestion.push(
      <CheckBoxes
        question={question}
        results={resultPoll}
        setPoll={setResults}
      />
    );
  });
  console.log(resultPoll);
  return (
    <div>
      {displayQuestion[currentQuestion]
        ? displayQuestion[currentQuestion]
        : 'Poll Completed! Thank you!'}
      {
        <NextButton
          setQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          onClick={() => console.log(resultPoll)}
        />
      }
    </div>
  );
}
