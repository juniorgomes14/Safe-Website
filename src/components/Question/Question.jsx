import React, { useState } from 'react'
import Arrow from "../../assets/arrow.png"
import "./Question.css"

const Question = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    function toggleOpen(){
        setIsOpen(() => !isOpen)
    }

  return (
    <div className="question">
        <div className={isOpen?"question-title-open":"question-title"}>
            <p>Essa é uma pergunta sobre alguma coisa</p>
            <img className={isOpen?"arrow-open":"arrow"} src={Arrow} alt="arrow" onClick={toggleOpen}/>
        </div>
        <div className={isOpen?"question-response": "question-response-hidden"}>
            <p>Isso é a resposta para alguma questão que ja foi feita Isso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feitaIsso é a resposta para alguma questão que ja foi feita</p>
        </div>
        
    </div>
  )
}

export default Question