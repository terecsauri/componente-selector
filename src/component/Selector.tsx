import { useState } from "react";

export const Selector = () => {
  const data = [
    {
      id: 1,
      nombre: "Curso de Angular",
      foto: "./angular-svgrepo-com.svg",
    },
    {
      id: 2,
      nombre: "Curso de React",
      foto: "./react.svg",
    },
    {
      id: 3,
      nombre: "Curso de NextJS",
      foto: "./nextjs-fill-svgrepo-com.svg",
    },
  ];

  const [cursito, setCursito] = useState(data[0]);

  const cambiarCurso = (numerito) => {
    const selectedCurso = data.find((curso) => curso.id === numerito);
    if (selectedCurso) {
      setCursito(selectedCurso);
    }
  };

  return (
    <div>
      <select
        name="Cursitos"
        value={cursito.id}
        onChange={(e) => cambiarCurso(Number(e.target.value))}
      >
        {data.map((curso) => (
          <option key={curso.id} value={curso.id}>
            Soy el {curso.nombre}.
          </option>
        ))}
      </select>

      <div>
        Estás en: {cursito.nombre}. La ID de este curso es: {cursito.id}.
        <img src={cursito.foto} alt={cursito.nombre} />
      </div>
    </div>
  );
};
