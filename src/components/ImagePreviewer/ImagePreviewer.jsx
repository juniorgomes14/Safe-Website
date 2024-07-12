import "./ImagePreviewer.css";
import { MdDelete } from "react-icons/md";
import { MdOpenInNew } from "react-icons/md";

const ApartmentImage = ({ imageInfo, index, onDelete }) => {
  const preview = URL.createObjectURL(imageInfo);
  function onDeleteSelf() {
    // console.log("delete", index);
    onDelete(index);
  }

  function OnOpenSelf() {
    console.log("open", index);
  }

  return (
    <div className="apartment-image">
      <div className="apartment-image-actions">
        <button onClick={OnOpenSelf} type="button">
          <MdOpenInNew />
        </button>
        <button onClick={onDeleteSelf} type="button">
          <MdDelete />
        </button>
      </div>

      <img src={preview} alt="apartment-image" />
    </div>
  );
};

const ImagePreviewer = ({ images, onDelete }) => {
  // console.log("previwer", images);
  return (
    <div className="image-thumbnails">
      {images.map((image, index) => (
        <ApartmentImage
          imageInfo={image}
          index={index}
          key={index}
          onDelete={onDelete}
        />
      ))}

      {/* <ApartmentImage url={test} />
      <ApartmentImage url={test} />
      <ApartmentImage url={test} />
      <ApartmentImage url={test} />
      <ApartmentImage url={test} /> */}
    </div>
  );
};

export default ImagePreviewer;
