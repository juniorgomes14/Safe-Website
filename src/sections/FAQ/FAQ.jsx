import React from "react";
import "./FAQ.css";
import Question from "../../components/Question/Question";

const FAQ = () => {
  return (
    <section id="faq">
      <Question
        title={
          "Como a vossa empresa vai assegurar a Segurança da minha casa em Cabo Verde?"
        }
        response={
          "A Safe Solution adequa os seus serviços as necessidades e exigências do seu cliente, podemos instalar câmeras de segurança, alarmes, porteiro."
        }
      />
      <Question
        title={
          "Quais são os serviços oferecidos pela safe solution cv para a manutenção da casa?"
        }
        response={
          "A Safe Solution oferece uma grande diversidade de servços no âmbito da manutenção de casas, desde a renovação de pinturas internas e externas, canalização, instalação ou substituição de tanques, electricidade e inflitração, entre outros."
        }
      />
      <Question
        title={
          "Sou emigrante da frança e quero adquirir um apartamento em cabo verde."
        }
        response={
          "A Safe Solution encontre o apartamento perfeito para si, com indicações específicas da localização, dimensão, preço da sua preferência."
        }
      />
    </section>
  );
};

export default FAQ;
