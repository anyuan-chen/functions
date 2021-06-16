import { toast } from "react-toastify";

const logout = (e, setAuth) => {
  e.preventDefault();
  localStorage.removeItem("token");
  setAuth(false);
  toast.success("logged out");
};

export default logout;
