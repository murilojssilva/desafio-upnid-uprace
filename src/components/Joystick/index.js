import { Container } from "./styles";

export default function Manual() {
  return (
    <Container>
      <h1>Joystick</h1>
      <ul>
        <li>
          <span>A</span>: Esquerda
        </li>
        <li>
          <span>S</span>: Meio
        </li>
        <li>
          <span>D</span>: Direita
        </li>
        <li>
          <span>T</span>: Turbo
        </li>
        <li>
          <span className="pause-button">Esc</span>: Pause
        </li>
      </ul>
    </Container>
  );
}