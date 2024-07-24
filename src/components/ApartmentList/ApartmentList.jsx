import { useQuery } from "@tanstack/react-query";
import { CgSpinner } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";
import API from "../../api/Api";
import ApartmentItem from "../ApartmentItem/ApartmentItem";
import "./ApartmentList.css";

const ApartmentList = ({ canEdit }) => {
  async function GetApartment() {
    const queryLink = "/apartment";
    const response = await API.get(queryLink);
    const responseData = await response.data;
    return responseData;
  }

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["app"],
    queryFn: GetApartment,
  });

  if (error) {
    return (
      <div className="apartment-list">
        <div className="items-list-center">
          <p><RiErrorWarningLine /> Um error Inesperado ocorreu</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="apartment-list">
        <div className="items-list-center">
          <CgSpinner className=" spinner-icon loading-icon" />
        </div>
      </div>
    );
  }

  return (
    <div className="apartment-list">
      <div className="items-list">
        {data &&
          data.map((apartment) => (
            <ApartmentItem
              key={apartment.id}
              id={apartment.id}
              info={apartment.info}
              onUpdate={refetch}
              canEdit={canEdit}
            />
          ))}
      </div>
    </div>
  );
};

export default ApartmentList;
