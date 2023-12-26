import React from "react";
import User from "./User";

function ListUser({ users }) {
  return (
    <div className="admin-user-list">
      <table>
        <tbody>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th style={{ width: 100 }}>Hành động</th>
          </tr>
          {users.map((item, index) => (
            <User user={item} number={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
