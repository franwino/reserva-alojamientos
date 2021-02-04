import React from "react";
import moment from "moment";

const dateInputFormat = "YYYY[-]MM[-]DD";

// Filtros de fecha
export default function InputFecha(props) {
  const { name, date, handleDate } = props;
  let dateValue;
  if (Object.keys(date).length === 0 && date.constructor === Object) {
    dateValue = {};
  } else {
    dateValue = moment(date).format(dateInputFormat).toString();
  }
  return (
    <div className="dateWrap">
      <p>{name === "dateFrom" ? "Ingreso: " : "Salida: "}</p>
      <input
        name={name}
        type="date"
        value={dateValue}
        onChange={handleDate()}
        min={moment().format(dateInputFormat).toString()}
      />
    </div>
  );
}
