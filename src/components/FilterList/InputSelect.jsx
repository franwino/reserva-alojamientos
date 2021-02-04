import React from "react";

// Filtros select con opciones desde props
export default function InputSelect(props) {
  const { name, state, options, handleChange } = props;

  return (
    <select value={state[name]} name={name} onChange={handleChange()}>
      {/* Devuelve tantas opciones como items haya en options */}
      {options.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
}
