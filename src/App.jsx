import React, { useState } from "react";
import "./styles/styles.scss";
import { hotelsData } from "./data/data";
import MainHeader from "./components/MainHeader/MainHeader";
import FilterList from "./components/FilterList/FilterList";
import HotelList from "./components/HotelList";
import moment from "moment";

export default function App() {
  // Estado inicial - sin filtrar
  const initFilters = {
    dateFrom: {},
    dateTo: {},
    country: "Cualquier país",
    price: "Cualquier precio",
    rooms: "Cualquier tamaño"
  };

  // Guardo los filtros en el estado.
  // Uso uno sólo ya que es lo único que varía.
  // Lo posiciono en el comopnente padre de aquellos que lo utilizan.
  const [filters, setFilters] = useState(initFilters);

  // Maneja cambios en los filtros de fecha
  const handleDate = () => {
    return (e) => {
      let stateCopy = { ...filters };
      if (e.target.name === "dateFrom" || e.target.name === "dateTo") {
        if (
          (e.target.name === "dateTo" &&
            moment(e.target.value) < filters["dateFrom"]) ||
          (e.target.name === "dateFrom" &&
            moment(e.target.value) > filters["dateTo"])
        ) {
          alert("La fecha de salida debe ser posterior a la fecha de entrada");
          return;
        }
        stateCopy[e.target.name] = moment(e.target.value);
        setFilters(stateCopy);
      }
    };
  };

  // Maneja cambios en los filtros de select/opciones
  const handleChange = () => {
    return (e) => {
      const stateCopy = { ...filters };
      stateCopy[e.target.name] = e.target.value;
      setFilters(stateCopy);
    };
  };

  // Maneja el botón de reset y vuelve al estado inicial
  const handleReset = () => {
    return () => {
      setFilters(initFilters);
    };
  };

  return (
    <main className="App">
      <MainHeader state={filters} />
      <FilterList
        state={filters}
        handleDate={handleDate}
        handleChange={handleChange}
        handleReset={handleReset}
        data={hotelsData}
      />
      <HotelList state={filters} data={hotelsData} />
    </main>
  );
}
