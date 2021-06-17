import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { toast } from "react-toastify";

export default function Add({ isAuth, setAuth }) {
  const [user_id, setUser_id] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const getId = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/id", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setUser_id(parseRes.user_id);
      console.log(parseRes.user_id);
      console.log(user_id);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getId();
  }, []);
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
    console.log(description);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user_id", user_id);
    console.log(user_id);
    try {
      await axios.post("http://localhost:5000/functions/add", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      toast.success("function added");
    } catch (err) {
      console.error(err);
      if (file === undefined) {
        toast.error("u rlly didnt add a file huh");
      } else {
        toast.error("kekw another server error");
      }
    }
  };
  return (
    <Fragment>
      <Navbar isAuth={isAuth} setAuth={setAuth}></Navbar>
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
          onChange={onChangeDescription}
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
