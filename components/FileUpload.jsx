import * as React from "react";
import { useDropzone } from "react-dropzone";
import { LuUpload } from "react-icons/lu";

export function FileUpload({
  onUpload,
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB
}) {
  const [files, setFiles] = React.useState([]);

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setFiles(acceptedFiles);
      onUpload?.(acceptedFiles);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
  });

  return (
    <div
      {...getRootProps()}
      className={`upload-container ${isDragActive ? "drag-active" : ""}`}
    >
      <input {...getInputProps()} />
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        <span className="upload-text">Upload Proof</span>
        <LuUpload className="upload-icon" size={24} />
      </div>
    </div>
  );
}
