import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "Deveesh Shetty",
              age: 19,
              email: "deveeshshetty@gmail.com",
            })
          )
        }
      >
        Click to reveal details
      </button>
      <li>
        <Link to="/todo">Todo </Link>
      </li>
    </div>
  );
}

export default Login;
