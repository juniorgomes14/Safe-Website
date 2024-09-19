import React from "react";
import "./SalesPreview.css";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import { useNavigate } from "react-router-dom";

const SalesPreview = () => {
  const navigate = useNavigate()
  function redirectToApartment(){
    navigate("/apartamentos")
  }
  
  return (
    <section id="sales">

      <ApartmentList canEdit={false} length={3}/>
      <button className="cta-sales-preview" onClick={redirectToApartment}>Ver apartamentos</button>
    </section>
  );
};

export default SalesPreview;
