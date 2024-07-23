import "./Apartments.css"
import ApartmentList from "../../components/ApartmentList/ApartmentList";

const Apartments = () => {
  return (
    <div className="apartments-container">
      <h2 className="services-title">Casas Anunciadas</h2>
      <ApartmentList canEdit={false}/>
    </div>
  )
}

export default Apartments
