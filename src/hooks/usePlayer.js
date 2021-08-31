import { useState } from "react";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    name: null,
    turbo: false,
  });

  const upPlayer = ({ name }) =>
    setPlayer(prev => ({
      ...prev,
      name: name
    }));

  
  const upTurbo = ({ turbo }) =>
    setPlayer(prev => ({
      ...prev,
      turbo: turbo ? turbo : prev.turbo
    }));

  return [player, upPlayer, upTurbo];
};
