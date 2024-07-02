import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import API, { parseAPIResponse } from "../../api/Api";
import "./LinksManager.css";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { CgSpinnerAlt } from "react-icons/cg";
import { CgSpinner } from "react-icons/cg";

const LinksManager = () => {
  async function GetCurrentLinks() {
    const APIRequest = API.get("/links");
    const APIResponse = await parseAPIResponse(APIRequest);
    return APIResponse;
  }

  async function UpdateCurrentLinks(data) {
    //  add header de autorização
    const APIRequest = API.post("/links", data);
    const APIResponse = await parseAPIResponse(APIRequest);
    return APIResponse.data;
  }

  async function onUpdate(data) {
    console.log(data);
    mutate(data);
  }

  function setDefaultValues(values) {
    Object.keys(values).forEach((key) => {
      setValue(key, values[key]);
    });
  }

  const { mutate, isPending } = useMutation({
    mutationFn: UpdateCurrentLinks,
    onSuccess: async () => {
      console.log("guardado");
      const links = await GetCurrentLinks();
      if (links) {
        setDefaultValues(links);
      }
    },
    onError: async () => {
      console.log("error ao guardar");
    },
  });

  const { register, handleSubmit, setValue } = useForm();

  //get database links
  useEffect(() => {
    async function getAsync() {
      const links = await GetCurrentLinks();
      if (links) setDefaultValues(links);
    }
    getAsync();
  });

  return (
    <div className="link-manager-container">
      <h2 className="manager-title">Gerenciador de Links</h2>
      <form
        id="links-form"
        onSubmit={handleSubmit(onUpdate)}
        className="links-inputs-container"
      >
        <label htmlFor="WhatsApp" className="dashboard-label">
          WhatsApp
          <input
            type="text"
            className="dashboard-input"
            {...register("whatsapp")}
          />
        </label>
        <label htmlFor="Likedin" className="dashboard-label">
          Likedin
          <input
            type="text"
            className="dashboard-input"
            {...register("likedin")}
          />
        </label>
        <label htmlFor="" className="dashboard-label">
          Facebook
          <input
            type="text"
            className="dashboard-input"
            {...register("facebook")}
          />
        </label>
        <label htmlFor="" className="dashboard-label">
          Instagram
          <input
            type="text"
            className="dashboard-input"
            {...register("instagram")}
          />
        </label>
      </form>
      <button type="summit" form="links-form" className="dashboard-button">
        Guardar{" "}
        {isPending ? (
          <CgSpinner className="dashboard-button-icon spinner-icon" />
        ) : (
          <FaSave className="dashboard-button-icon" />
        )}
      </button>
    </div>
  );
};

export default LinksManager;
