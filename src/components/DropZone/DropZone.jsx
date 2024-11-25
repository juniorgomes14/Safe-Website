import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";
import "./DropZone.css";
import toast from "react-hot-toast";

function getErrorMessage(code, filename) {
  console.log(code)
  if (code === "file-invalid-type")
    return `O ficheiro ${filename} foi  rejeitado, é aceito apenas imagens jpg, png e webp `;

  if (code === "file-too-large")
    return `O ficheiro ${filename} foi  rejeitado, ficheiro é maior que 5 mega bytes`;

  return `O ficheiro ${filename} foi  rejeitado.`;
}

const DropZone = ({ files, onChangeFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        onChangeFiles([...files, ...acceptedFiles]);
        // send toask
        return;
      }
    },
    [onChangeFiles, files]
  );

  const onDropRejected = useCallback((fileRejections) => {
    console.log(fileRejections);
    fileRejections.map((dropInfo) => {
      toast.error(getErrorMessage(dropInfo.errors[0].code, dropInfo.file.name));
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "image/png": [
        ".png",
        ".jpeg",
        ".jpg",
        ".webp",
        ".PNG",
        ".JPEG",
        ".JPG",
        ".WEBP",
      ],
    },
    maxFiles: 10,
    multiple: true,
    maxSize: 5242880,
    useFsAccessApi: false,
  });

  return (
    <div {...getRootProps({ className: "drop-zone" })}>
      <input name="apt-image" {...getInputProps()} />
      <p className="drop-zone-description">
        <span>
          <MdCloudUpload className="upload-icon" />
        </span>
        Arrate ou Clique para adicionar imagens
      </p>
    </div>
  );
};

export default DropZone;
