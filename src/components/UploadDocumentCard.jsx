import { useRef } from "react";
import plusCircle from "../assets/PlusCircle.svg";
import fileX from "../assets/fileX.svg";
import fileArrowDown from "../assets/FileArrowDown.svg";
import fileText from "../assets/fileText.svg";

export default function UploadDocumentCard({
  id,
  title,
  name,
  fileData,
  onUpload,
  onDelete,
  onDownload,
  onRead,
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(id, file);
    }
  };

  const handleDelete = () => {
    onDelete(id);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-[#E6F0F2] w-64 drop-shadow-lg p-4 space-y-2 rounded-2xl">
      <h3 className="text-xl text-center">{title}</h3>

      {!fileData ? (
        // Upload state
        <label className="flex flex-col gap-4 items-center cursor-pointer">
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <img src={plusCircle} alt="addIcon" className="h-8 w-8" />
          <p className="text-[#2F3E47] text-xs font-fragment">
            Drag & drop to add file
          </p>
        </label>
      ) : (
        // Uploaded file state
        <>
          <div className="text-[#2F3E47] text-sm space-y-2 font-fragment">
            <p>Uploaded by:</p>
            <p>{name}</p>
            <p>{fileData.size}</p>
          </div>

          <div className="flex justify-between mx-2 mt-2">
            {/* Download Button */}
            <button
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={() => onDownload(fileData.rawFile)}
            >
              <img src={fileArrowDown} alt="download" />
              <span className="absolute left-8 top-6 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Download
              </span>
            </button>

            {/* Read File Button */}
            <button
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={() => onRead(fileData.rawFile)}
            >
              <img src={fileText} alt="read" />
              <span className="absolute left-8 top-6 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read
              </span>
            </button>

            {/* Delete File Button */}
            <button
              className="relative group cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={handleDelete}
            >
              <img src={fileX} alt="delete" />
              <span className="absolute left-8 top-6 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Delete
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
