import { useState } from "react";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaBed, FaShower } from "react-icons/fa";
import { GiGardeningShears } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose, IoEye, IoKey } from "react-icons/io5";
import {
  MdDelete,
  MdLocationPin,
  MdMoneyOffCsred,
  MdOutlineAttachMoney,
} from "react-icons/md";

import toast from "react-hot-toast";
import { TbMeterSquare } from "react-icons/tb";
import API, { parseAPIResponse } from "../../api/Api";
import { useAuth } from "../../context/AuthContext";

import "./ApartmentItem.css";

const ApartmentItem = ({ id, info, onUpdate, canEdit }) => {
  const { user } = useAuth();
  const [imageIndex, setImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  async function DeleteSelf() {
    const queryLink = `apartment/${id}`;
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
    const queryLink = `apartment/${id}`;
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
      `https://wa.me/2389853428?text=Ola%20estou%20interessado%20no%20${info.title}%20-%20${info.propertyType}%20em%20${info.zone}%20para%20${info.saleStatus}`,
      "_blank"
    );
  }

  function formatCurrency(number) {
    let numStr = number.toString();
    let regex = /\B(?=(\d{3})+(?!\d))/g;
    let formattedStr = numStr.replace(regex, ".");
    formattedStr += "$";
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
          <p className="apartment-price">{formatCurrency(info.price)} </p>
          <p className="more-info-item">
            <FaBed className="more-info-icon" /> Quartos {info.room}
          </p>
          <p className="more-info-item">
            <FaShower className="more-info-icon" /> Casa de banho{" "}
            {info.bathroom}
          </p>
          <p className="more-info-item">
            <TbMeterSquare className="more-info-icon" /> Metros Quadrados{" "}
            {info.squareMeters}
          </p>
          <p className="more-info-item">
            <BiSolidCarGarage className="more-info-icon" /> Caragem{" "}
            {info.garage}
          </p>
          <p className="more-info-item">
            <GiGardeningShears className="more-info-icon" /> Quintal {info.yard}
          </p>
          <p className="more-info-item">
            <MdLocationPin className="more-info-icon" />
            {info.island}, {info.city}, {info.zone}
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
            {info.title} - {info.propertyType}
          </p>
        </div>
        <div className="apartment-details">
          <p className="apartment-price">{formatCurrency(info.price)}</p>
          <div className="details">
            <p title="Quartos">
              {info.room} <FaBed />
            </p>
            <p title="Casa de banho">
              {info.bathroom} <FaShower />
            </p>
            <p>
              {info.squareMeters} <TbMeterSquare />
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

export default ApartmentItem;
