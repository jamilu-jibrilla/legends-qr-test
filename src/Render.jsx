import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./component/Login";
import Details from "./component/Details";

const Render = () => {
  // urls
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  //state
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  //useeffect
  useEffect(() => {
    if (users.length < 1) {
      fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((res) => {
          window.localStorage.setItem("users", JSON.stringify(res));
          let data = JSON.parse(window.localStorage.getItem("users"));
          setUsers(data);
        })
        .catch((error) => setError(error.message));
    } else {
      let data = JSON.parse(window.localStorage.getItem("users"));
      setUsers(data);
    }
  }, []);

  // if (error) return <h1>{error}</h1>;

  return (
    // <div className="Render">
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<App users={users} />} />
      <Route path="/home/:id" element={<Details />} />
    </Routes>
    // </div>
  );
};

export default Render;
