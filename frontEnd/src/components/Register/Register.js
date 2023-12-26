import React, { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../actions/UserAction";

function Register() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (password === confirmPassword) {
      dispatch(SignupUser(data));
    } else {
      alert("wrong repeat password");
    }
  };
  return (
    <div className="register-container">
      <div className="signup-page">
        <h2>Đăng ký</h2>
        <img style={{borderRadius: "25%"}} src="/images/logo.jpg"></img>

        <form onSubmit={handleSubmit(onSubmit)} classname="form-signup">
          <input {...register("name")} placeholder="Tên" required></input>
          <input {...register("email")} placeholder="Email" type="email" required></input>
          {/* <input
            {...register("password")}
            placeholder="Mật khẩu"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            {...register("repeat password")}
            placeholder="Xác nhận mật khẩu"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input> */}

          <input type="submit" value="Đăng ký"></input>
        </form>
      </div>
    </div>
  );
}

export default Register;
