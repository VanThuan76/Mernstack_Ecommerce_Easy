import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../actions/UserAction";
import ListUser from "./ListUser";
import "./adminuser.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function AdminUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div className="admin-user">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>Quản lý người dùng</span>
        <Link className="add-user" to="/admin/register">Tạo tài khoản</Link>
      </div>
      {users ? (
        <ListUser users={users} />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default AdminUser;
