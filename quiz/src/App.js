import './App.css';
import questions from './components/questions';
import { useState } from 'react';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const present_question = questions[questionIndex];
  const [score, setScore] = useState(0)
  const [results, setResults] = useState(false)
  const replay = ()=>{
    setQuestionIndex(0)
    setScore(0)
    setResults(false)
  }
  const get_choice = (index)=>{
    if(present_question.answer === index)
    {
      setScore(score+1)   
    }
    const next_qus = questionIndex+1
    if(next_qus<questions.length)
    {
      setQuestionIndex(questionIndex+1)
    }
    else{
      setResults(true)
    }
  }
  return (
    <div className="quiz_box">
      {results?(<><h1>{score}</h1><br/>
              <button onClick={replay}>Play Again</button>
              </>):(
              <div className='quiz_question'>
              {present_question.question}
              <div className='options'></div>
                <ul className='quiz_ul'>
                  {present_question.options.map((option,i)=>{
                   return <li className='quiz_li' onClick={()=>get_choice(i)}>{option}</li>
                  })}
                </ul>
              </div>
      )}

    </div>
  );
}

export default App;
