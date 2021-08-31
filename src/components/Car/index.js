import UpCar from "../../assets/img/CARRO.png";
import { Moviment } from "./styles";

export default function Car({ pos }) {
  return (
    <Moviment position={{ pos }}>
      <img src={UpCar} alt="Upcar" />
    </Moviment>
  );
}
