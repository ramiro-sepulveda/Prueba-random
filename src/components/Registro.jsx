import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";
import Alerta from "./Alerta";
import SocialButton from "./SocialButton";

function Registro() {
  const [alert, setAlert] = useState("");
  const [color, setColor] = useState("");

  return (
    <div className="registro">
      <h2>Ve tu futuro</h2>

      <SocialButton
        icon="fs-3 fa-brands fa-facebook"
        url="http://www.facebook.com"
      />
      <SocialButton
        icon="fs-3 fa-brands fa-github"
        url="http://www.github.com"
      />
      <SocialButton
        icon="fs-3 fa-brands fa-linkedin-in"
        url="http://www.linkedin.com"
      />

      <p>Ingresa tu nombre por favor</p>
      <Formulario
        exito="Te has registrado con éxito"
        camposVacios="Debes completar todos los campos"
        emailIncorrecto="Debes usar un email valido"
        contraseñasIncorrectas="Las contraseñas no coinciden"
        contraseñaCorta="La contraseña debe tener al menos 8 carácteres"
        colorExito="success"
        colorError="danger"
        setAlert={setAlert}
        setColor={setColor}
      />
      <br />
      <Alerta texto={alert} color={color} />
    </div>
  );
}

export default Registro;
