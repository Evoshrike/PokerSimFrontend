const hostURL = `https://clear-sloths-lead.loca.lt`;

async function newGame() {
  try {
    const response = await fetch(`${hostURL}/api/v1/pregame/newgame/Jude`, getNewGameCall());
   
    return response.json();
  } catch (error) {
    console.error("Error fetching new game:", error);
    return null;
  }
}

async function joinGamePress(username: string, code: number) {
  try {
    const response = await fetch(`${hostURL}/api/v1/joingame/${code}`, getJoinGameCall(username));
    if (!response.ok) {
      console.error("Error in joinGame:", response.statusText);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error joining game:", error);
    return null;
  }
}

async function gameStatus(code: number) {
  try {
    const response = await fetch(`${hostURL}/api/v1/pregame/${code}`, getGameStatus());
    
    return response.json();
  } catch (error) {
    console.error("Error fetching status:", error);
    return null;
  }
}

async function onNewGamePress() {
  console.log("We pressed newGame");
  const game = await newGame();
  if (!game || !Array.isArray(game) || game.length === 0) {
    console.error("Unexpected response from newGame:", game);
    return null;
  }
  const code = game[0];
  console.log(`Fetched code: ${code}`);
  return code;
}

async function onGameStatusRefresh(code: number) {
  const game = await gameStatus(code);
  if (!game || !game.players) {
    console.error("Unexpected response from gameStatus:", game);
    return { players: [] };
  }
  return game;
}

function getGameStatus() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

function getJoinGameCall(username: string) {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  };
}

function getNewGameCall() {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export default { onNewGamePress, onGameStatusRefresh, joinGamePress };
