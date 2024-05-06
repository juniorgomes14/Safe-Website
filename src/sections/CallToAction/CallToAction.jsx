import BackGroundImage from "../../assets/background-call-to-action.jpg"
import "./CallToAction.css"

const CallToAction = () => {
  return (
    <section className="call-to-action">
        <h2 className="action-title">Proteja seu bens em segurança agora </h2>
        <div className="call-to-action-container"></div>
        <p className="action-description">Lorem ipsum dolor sit amet consectetur. Nulla adipiscing cras in felis viverra id congue odio id. </p>
        <button className="cta-button-white"><a href="https://wa.me/2389725617" className="link">Contactar Agora</a></button>
      <img src={BackGroundImage} alt='back-ground-image'/>
    </section>
  )
}

export default CallToAction;