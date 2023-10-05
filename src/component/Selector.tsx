import "./Selector.css";

import { useState } from "react";

import logoAngular from "../assets/angular-svgrepo-com.svg";
import logoReact from "../assets/react.svg";
import logoNext from "../assets/nextjs-fill-svgrepo-com.svg";

export const Selector = () => {
  const [abierto, setAbierto] = useState(false);
  const [valor, setValor] = useState(null);

  const data = [
    {
      id: 1,
      nombre: "Curso de Angular",
      foto: logoAngular,
    },
    {
      id: 2,
      nombre: "Curso de React",
      foto: logoReact,
    },
    {
      id: 3,
      nombre: "Curso de NextJS",
      foto: logoNext,
    },
  ];

  const desplegar = () => {
    setAbierto(!abierto);
  };

  const seleccionar = (datita) => {
    setValor(datita.id);
    setAbierto(false);
  };

  return (
    <div>
      <div className="selector">
        <div className="seleccionada" onClick={desplegar}>
          {valor ? valor : "Seleciona una opción"}
        </div>
        {abierto && (
          <div className="desplegar-opciones">
            {data.map((datita) => (
              <div className="opcion-desplegada" key={datita.id} onClick={() => seleccionar(datita)}>
                <img src={datita.foto} />
                {datita.nombre}
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};
