import React from "react";
import { useDispatch } from "react-redux";
import { blockUser, deleteUser, getAllUser } from "../../../../actions/UserAction";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";

function User(props) {
  const { user, number } = props;
  const dispatch = useDispatch();
  const handleDeleteUser = async (user) => {
    await dispatch(deleteUser(user._id));
    dispatch(getAllUser());
  };
  const handleBlockUser = async (user) => {
    await dispatch(blockUser(user._id, user.isBlock));
    dispatch(getAllUser());
  };
  return (
    <tr>
      <td>{number + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>
        {user.isBlock ? <AiOutlineLock style={{ marginRight: 10, cursor: "pointer" }} onClick={() => handleBlockUser(user)}></AiOutlineLock> : <AiOutlineUnlock style={{ marginRight: 10, cursor: "pointer" }} onClick={() => handleBlockUser(user)}></AiOutlineUnlock>}
        <AiOutlineDelete onClick={() => handleDeleteUser(user)} />
        <Link style={{ marginLeft: 10, color: "#000" }} to={`/admin/user/update/${user._id}`}>
          <AiOutlineEdit />
        </Link>
      </td>
    </tr>
  );
}

export default User;
