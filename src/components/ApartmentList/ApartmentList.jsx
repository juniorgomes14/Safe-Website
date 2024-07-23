import ApartmentItem from "../ApartmentItem/ApartmentItem";
import API, { parseAPIResponse } from "../../api/Api";
import { CgSpinner } from "react-icons/cg";

import "./ApartmentList.css";
import { useQuery } from "@tanstack/react-query";

const ApartmentList = () => {
  async function GetApartment() {
    const queryLink = "/apartment";
    const APIRequest = API.get(queryLink);
    return parseAPIResponse(APIRequest);
  }

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["app"],
    queryFn: GetApartment,
  });


  if (error) {
    <div className="apartment-list">
      <div className="items-list">
        <p>Um error ocorreu</p>
      </div>
    </div>;
  }

  if (isLoading) {
    <div className="apartment-list">
      <div className="items-list">
        <CgSpinner className=" spinner-icon loading-icon" />
      </div>
    </div>;
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
            />
          ))}
      </div>
    </div>
  );
};

export default ApartmentList;
