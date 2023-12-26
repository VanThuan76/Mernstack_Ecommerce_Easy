import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/UserAction";

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.userSignin);
  const { userInfo, error } = user;
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h2> Đăng nhập </h2>
        <img style={{ borderRadius: "25%" }} src="/images/logo.jpg"></img>
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          <input {...register("email")} placeholder="Email" required></input>
          <input {...register("password")} placeholder="Password" type="password" required></input>

          <input type="submit" value="Login"></input>
          {error ? <h2 style={{ fontSize: 20, color: "#d70018" }}>{error}</h2> : <></>}
          <Link to="/register">Đăng ký tài khoản mới</Link>
          <a href="http://localhost:5555/auth/google">Google</a>
        </form>
      </div>
    </div>
  );
}

export default Login;

