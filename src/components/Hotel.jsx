import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faBed,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// Para estas cards decidí utilizar styled components
const HotelWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

const InnerHotel = styled.div`
  width: 100%;
  padding: 0;
  margin: 3%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);

  img {
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  h3 {
    font-size: 1.3rem;
    color: #7c0000;
    text-align: center;
    margin: 3%;
    font-weight: bold;
  }
`;

const Description = styled.p`
  flex-grow: 1;
  padding: 2%;
  margin: 2% 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2% 0px;
`;

const IconText = styled.div`
  display: flex;
  flex-direction: row;
  .faicon {
    margin-left: 10px;
  }
  p {
    margin-left: 5px;
    border-radius: 2px;
  }
`;

const Btn = styled.button`
  background-color: #7c0000;
  color: #fff;
  border: 0px;
  line-height: 2rem;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  &:hover {
    cursor: pointer;
    background-color: #d60000;
  }
`;

export default function Hotel(props) {
  return (
    // HotelWrap es Necesario para que todos tengan la misma altura
    <HotelWrap>
      <InnerHotel>
        <img src={props.data.photo} alt={props.data.name} />
        <h3>{props.data.name}</h3>
        <IconText>
          <FontAwesomeIcon className="faicon" icon={faMapMarker} />
          <p>
            {props.data.city}, {props.data.country}
          </p>
        </IconText>
        <Description>{props.data.description}</Description>

        <FlexRow>
          {/* Para que habitaciones y precio queden en la misma fila */}
          <IconText>
            <FontAwesomeIcon className="faicon" icon={faBed} />
            <p>
              {props.data.rooms}{" "}
              {props.data.rooms === 1 ? "habitación" : "habitaciones"}
            </p>
          </IconText>
          <div>
            {/* Con esto se generan 4 signos $ con clases on/off según el precio */}
            {Array.from({ length: 4 }, (_, i) => i + 1).map((p, i) => (
              <FontAwesomeIcon
                icon={faDollarSign}
                key={i}
                className={props.data.price > i ? "faicon" : "faicon font_off"}
              />
            ))}
          </div>
        </FlexRow>
        <Btn>Reservar</Btn>
      </InnerHotel>
    </HotelWrap>
  );
}
