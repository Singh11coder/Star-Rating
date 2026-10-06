import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa';
import './App.css';

function App() {

  const [rating,setRating] = useState(-1);
  const [hover,setHover] = useState(-1);

  const handleClick = (index) => {
      console.log("clicked",index) 
      
      setRating(hover);
      
  }

  const handleMouseUp = (index) => {
        console.log("MouseUp" ,index);
        setHover(index);
  }

  const handleMouseDown = (currentIndex) => {
      console.log("MouseDown",currentIndex);
      setRating(rating);
  }
  return (
    <div>
      <div className="one">Star Rating</div>
      <div className="two">
         {
           [...Array.from({length:10},(_,index) =>{
              return <>
                <FaStar
                  key={index}
                  className={`stars ${(index<= hover || index<= rating) ? "active" : "notactive"}`}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseUp(index)}
                  onMouseLeave={() => handleMouseDown(index)}
                />
              </>
           })]
         }
      </div>
    </div>
  )
}

export default App