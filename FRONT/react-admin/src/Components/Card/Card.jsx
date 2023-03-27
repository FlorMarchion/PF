import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteRestaurant, getAllRestaurants } from "../../Redux/Actions";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const [openEdit, setOpen] = useState(false);
  const [closeEdit, setClose] = useState(true);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handlerClick = () => {
    setOpen(!openEdit);
    setClose(!closeEdit);
  };

  const handlerDelete = () => {
    console.log(props);
    dispatch(deleteRestaurant(props));
    console.log(message);
    alert(message);
  };

  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>{props.menu}</td>
        <td>{props.ranking}</td>
        <td>
          {props.address[0].streetName} - {props.address[0].streetNumber}
        </td>
        <td>{props.address[0].city}</td>
        <td>{props.address[0].country}</td>
        <td>{props.active ? "Activo" : "Inactivo"}</td>
        <td className={style.rows}>
          <NavLink to={`/modify/${props.id}`}>
            <button onClick={handlerClick}>editar</button>
          </NavLink>

          <button onClick={handlerDelete}>
            {props.active ? "Desactivar" : "Activar"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Card;
