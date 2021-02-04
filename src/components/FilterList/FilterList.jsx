import React from "react";
import InputFecha from "./InputFecha";
import InputSelect from "./InputSelect";
import ResetFilters from "./ResetFilters";

// Contiene los filtros
export default function FilterList(props) {
  const { state, handleDate, handleChange, handleReset, data } = props;

  const symbol = "$";
  // Traigo las opciones que se van a mostrar
  const filterOptions = {
    // Las opciones de país y precio dependen del array de data.js
    country: [...new Set(data.map((item) => item.country))].sort(),
    price: [
      ...new Set(
        data.map((item) => {
          return symbol.repeat(item.price);
        })
      )
    ].sort(),
    rooms: ["Cualquier tamaño", "Pequeño", "Mediano", "Grande"]
  };

  // Agrego la opcion genérica en cada select
  filterOptions.country.unshift("Cualquier país");
  filterOptions.price.unshift("Cualquier precio");

  // Genero un array con las opciones de filtros
  let filtros = [];
  for (const key in filterOptions) {
    filtros.push(key);
  }

  return (
    <section className="section section__filters">
      <InputFecha
        name="dateFrom"
        date={state.dateFrom}
        handleDate={handleDate}
      />
      <InputFecha name="dateTo" date={state.dateTo} handleDate={handleDate} />
      {filtros.map((filtro) => (
        <InputSelect
          name={filtro}
          key={filtro}
          state={state}
          options={filterOptions[filtro]}
          handleChange={handleChange}
        />
      ))}
      <ResetFilters handleReset={handleReset} />
    </section>
  );
}
