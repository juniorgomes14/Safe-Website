import CarList from "../../components/CarList/CarList";
import "./Cars.css";


const Cars = () => {
  return (
    <div className="cars-container">
      <h2 className="services-title">Carros Anunciadas</h2>
      <CarList canEdit={false}/>
    </div>
  )
}

export default Cars
