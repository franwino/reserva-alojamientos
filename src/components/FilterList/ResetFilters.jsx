import React from "react";

// Boton para reiniciar filtros
export default function ResetFilters(props) {
  const { handleReset } = props;

  return (
    <button className="btn" name="reset" onClick={handleReset()}>
      Reiniciar
    </button>
  );
}
