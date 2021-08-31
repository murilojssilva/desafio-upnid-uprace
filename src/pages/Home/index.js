import { useEffect } from "react";

import { Container, Scenario } from "./style";

import Game from "../../components/Game/index";
import Start from "../../components/Start/index";

import Joystick from "../../components/Joystick"

import { usePosition } from "../../hooks/usePosition";
import { useGame } from "../../hooks/useGame";
import { usePlayer } from "../../hooks/usePlayer";

export default function Main() {
  const [position, upPosition] = usePosition();
  const [game, upStarted, upPause, upCount, upCountdown] = useGame();
  const [player, upUser, upTurbo] = usePlayer();

  const switchcase = (cases, defaultCase, key) =>
    key in cases ? cases[key]() : defaultCase;

  const switchcaseF = (cases, defaultCase, key) =>
    switchcase(cases, defaultCase, key);

  const keyPress = event => {
    const positions = {
      right: "10%",
      left: "75%",
      center: "45%"
    };

    switchcaseF(
      {
        a: () => upPosition({ pos: positions.left }),
        s: () => upPosition({ pos: positions.center }),
        d: () => upPosition({ pos: positions.right }),
        arrowleft: () => upPosition({ pos: positions.left }),
        arrowdown: () => upPosition({ pos: positions.center }),
        arrowright: () => upPosition({ pos: positions.right }),
        t: () => upTurbo({ turbo: true }),
        escape: () => upPause()
      },
      null,
      event.key.toLowerCase()
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    if (game.count) {
      setInterval(() => {
        if (game.countdown >= 0) {
          upCountdown();
        } else {
          upCount({ count: false });
          upStarted({ started: true });
        }
      }, 100);
    }

    return () => {
      clearInterval();
      window.removeEventListener("keydown", keyPress);
    };
  });

  return (
    <>
      <Container>
        <Scenario>
          {game.started ? (
            <Game game={game} player={player} position={position} />
          ) : (
            <Start game={game} fcUpPlayer={upUser} fcUpCount={upCount} />
          )}
        </Scenario>
        <Joystick />
      </Container>
    </>
  );
}
