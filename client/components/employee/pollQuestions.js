import React from 'react';
import CheckBoxes from './checkBoxes';
import { useState } from 'react';


const resultPoll = [];

export default function PollQuestion() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    'I am pleased to work with the current version of this technology.',
    'I experience few limitations with this technology.',
    'I find this technology integrates into exist codebases with relative ease.',
    'I feel there are necessary improvements to be made for the next version of this technology.',
    'I often find myself researching solutions to issues that occurred in this technology.',
    'I would recommend this technology for others to use.',
  ];
  const [boolean,setBool] = useState(false)
  const checkBox = () => {
    boolean ? setBool(false) : setBool(true)
  }
  const displayQuestion = [];
  questions.forEach((question) => {
    displayQuestion.push(
      <CheckBoxes
        allQuestions={questions}
        question={question}
        results={resultPoll}
        setQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
    );
  });
  
  return (
    <div>
      {displayQuestion[currentQuestion]
        ? displayQuestion[currentQuestion]
        : 'Poll Completed! Thank you!'}
     
    </div>
  );
}
