import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./component/Login";
import Details from "./component/Details";

const App = () => {
  // urls
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  //state
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  //useeffect
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("users")) || false;
    if (!data) {
      fetch(url)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((res) => {
          window.localStorage.setItem("users", JSON.stringify(res));
          setUsers(res);
        })
        .catch((error) => setError(error.message));
    } else {
      setUsers(data);
    }
  }, []);

  if (error) return <h1>"Error: " + {error}</h1>;

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard users={users} />} />
      <Route path="/home/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
