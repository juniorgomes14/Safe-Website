import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";
import { FaSave } from "react-icons/fa";
import { z } from "zod";
import API, { parseAPIResponse } from "../../api/Api";
import DropZone from "../DropZone/DropZone";
import ImagePreviewer from "../ImagePreviewer/ImagePreviewer";
import { useAuth } from "../../context/AuthContext";
// import "./AddApartmentSale.css";
import toast from "react-hot-toast";

const CarSchema = z.object({
  title: z.string().min(1, "O campo deve ser prenchido"),
  brand: z.string().min(1, "O campo deve ser prenchido"),
  yearOfManufacture: z.coerce.number().min(0, "O campo não pode ser negativo"),
  mileage: z.coerce.number().min(0, "O campo não pode ser negativo"),
  fuelType: z.string().min(5, "O campo deve ser prenchido"),
  island: z.string().min(5, "O campo deve ser prenchido"),
  price: z.coerce.number().min(0, "O campo não pode ser negativo"),
  saleStatus: z.string().min(5, "O campo deve ser prenchido"),
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

const AddCarSales = () => {
  const { user } = useAuth();

  async function UploadImages(images, docId) {
    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`images`, image);
    });

    const APIRequest = API.post(`/car/upload/${docId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: user.accessToken,
      },
    });
    const APIResponse = await parseAPIResponse(APIRequest);
    return APIResponse;
  }

  async function PostNewCar(data) {
    const APIRequest = API.post("/car", data, {
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
    mutationFn: PostNewCar,
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
    resolver: zodResolver(CarSchema),
    defaultValues:{
      saleStatus:"Comprar",
      fuelType:"Gasolina"
    }
  });

  const [images, setImages] = useState([]);

  async function onDeleteImages(index) {
    setImages(images.filter((_, i) => i !== index));
  }

  return (
    <div className="add-apartment-container">
      <h2 className="manager-title">Gerenciador de Carros</h2>
      <form
        id="car-form"
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
          <label htmlFor="brand" className="dashboard-label">
            Marca
            <input
              type="text"
              htmlFor="brand"
              className="dashboard-input"
              {...register("brand")}
            />
            {errors.brand && (
              <span className="dashboard-error-message">
                {errors.brand.message}
              </span>
            )}
          </label>
          <label htmlFor="yearOfManufacture" className="dashboard-label">
            Ano de Fabrico
            <input
              type="number"
              min={0}
              htmlFor="yearOfManufacture"
              className="dashboard-input"
              {...register("yearOfManufacture")}
            />
            {errors.yearOfManufacture && (
              <span className="dashboard-error-message">
                {errors.yearOfManufacture.message}
              </span>
            )}
          </label>
          <label htmlFor="mileage" className="dashboard-label">
            Quilometragem
            <input
              type="number"
              min={0}
              htmlFor="mileage"
              className="dashboard-input"
              {...register("mileage")}
            />
            {errors.yard && (
              <span className="dashboard-error-message">
                {errors.yard.message}
              </span>
            )}
          </label>
          <label htmlFor="fuelType" className="dashboard-label">
            Tipo de Combustivel
            <select
              {...register("fuelType")}
              htmlFor="fuelType"
              className="dashboard-input"
              defaultValue={"Gasolina"}
            >
              <option value="Gasolina">Gasolina</option>
              <option value="Gasóleo">Gasóleo</option>
            </select>
            {errors.fuelType && (
              <span className="dashboard-error-message">
                {errors.fuelType.message}
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
              defaultValue={"Comprar"}
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
      <button type="summit" form="car-form" className="dashboard-button">
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

export default AddCarSales;
