

async function newGame() {
    const response = await fetch('https://curvy-kiwis-flow.loca.lt/api/v1/pregame/newgame/Jude', getNewGameCall())
    return response.json()
  }

  async function gameStatus(code) {
    const response = await fetch(`https://curvy-kiwis-flow.loca.lt/api/v1/pregame/${code}`, getGameStatus())
    return response.json()
  }
  
  // don't touch below this line
  
async function onNewGamePress(){
  const game = await newGame();
  console.log(game);
  const code = game[0];
  console.log(`Fetched code: ${code}`);
  return code;
}
async function onGameStatusRefresh(code){
  const game = await gameStatus(code);
  // console.log(game);
  return game;
}

  function getGameStatus() {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    }
  }
  
  function getNewGameCall() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

export default {onNewGamePress, onGameStatusRefresh}
