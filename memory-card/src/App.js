import React, {useState} from 'react';
import uniqid from 'uniqid';

function App() { 

  const [cards, setCards] = useState([
    {src: '',
     id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
    {src: '',
    id: uniqid() },
  ]
  )

  return (
    <div className="App">
      <div className="header">
        <div className="title">Title</div>
        <div className="score">Score</div>
      </div>
      <div className="card-list"></div>
    </div>
  );
}

export default App;
