import React, {useState} from 'react';
import uniqid from 'uniqid';
import LoadCards from './components/Cards';
import image1 from './assets/Ajantis.webp';
import image2 from './assets/Coran.webp';
import image3 from './assets/Edwin.webp';
import image4 from './assets/Eldoth.webp';
import image5 from './assets/Garrick.webp';
import image6 from './assets/Kagain.webp';
import image7 from './assets/Khalid.webp';
import image8 from './assets/Kivan.webp';
import image9 from './assets/Minsc.webp';
import image10 from './assets/Montaron.webp';
import image11 from './assets/Quayle.webp';
import image12 from './assets/Tiax.webp';

function App() { 

  const [cards, setCards] = useState([
    {src: image1,
     id: uniqid(),
     clicked: false},
    {src: image2,
    id: uniqid(),
    clicked: false },
    {src: image3,
    id: uniqid(),
    clicked: false },
    {src: image4,
    id: uniqid(),
    clicked: false },
    {src: image5,
    id: uniqid(),
    clicked: false },
    {src: image6,
    id: uniqid(),
    clicked: false },
    {src: image7,
    id: uniqid(),
    clicked: false },
    {src: image8,
    id: uniqid(),
    clicked: false },
    {src: image9,
    id: uniqid(),
    clicked: false },
    {src: image10,
    id: uniqid(),
    clicked: false },
    {src: image11,
    id: uniqid(),
    clicked: false },
    {src: image12,
    id: uniqid(),
    clicked: false },
  ]
  );

  function shuffleCards() {

    let newArray = [...cards];
    
    for (let i = newArray.length - 1; i > 0; i--) {
      
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
      
    }
    setCards(newArray);
    
  };

  return (
    <div className="App">
      <div className="header">
        <div className="title">Title</div>
        <div className="score">Score</div>
      </div>
      <div className="card-list">
        <div className='cards'>
          <LoadCards shuffleCards={shuffleCards} cardsArray={cards}></LoadCards>
        </div>
      </div>
    </div>
  );
}

export default App;
