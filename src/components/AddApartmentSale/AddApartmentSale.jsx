import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { FaSave } from "react-icons/fa";
import { z } from "zod";
import API, { parseAPIResponse } from "../../api/Api";
import { useAuth } from "../../context/AuthContext";
import DropZone from "../DropZone/DropZone";
import ImagePreviewer from "../ImagePreviewer/ImagePreviewer";
import "./AddApartmentSale.css";

const ApartmentSchema = z.object({
  title: z.string().min(5, "O campo deve ser prenchido"),
  propertyType: z.string().min(1, "O campo deve ser prenchido"),
  saleStatus: z.string().min(1, "O campo deve ser prenchido"),
  room: z.coerce.number().min(0, "O campo não pode ser negativo"),
  bathroom: z.coerce.number().min(0, "O campo não pode ser negativo"),
  yard: z.coerce.number().min(0, "O campo não pode ser negativo"),
  garage: z.coerce.number().min(0, "O campo não pode ser negativo"),
  squareMeters: z.coerce.number().min(1, "O campo deve ser maior que 1"),
  zone: z.string().min(5, "O campo deve ser prenchido"),
  city: z.string().min(5, "O campo deve ser prenchido"),
  island: z.string().min(5, "O campo deve ser prenchido"),
  price: z.coerce.number().min(0, "O campo não pode ser negativo"),
});

async function CompressImages(images) {
  const compressList = [];
  const options = {
    maxSizeMB: 3,
    useWebWorker: true,
    preserveExif: true,
  };
  for (let index = 0; index < images.length; index++) {
    const file = images[index];
    const compressFile = await imageCompression(file, options);
    compressList.push(compressFile);
  }
  return compressList;
}

const AddApartmentSale = () => {
  const { user } = useAuth();

  async function UploadImages(images, docId) {
    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });

    const APIRequest = API.post(`/apartment/upload/${docId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: user.accessToken,
      },
    });
    const APIResponse = await parseAPIResponse(APIRequest);
    return APIResponse;
  }

  async function PostNewApp(data) {
    const APIRequest = API.post("/apartment", data, {
      headers: {
        authorization: user.accessToken,
      },
    });
    const APIResponse = await parseAPIResponse(APIRequest);
    return APIResponse.id;
  }

  async function onAddApp(data) {
    mutate(data);
  }

  const { mutate, isPending } = useMutation({
    mutationFn: PostNewApp,
    onSuccess: async (docId) => {
      toast.success("Informações adicionadas com sucesso");
      const toastId = toast.loading("Otimizando e Carregando imagens …");
      const optimizedImages = await CompressImages(images);
      await UploadImages(optimizedImages, docId);
      toast.dismiss(toastId);
      reset();
      setImages([]);
      toast.success("Imagens foram carregadas com sucesso");
    },
    onError: async (error) => {
      console.log(error);
      toast.error(`Ocorreu um erro inesperado ao adicionar`);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ApartmentSchema),
    defaultValues:{
      propertyType:"Apartamento",
      saleStatus:"Comprar"
    }
  });

  const [images, setImages] = useState([]);

  async function onDeleteImages(index) {
    setImages(images.filter((_, i) => i !== index));
  }

  return (
    <div className="add-apartment-container">
      <h2 className="manager-title">Gerenciador de Apartamentos</h2>
      <form
        id="apartment-form"
        className="add-form-container"
        onSubmit={handleSubmit(onAddApp)}
      >
        <div className="images-container">
          <DropZone files={images} onChangeFiles={setImages} />
          {images.length > 0 && (
            <ImagePreviewer onDelete={onDeleteImages} images={images} />
          )}
        </div>
        <div className="description-container">
          <label htmlFor="title" className="dashboard-label">
            Titulo
            <input
              type="text"
              htmlFor="title"
              className="dashboard-input"
              {...register("title")}
            />
            {errors.title && (
              <span className="dashboard-error-message">
                {errors.title.message}
              </span>
            )}
          </label>
          <label htmlFor="type" className="dashboard-label">
            Tipo de Propriedade
            <select
              {...register("propertyType")}
              htmlFor="propertyType"
              className="dashboard-input"
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Duplex">Duplex</option>
              <option value="Tríplex">Tríplex</option>
              <option value="Vivenda">Vivenda</option>
              <option value="Kitnet">Kitnet</option>
            </select>
            {errors.type && (
              <span className="dashboard-error-message">
                {errors.propertyType.message}
              </span>
            )}
          </label>
          <label htmlFor="room" className="dashboard-label">
            Quartos
            <input
              type="number"
              htmlFor="room"
              defaultValue={0}
              className="dashboard-input"
              {...register("room")}
            />
            {errors.room && (
              <span className="dashboard-error-message">
                {errors.room.message}
              </span>
            )}
          </label>
          <label htmlFor="bathroom" className="dashboard-label">
            Casa de banho
            <input
              type="number"
              min={0}
              defaultValue={0}
              htmlFor="bathroom"
              className="dashboard-input"
              {...register("bathroom")}
            />
            {errors.bathroom && (
              <span className="dashboard-error-message">
                {errors.bathroom.message}
              </span>
            )}
          </label>
          <label htmlFor="yard" className="dashboard-label">
            Quintal
            <input
              type="number"
              min={0}
              defaultValue={0}
              htmlFor="yard"
              className="dashboard-input"
              {...register("yard")}
            />
            {errors.yard && (
              <span className="dashboard-error-message">
                {errors.yard.message}
              </span>
            )}
          </label>
          <label htmlFor="garage" className="dashboard-label">
            Garagem
            <input
              type="number"
              htmlFor="garage"
              min={0}
              defaultValue={0}
              className="dashboard-input"
              {...register("garage")}
            />
            {errors.garage && (
              <span className="dashboard-error-message">
                {errors.garage.message}
              </span>
            )}
          </label>
          <label htmlFor="squareMeters" className="dashboard-label">
            Metros Quadrados
            <input
              type="number"
              htmlFor="squareMeters"
              className="dashboard-input"
              {...register("squareMeters")}
            />
            {errors.squareMeters && (
              <span className="dashboard-error-message">
                {errors.squareMeters.message}
              </span>
            )}
          </label>
          <label htmlFor="zone" className="dashboard-label">
            Zona
            <input
              type="text"
              htmlFor="zone"
              className="dashboard-input"
              {...register("zone")}
              
            />
            {errors.zone && (
              <span className="dashboard-error-message">
                {errors.zone.message}
              </span>
            )}
          </label>
          <label htmlFor="city" className="dashboard-label">
            Cidade
            <input
              type="text"
              className="dashboard-input"
              htmlFor="city"
              {...register("city")}
            />
            {errors.city && (
              <span className="dashboard-error-message">
                {errors.city.message}
              </span>
            )}
          </label>
          <label htmlFor="island" className="dashboard-label">
            Ilha
            <input
              type="text"
              className="dashboard-input"
              htmlFor="island"
              {...register("island")}
            />
            {errors.island && (
              <span className="dashboard-error-message">
                {errors.island.message}
              </span>
            )}
          </label>
          <label htmlFor="price" className="dashboard-label">
            Preço
            <input
              type="number"
              htmlFor="price"
              min={0}
              defaultValue={0}
              className="dashboard-input"
              {...register("price")}
            />
            {errors.price && (
              <span className="dashboard-error-message">
                {errors.price.message}
              </span>
            )}
          </label>
          <label htmlFor="saleStatus" className="dashboard-label">
            Status da Venda
            <select
              {...register("saleStatus")}
              htmlFor="saleStatus"
              className="dashboard-input"
            >
              <option value="Comprar">Comprar</option>
              <option value="Vendido">Vendido</option>
              <option value="Arrendar">Arrendar</option>
            </select>
            {errors.saleStatus && (
              <span className="dashboard-error-message">
                {errors.saleStatus.message}
              </span>
            )}
          </label>
        </div>
      </form>
      <button type="summit" form="apartment-form" className="dashboard-button">
        Adicionar{" "}
        {isPending ? (
          <CgSpinner className="dashboard-button-icon spinner-icon" />
        ) : (
          <FaSave className="dashboard-button-icon" />
        )}
      </button>
    </div>
  );
};

export default AddApartmentSale;
