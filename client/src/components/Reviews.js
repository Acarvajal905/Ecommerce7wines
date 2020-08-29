import React from 'react';
import "../Styles/Reviews.css";

export default function Reviews ({calificacion, descripcion, createdAt, userId}) {
  return (
    <div class="box2">
      <div>{calificacion}</div>
      <div>{descripcion}</div>
      <div>{createdAt}</div>
      <div>{userId || "juan"}</div>
    </div>
  );
};