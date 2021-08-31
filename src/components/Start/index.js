import { Form, Title } from "./styles";

export default function Initial({ game, fcUpPlayer, fcUpCount }) {
  const startRace = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    fcUpPlayer({ name });
    fcUpCount({ count: true });
  };

  return (
    <>
      {game.count ? (
        <h1>{game.countdown >= 0 ? parseInt(game.countdown / 1000) : "Largada"}</h1>
      ) : (
        <>
          <Title>Desafio Upnid</Title>
          <Form onSubmit={startRace}>
            <input type="text" placeholder="Digite seu nome" />
            <button type="submit">Iniciar corrida</button>
          </Form>
        </>
      )}
    </>
  );
}