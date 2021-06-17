import { Fragment, useState } from "react";
import axios from "axios";

export default function Add() {
  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState({});
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:5000/functions",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mt-4">
          <label for="formFileLg" class="form-label">
            Code Snippet
          </label>
          <input
            class="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={onChange}
          />
        </div>

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </Fragment>
  );
}
