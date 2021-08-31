import { Speedway } from "./style";
import Car from "../Car/index";

export default function Game({ game, player, position }) {
  return (
    <>
      {game.pause ? (
        <>
          <h1>PAUSE</h1>
          <h2>Press 'ESC' to Play</h2>
        </>
      ) : (
        <>
          <Speedway />
          <Car pos={position.pos} turbo={player.turbo} />
        </>
      )}
    </>
  );
}
