import { Fragment, useState } from "react";
import axios from "axios";

export default function Add() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [uploadedFile, setUploadedFile] = useState({});
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeDescription = (e) => {
      setDescription(e.target.value);
  }
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
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          className="form-control form-control-lg"
          id="title"
          type="text"
          onChange={onChangeTitle}
        />
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <textarea
          className="form-control form-control-lg"
          id="desc"
          rows="10"
          onChange={onChangeTitle}
        />
        <div className="custom-file mt-4">
          <label htmlFor="formFileLg" className="form-label">
            Code Snippet
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={onChangeFile}
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
