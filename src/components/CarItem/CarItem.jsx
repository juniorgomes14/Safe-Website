import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose, IoEye, IoKey } from "react-icons/io5";
import {
  MdDelete,
  MdLocationPin,
  MdMoneyOffCsred,
  MdOutlineAttachMoney,
} from "react-icons/md";

import toast from "react-hot-toast";
import { BsFuelPumpFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { GiCargoCrane, GiCarWheel } from "react-icons/gi";
import API, { parseAPIResponse } from "../../api/Api";
import { useAuth } from "../../context/AuthContext";


const CarItem = ({ id, info, onUpdate, canEdit }) => {
  const { user } = useAuth();
  const [imageIndex, setImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  async function DeleteSelf() {
    const queryLink = `car/${id}`;
    const APIRequest = API.delete(queryLink, {
      headers: {
        authorization: user.accessToken,
      },
    });
    toast.success("Apartamento foi apagado com sucesso");
    await parseAPIResponse(APIRequest);
    onUpdate();
  }

  async function ChangeStateSelf(state) {
    const data = { saleStatus: state };
    const queryLink = `car/${id}`;
    const APIRequest = API.put(queryLink, data, {
      headers: {
        authorization: user.accessToken,
      },
    });
    await parseAPIResponse(APIRequest);
    onUpdate();
  }

  function RedirectToContact() {
    window.open(
      `https://wa.me/2389853428?text=Ola%20estou%20interessado%20no%20${info.title}%20-%20${info.brand}%20em%20${info.island}%20para%20${info.saleStatus}`,
      "_blank"
    );
  }

  function formatCurrency(number) {
    let numStr = number.toString();
    let regex = /\B(?=(\d{3})+(?!\d))/g;
    let formattedStr = numStr.replace(regex, ".");
    return formattedStr;
  }

  function slide(side) {
    if (info.images.length === 0) return;
    const lastIndex = info.images.length - 1;
    if (side === "left") {
      if (imageIndex === 0) return setImageIndex(lastIndex);
      setImageIndex((current) => current - 1);
    }

    if (side === "right") {
      if (imageIndex === lastIndex) return setImageIndex(0);
      setImageIndex((current) => current + 1);
    }
  }

  return (
    <div className="apartment-item">
      <div className="left-arrow" onClick={() => slide("left")}>
        <IoIosArrowBack />
      </div>
      <div className="right-arrow" onClick={() => slide("right")}>
        <IoIosArrowForward />
      </div>
      {showMore && (
        <div className="more-info">
          <button
            className="more-info-close"
            onClick={() => setShowMore(false)}
          >
            <IoClose />
          </button>
          <p className="apartment-price">{formatCurrency(info.price) + "$"} </p>
          <p className="more-info-item">
            <FaCar className="more-info-icon" /> Marca {info.brand}
          </p>
          <p className="more-info-item">
            <GiCargoCrane className="more-info-icon" /> Ano de Fabrico{" "}
            {info.yearOfManufacture}
          </p>
          <p className="more-info-item">
            <GiCarWheel className="more-info-icon" /> Quilometragem{" "}
            {formatCurrency(info.mileage) + " km"}
          </p>
          <p className="more-info-item">
            <BsFuelPumpFill className="more-info-icon" /> Tipo de Combustivel{" "}
            {info.fuelType}
          </p>
          <p className="more-info-item">
            <MdLocationPin className="more-info-icon" />
            {info.island}
          </p>
          <button className="more-info-cta" onClick={RedirectToContact}>
            Estou interessado
          </button>
        </div>
      )}
      <p className="sale-status">{info.saleStatus}</p>
      {canEdit && (
        <div className="apartment-item-actions">
          <button type="button" onClick={DeleteSelf} title="Eliminar">
            <MdDelete />
          </button>
          <button type="button" onClick={() => ChangeStateSelf("Vendido")}>
            <MdOutlineAttachMoney title="Vender" />
          </button>
          <button
            type="button"
            title="Colocar a Venda"
            onClick={() => ChangeStateSelf("Comprar")}
          >
            <MdMoneyOffCsred />
          </button>
          <button
            type="button"
            title="Colocar a Arrendar"
            onClick={() => ChangeStateSelf("Arrendar")}
          >
            <IoKey />
          </button>
        </div>
      )}
      <img
        className="apartment-image-viewer"
        src={info.images[imageIndex]}
        alt="apartment"
      />
      <div className="apartment-info">
        <div className="apartment-description">
          <p>
            {info.title} - {info.brand}
          </p>
        </div>
        <div className="apartment-details">
          <p className="apartment-price">{formatCurrency(info.price) + "$"}</p>
          <div className="details">
            <p title="Ano de Fabricos">
              {info.yearOfManufacture} <GiCargoCrane />
            </p>
            <p title="Quilometragem">
              {formatCurrency(info.mileage)+ " km"} <GiCarWheel />
            </p>
          </div>
        </div>
        <p
          className="show-more-title"
          onClick={() => setShowMore(true)}
          title="Clique para ver mais"
        >
          <IoEye />
          Ver Mais
        </p>
      </div>
    </div>
  );
};

export default CarItem;
