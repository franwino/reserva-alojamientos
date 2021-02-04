import React from "react";
import moment from "moment";
import "moment/locale/es";

// Description
export default function Description(props) {
  const { state } = props;
  const from = moment(state.dateFrom).format("dddd D [de] MMMM [de] YYYY");
  const to = moment(state.dateTo).format("dddd D [de] MMMM [de] YYYY");
  const precios = ["muy económico", "económico", "moderado", "alto"];
  return (
    <p className="filtersDescription">
      {" "}
      Búsqueda
      {!(
        (Object.keys(state.dateFrom).length === 0 &&
          state.dateFrom.constructor === Object) ||
        (Object.keys(state.dateTo).length === 0 &&
          state.dateTo.constructor === Object)
      )
        ? ` desde el ${from} hasta el ${to}, `
        : " para cualquier fecha, "}
      en {state.country === "Cualquier país" ? "cualquier país" : state.country}
      ,{" "}
      {state.price === "Cualquier precio"
        ? "de cualquier precio"
        : "de precio " + precios[state.price.length - 1]}{" "}
      y{" "}
      {state.rooms === "Cualquier tamaño"
        ? "cualquier tamaño"
        : "tamaño " + state.rooms.toLowerCase()}
      .
    </p>
  );
}
