import React, { useState } from 'react'
import Arrow from "../../assets/arrow.png"
import "./Question.css"

const Question = ({title, response}) => {
    const [isOpen,setIsOpen] = useState(false);
    
    function toggleOpen(){
        setIsOpen(() => !isOpen)
    }

  return (
    <div className="question-container" onClick={toggleOpen}>
        <div className="question-title">
            <p className="question">{title}</p>
            <img className={isOpen?"arrow-open":"arrow"} src={Arrow} alt="arrow"/>
        </div>
        <div className={isOpen?"question-response": "question-response-hidden"}>
            <p className="question-response-text">{response}</p>
        </div>
        
    </div>
  )
}

export default Question