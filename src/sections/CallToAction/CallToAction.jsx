import BackGroundImage from "../../assets/background-call-to-action.webp"
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <section className="call-to-action">
        <h2 className="action-title">Faça a escolha certa para proteger os seus bens</h2>
        <div className="call-to-action-container"></div>
        <p className="action-description">Não perca mais tempo! Peça o seu orçamento sem compromisso agora mesmo e conte com profissionais qualificados.</p>
        <button className="cta-button-white"><a href="https://wa.me/2389725617" className="link" target="blank">Contactar Agora</a></button>
      <img src={BackGroundImage} alt='back-ground-image'/>
    </section>
  )
}

export default CallToAction;