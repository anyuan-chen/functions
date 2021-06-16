const logout = (e, setAuth) => {
  e.preventDefault();
  localStorage.removeItem("token");
  setAuth(false);
};

module.exports = logout;