/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

const respuestas = [
  ", veo un futuro lleno de fortuna y felicidad.",
  ", esta semana debes tener cuidado! veo peligro en tu futuro.",
  ", tu numero de la suerte este mes es el 21, no lo olvides!.",
  ", te llegarán emocionantes noticias cuando menos lo esperes.",
  ", es un buen momento para preocuparte de tu salud.",
  ", el trabajo no lo es todo, veo un merecido descanso en tu futuro.",
];

const getRandomRespuestas = () => {
  return respuestas[Math.floor(Math.random() * respuestas.length)];
};

function Formulario({
  setAlert,
  setColor,
  exito,
  camposVacios,
  emailIncorrecto,
  contraseñasIncorrectas,
  contraseñaCorta,
  colorError,
  colorExito,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [respuestas, setRespuestas] = useState(getRandomRespuestas());

  function handleSubmit(e) {
    e.preventDefault();
    const randomRespuestas = getRandomRespuestas();
    setRespuestas(randomRespuestas);

    let alert = [];
    let color = "";

    if (name == "" || email == "") {
      alert.push(<li>{camposVacios}</li>);
      color = `${colorError}`;
    } else {
      if (name == "Elizabeth" || name == "elizabeth") {
        alert.push(
          name +
            " " +
            email +
            ", te veo en un asiento con una persona muy pequeña... un bebé quizás?."
        );
        color = `${colorExito}`;
      } else if (name == "Carlos" || name == "carlos") {
        alert.push(
          name +
            " " +
            email +
            ", alguien te revelará un gran secreto, debes estar atento!."
        );
        color = `${colorExito}`;
      } else if (name == "Jonathan" || name == "jonathan") {
        alert.push(
          name +
            " " +
            email +
            ", veo a alguien llamadote aunque no es por tu nombre... ¿Qué está diciendo?... frio? pio? rio? Tio?."
        );
        color = `${colorExito}`;
      } else if (name == "Manuel" || name == "manuel") {
        alert.push(
          name +
            " " +
            email +
            ", es un buen momento para conectar con tu familia, quizás debas visitar a tu nieto/a."
        );
        color = `${colorExito}`;
      } else {
        alert.push(name + " " + email + respuestas);
        color = `${colorExito}`;
      }
    }

    console.log(alert);
    setAlert(alert);
    setColor(color);
  }

  return (
    <>
      <Form
        className="d-flex flex-column gap-3"
        style={{ width: "100%" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Apellido"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </Form>
    </>
  );
}

export default Formulario;
