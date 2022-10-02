import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  //user data stored in a state
  const [user, setUser] = useState(null);

  // fetching user data
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    //routes using react router dom
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={user && <Home user={user}/>}
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
