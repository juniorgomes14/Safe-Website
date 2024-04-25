import React, { useState } from 'react'
import Arrow from "../../assets/arrow.png"
import "./Question.css"

const Question = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    function toggleOpen(){
        setIsOpen(() => !isOpen)
    }

  return (
    <div className="question-container" onClick={toggleOpen}>
        <div className="question-title">
            <p className="question">Essa é uma pergunta sobre alguma coisa</p>
            <img className={isOpen?"arrow-open":"arrow"} src={Arrow} alt="arrow"/>
        </div>
        <div className={isOpen?"question-response": "question-response-hidden"}>
            <p className="question-response-text">Isso é a resposta para alguma questão que ja foi feita Isso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feita</p>
        </div>
        
    </div>
  )
}

export default Question