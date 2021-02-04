import React from "react";
import Hotel from "./Hotel";
import moment from "moment";

// Contiene el listado de todos los hoteles
export default function HotelList(props) {
  const { state, data } = props;

  // Filtro de fechas
  // Devuelve true si las fechas están vacías o se encuentran entre availabilityFrom y availabilityTo
  function filterDates(hotel) {
    return (
      (Object.keys(state.dateFrom).length === 0 &&
        state.dateFrom.constructor === Object) ||
      (Object.keys(state.dateTo).length === 0 &&
        state.dateTo.constructor === Object) ||
      (moment(state.dateFrom) >= moment(hotel.availabilityFrom) &&
        moment(state.dateTo) <= moment(hotel.availabilityTo))
    );
  }

  // Filtra según el país elegido
  function filterCountry(hotel) {
    return (
      state.country === "Cualquier país" || hotel.country === state.country
    );
  }

  // Filtra según el precio elegido
  function filterPrice(hotel) {
    return (
      state.price === "Cualquier precio" ||
      "$".repeat(hotel.price) === state.price
    );
  }

  // Filtra según el tamaño de hotel elegido
  function filterRooms(hotel) {
    const s = 10;
    const m = 20;
    return (
      state.rooms === "Cualquier tamaño" ||
      (state.rooms === "Pequeño" && hotel.rooms <= s) ||
      (state.rooms === "Mediano" && hotel.rooms > s && hotel.rooms <= m) ||
      (state.rooms === "Grande" && hotel.rooms > m)
    );
  }

  // Computa todos los filtros seleccionados
  function validate(hotel) {
    return (
      filterDates(hotel) &&
      filterCountry(hotel) &&
      filterPrice(hotel) &&
      filterRooms(hotel)
    );
  }

  const hoteles = data.filter(validate);

  return (
    <section className="section section__hotels">
      {hoteles.length > 0 ? (
        hoteles.map((hotel) => <Hotel key={hotel.name} data={hotel} />)
      ) : (
        <p className="noHotels">
          No se encontraron hoteles con los filtros seleccionados.
        </p>
      )}
    </section>
    //
  );
}
